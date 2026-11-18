import supabase from './supabase';

export async function getRooms() {
    const { data, error } = await supabase
        .from('rooms')
        .select('id, name, maxPlayers:max_players, difficulty, status, mode, map, isPrivate:is_private, hostId:host_id')
        .order('created_at');

    if (error) {
        throw error;
    }

    return data;
}
