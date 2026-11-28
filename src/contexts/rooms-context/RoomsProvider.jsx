import RoomsContext from './RoomsContext';

import useAuthContext from '../auth-context/useAuthContext';

import useRoomsData from '../../hooks/useRoomsData';

export default function RoomsProvider({ children }) {
    const { user } = useAuthContext();
    const roomsData = useRoomsData(user ? user.id : null);

    return (
        <RoomsContext.Provider value={roomsData}>
            {children}
        </RoomsContext.Provider>
    );
}
