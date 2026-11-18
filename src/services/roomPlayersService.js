import supabase from './supabase';

export async function getPlayers() {
    const { data, error } = await supabase
        .from('room_players')
        .select('id, roomId:room_id, profileId:profile_id, ready:is_ready, ...profiles(name:username, wool, bandana)')
        .order('joined_at');

    if (error) {
        throw error;
    }

    return data;
}

export async function addRoomPlayer(roomId, profileId) {
    const { error } = await supabase
        .from('room_players')
        .insert({ room_id: roomId, profile_id: profileId });

    if (error) {
        throw error;
    }
}
