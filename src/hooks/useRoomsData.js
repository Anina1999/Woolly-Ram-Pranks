import { useEffect, useState } from 'react';

import profile from '../data/profile';

import { getPlayers } from '../services/roomPlayersService';
import { getRooms } from '../services/roomsService';

export default function useRoomsData() {
    const [rooms, setRooms] = useState([]);
    const [players, setPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const [loadedRooms, loadedPlayers] = await Promise.all([getRooms(), getPlayers()]);

                setRooms(loadedRooms);
                setPlayers(loadedPlayers.map((player) => ({
                    ...player,
                    host: loadedRooms.some((room) => room.id === player.roomId && room.hostId === player.profileId),
                    you: player.name === profile.name,
                })));
            } catch (loadError) {
                setError(loadError);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    return { rooms, setRooms, players, setPlayers, isLoading, error };
}
