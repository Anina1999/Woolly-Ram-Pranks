import RoomsContext from './RoomsContext';

import useRoomsData from '../../hooks/useRoomsData';

export default function RoomsProvider({ children }) {
    const roomsData = useRoomsData();

    return (
        <RoomsContext.Provider value={roomsData}>
            {children}
        </RoomsContext.Provider>
    );
}
