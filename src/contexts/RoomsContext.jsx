import { createContext, useState } from 'react';

import initialPlayers from '../data/players';
import initialRooms from '../data/rooms';

export const RoomsContext = createContext();

export default function RoomsProvider({ children }) {
    const [rooms, setRooms] = useState(initialRooms);
    const [players, setPlayers] = useState(initialPlayers);

    return (
        <RoomsContext.Provider value={{ rooms, setRooms, players, setPlayers }}>
            {children}
        </RoomsContext.Provider>
    );
}
