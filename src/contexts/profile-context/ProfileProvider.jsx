import ProfileContext from './ProfileContext';

import useAuthContext from '../auth-context/useAuthContext';

import useProfileData from '../../hooks/useProfileData';

export default function ProfileProvider({ children }) {
    const { user } = useAuthContext();
    const profileData = useProfileData(user ? user.id : null);

    return (
        <ProfileContext.Provider value={profileData}>
            {children}
        </ProfileContext.Provider>
    );
}
