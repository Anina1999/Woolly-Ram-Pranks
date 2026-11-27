import { useEffect, useState } from 'react';

import { getProfile } from '../services';

export default function useProfileData(userId) {
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const reloadProfile = async () => {
        setIsLoading(true);

        try {
            const loadedProfile = await getProfile(userId);
            setProfile(loadedProfile);
            setError(null);
        } catch (loadError) {
            setError(loadError);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (userId) {
            reloadProfile();
        } else {
            setProfile(null);
            setError(null);
        }
    }, [userId]);

    return { profile, isLoading, error, reloadProfile };
}
