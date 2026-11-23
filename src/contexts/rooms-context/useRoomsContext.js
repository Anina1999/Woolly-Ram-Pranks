import { useContext } from 'react';

import RoomsContext from './RoomsContext';

export default function useRoomsContext() {
    return useContext(RoomsContext);
}
