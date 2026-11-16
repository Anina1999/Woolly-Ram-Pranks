import { createContext, useState } from 'react';

import initialPlayers from '../data/players';

export const RoomsContext = createContext();

export default function RoomsProvider({ children }) {
    const [players, setPlayers] = useState(initialPlayers);

    return (
        <RoomsContext.Provider value={{ players, setPlayers }}>
            {children}
        </RoomsContext.Provider>
    );
}
