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

export async function getNextHost(roomId, profileId) {
    const { data, error } = await supabase
        .from('room_players')
        .select('profileId:profile_id')
        .eq('room_id', roomId)
        .neq('profile_id', profileId)
        .order('joined_at')
        .limit(1)
        .maybeSingle();

    if (error) {
        throw error;
    }

    return data;
}

export async function deleteRoomPlayer(profileId) {
    const { error } = await supabase
        .from('room_players')
        .delete()
        .eq('profile_id', profileId);

    if (error) {
        throw error;
    }
}

export async function joinRoom(roomId, profileId) {
    const { data, error } = await supabase
        .rpc('join_room', { p_profile_id: profileId, p_room_id: roomId });

    if (error) {
        throw error;
    }

    return data;
}

export async function joinRoomByCode(code, profileId) {
    const { data, error } = await supabase
        .rpc('join_room', { p_profile_id: profileId, p_code: code });

    if (error) {
        throw error;
    }

    return data;
}
