import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

import { getSessionUser, onAuthChange, startAutoRefresh, stopAutoRefresh } from '../services';

export default function useAuthSession() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const loadUser = async () => {
        try {
            const sessionUser = await getSessionUser();
            setUser(sessionUser);
        } catch {
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChangeAppState = (appState) => {
        if (appState === 'active') {
            startAutoRefresh();
        } else {
            stopAutoRefresh();
        }
    };

    useEffect(() => {
        loadUser();

        const authSubscription = onAuthChange(setUser);
        const appStateSubscription = AppState.addEventListener('change', handleChangeAppState);

        return () => {
            authSubscription.unsubscribe();
            appStateSubscription.remove();
        };
    }, []);

    return { user, isLoading };
}
