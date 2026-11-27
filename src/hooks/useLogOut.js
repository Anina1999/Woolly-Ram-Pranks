import { useState } from 'react';

import useAuthContext from '../contexts/auth-context/useAuthContext';

export default function useLogOut() {
    const { logout } = useAuthContext();
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [logOutError, setLogOutError] = useState('');

    const handlePressLogOut = async () => {
        setLogOutError('');
        setIsLoggingOut(true);

        try {
            await logout();
        } catch {
            setLogOutError("Couldn't log out. Check your connection and try again.");
        } finally {
            setIsLoggingOut(false);
        }
    };

    return { isLoggingOut, logOutError, handlePressLogOut };
}
