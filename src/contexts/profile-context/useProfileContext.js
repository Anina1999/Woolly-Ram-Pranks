import { useContext } from 'react';

import ProfileContext from './ProfileContext';

export default function useProfileContext() {
    return useContext(ProfileContext);
}
