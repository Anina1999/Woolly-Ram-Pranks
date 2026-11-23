import { useEffect, useState } from 'react';

import profile from '../data/profile';

import { getPlayers, getRooms } from '../services';

export default function useRoomsData() {
    const [rooms, setRooms] = useState([]);
    const [players, setPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const reloadData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const [loadedRooms, loadedPlayers] = await Promise.all([getRooms(), getPlayers()]);

            setRooms(loadedRooms);
            setPlayers(loadedPlayers.map((player) => {
                const isHost = loadedRooms.some((room) => room.id === player.roomId && room.hostId === player.profileId);

                return {
                    ...player,
                    host: isHost,
                    ready: isHost || player.ready,
                    you: player.name === profile.name,
                };
            }));
        } catch (loadError) {
            setError(loadError);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        reloadData();
    }, []);

    return { rooms, players, isLoading, error, reloadData };
}
