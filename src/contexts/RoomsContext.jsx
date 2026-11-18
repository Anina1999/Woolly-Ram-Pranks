import { createContext } from 'react';

import useRoomsData from '../hooks/useRoomsData';

export const RoomsContext = createContext();

export default function RoomsProvider({ children }) {
    const roomsData = useRoomsData();

    return (
        <RoomsContext.Provider value={roomsData}>
            {children}
        </RoomsContext.Provider>
    );
}
