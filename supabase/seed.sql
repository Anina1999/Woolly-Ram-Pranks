insert into profiles (id, username, wool, bandana)
select users.id, sample.username, sample.wool, sample.bandana
from (
    values
        ('bramble@example.com', 'Bramble', 'black', '#E04436'),
        ('curly@example.com', 'Curly', 'beige', '#3B7DDD'),
        ('fleecy@example.com', 'Fleecy', 'brown', '#F2C12E'),
        ('hornsby@example.com', 'Hornsby', 'grey', '#4DAE45'),
        ('mutton_mo@example.com', 'Mutton_Mo', 'rust', '#9558D3'),
        ('lambo@example.com', 'Lambo', 'black', '#E04436'),
        ('shearlock@example.com', 'Shearlock', 'beige', '#3B7DDD'),
        ('woolverine@example.com', 'Woolverine', 'rust', '#9558D3'),
        ('baabara@example.com', 'Baabara', 'brown', '#F2C12E'),
        ('baarnaby@example.com', 'Baarnaby', 'grey', '#3B7DDD')
) as sample (email, username, wool, bandana)
join auth.users as users on users.email = sample.email;

insert into rooms (name, max_players, difficulty, status, is_private, host_id)
select sample.name, sample.max_players, sample.difficulty, sample.status, sample.is_private, profiles.id
from (
    values
        ('Woolly Rebels', 5, 'normal', 'WAITING', false, 'Bramble'),
        ('Night Shift Baaand', 5, 'expert', 'PLAYING', false, 'Mutton_Mo'),
        ('Puddle Pals', 2, 'normal', 'WAITING', false, 'Lambo'),
        ('Hay Raiders', 4, 'easy', 'WAITING', false, 'Baarnaby'),
        ('Secret Pasture', 4, 'hard', 'WAITING', true, 'Baabara')
) as sample (name, max_players, difficulty, status, is_private, host)
join profiles on profiles.username = sample.host;

insert into room_players (room_id, profile_id, is_ready, joined_at)
select rooms.id, profiles.id, sample.is_ready, now() - sample.minutes_ago * interval '1 minute'
from (
    values
        ('Woolly Rebels', 'Bramble', true, 30),
        ('Woolly Rebels', 'Curly', true, 25),
        ('Woolly Rebels', 'Fleecy', false, 20),
        ('Night Shift Baaand', 'Mutton_Mo', true, 40),
        ('Night Shift Baaand', 'Shearlock', true, 35),
        ('Night Shift Baaand', 'Woolverine', true, 30),
        ('Puddle Pals', 'Lambo', true, 15),
        ('Puddle Pals', 'Hornsby', false, 10),
        ('Hay Raiders', 'Baarnaby', true, 5),
        ('Secret Pasture', 'Baabara', true, 12)
) as sample (room, username, is_ready, minutes_ago)
join rooms on rooms.name = sample.room
join profiles on profiles.username = sample.username;
