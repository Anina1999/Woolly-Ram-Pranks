create table profiles (
    id uuid primary key references auth.users (id) on delete cascade,
    username text not null unique check (username ~ '^[A-Za-z0-9_]{3,16}$'),
    wool text not null default 'black' check (wool in ('black', 'beige', 'brown', 'grey', 'rust')),
    bandana text not null default '#E04436' check (bandana in ('#E04436', '#3B7DDD', '#F2C12E', '#4DAE45', '#9558D3')),
    avatar_url text,
    created_at timestamptz not null default now()
);

create function generate_room_code()
returns text
language sql
set search_path = ''
as $$
    select substr(characters, 1, 3) || '-' || substr(characters, 4)
    from (
        select string_agg(substr('ABCDEFGHJKLMNPQRSTUVWXYZ23456789', floor(random() * 32)::int + 1, 1), '') as characters
        from generate_series(1, 7)
    ) as random_code;
$$;

create table rooms (
    id uuid primary key default gen_random_uuid(),
    name text not null check (char_length(trim(name)) between 3 and 24),
    max_players int not null default 5 check (max_players between 2 and 5),
    difficulty text not null default 'normal' check (difficulty in ('easy', 'normal', 'challenging', 'hard', 'expert')),
    status text not null default 'WAITING' check (status in ('WAITING', 'PLAYING')),
    mode text not null default 'Co-op',
    map text not null default 'Meadow Farm',
    is_private boolean not null default false,
    code text not null unique default generate_room_code(),
    host_id uuid not null references profiles (id) on delete cascade,
    created_at timestamptz not null default now()
);

create table room_players (
    id uuid primary key default gen_random_uuid(),
    room_id uuid not null references rooms (id) on delete cascade,
    profile_id uuid not null unique references profiles (id) on delete cascade,
    is_ready boolean not null default false,
    joined_at timestamptz not null default now()
);

alter table profiles enable row level security;
alter table rooms enable row level security;
alter table room_players enable row level security;

grant select on profiles, rooms, room_players to anon, authenticated;

create policy "Everyone can read profiles"
    on profiles for select
    to anon, authenticated
    using (true);

create policy "Everyone can read rooms"
    on rooms for select
    to anon, authenticated
    using (true);

create policy "Everyone can read room players"
    on room_players for select
    to anon, authenticated
    using (true);

-- Temporary write rights for anon, tightened when auth is added
grant insert, delete on rooms to anon;
grant insert on room_players to anon;

create policy "Temporary: anon can create rooms"
    on rooms for insert
    to anon
    with check (true);

create policy "Temporary: anon can delete rooms"
    on rooms for delete
    to anon
    using (true);

-- Only the host is added directly (Create room), everyone else joins with join_room
create policy "Temporary: anon can add the host of a room"
    on room_players for insert
    to anon
    with check (exists (select 1 from rooms where rooms.id = room_id and rooms.host_id = profile_id));

-- Joins a room by id (public rooms) or by code (private rooms) and returns the room id.
-- Temporary: p_profile_id comes from the app until auth, then it becomes auth.uid().
create function join_room(p_profile_id uuid, p_room_id uuid default null, p_code text default null)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
    target_room public.rooms;
    player_count int;
begin
    if p_code is null then
        select * into target_room from public.rooms where id = p_room_id for update;
    else
        select * into target_room from public.rooms where code = p_code and is_private for update;
    end if;

    if not found then
        if p_code is null then
            raise exception 'ROOM_NOT_FOUND';
        end if;
        raise exception 'CODE_NOT_FOUND';
    end if;

    if target_room.is_private and p_code is null then
        raise exception 'ROOM_PRIVATE';
    end if;

    if target_room.status = 'PLAYING' then
        raise exception 'ROOM_PLAYING';
    end if;

    select count(*) into player_count from public.room_players where room_id = target_room.id;

    if player_count >= target_room.max_players then
        raise exception 'ROOM_FULL';
    end if;

    insert into public.room_players (room_id, profile_id) values (target_room.id, p_profile_id);

    return target_room.id;
end;
$$;

grant execute on function join_room(uuid, uuid, text) to anon;
