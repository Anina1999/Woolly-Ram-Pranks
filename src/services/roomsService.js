import supabase from './supabase';

import { addRoomPlayer, deleteRoomPlayer, getNextHost } from './roomPlayersService';

export async function getRooms() {
    const { data, error } = await supabase
        .from('rooms')
        .select(`
            id, name, maxPlayers:max_players, difficulty, status, mode, map, isPrivate:is_private, hostId:host_id,
            host:profiles!host_id(name:username, wool, bandana), ...room_codes(code)
        `)
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
            is_private: room.isPrivate,
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

export async function updateRoomHost(roomId, hostId) {
    const { error } = await supabase
        .from('rooms')
        .update({ host_id: hostId })
        .eq('id', roomId);

    if (error) {
        throw error;
    }
}

export async function updateRoomSettings(roomId, settings) {
    const { error } = await supabase
        .from('rooms')
        .update({
            is_private: settings.isPrivate,
            max_players: settings.maxPlayers,
            difficulty: settings.difficulty,
        })
        .eq('id', roomId);

    if (error) {
        throw error;
    }
}

export async function leaveRoom(roomId, profileId, isHost) {
    if (isHost) {
        const nextHost = await getNextHost(roomId, profileId);

        if (nextHost === null) {
            await deleteRoom(roomId);
            return;
        }

        await updateRoomHost(roomId, nextHost.profileId);
    }

    await deleteRoomPlayer(profileId);
}
