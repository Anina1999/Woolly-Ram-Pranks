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

create policy "Temporary: anon can add room players"
    on room_players for insert
    to anon
    with check (true);
