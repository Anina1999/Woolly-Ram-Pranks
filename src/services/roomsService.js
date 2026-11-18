import supabase from './supabase';

import { addRoomPlayer } from './roomPlayersService';

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

export async function createRoom(room) {
    const { data, error } = await supabase
        .from('rooms')
        .insert({
            name: room.name,
            max_players: room.maxPlayers,
            difficulty: room.difficulty,
            host_id: room.hostId,
        })
        .select('id')
        .single();

    if (error) {
        throw error;
    }

    try {
        await addRoomPlayer(data.id, room.hostId);
    } catch (addError) {
        await deleteRoom(data.id);
        throw addError;
    }

    return data;
}

export async function deleteRoom(roomId) {
    const { error } = await supabase
        .from('rooms')
        .delete()
        .eq('id', roomId);

    if (error) {
        throw error;
    }
}
