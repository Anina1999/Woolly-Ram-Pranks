import AuthContext from './AuthContext';

import { signIn, signOut, signUp } from '../../services';

import useAuthSession from '../../hooks/useAuthSession';

export default function AuthProvider({ children }) {
    const { user, isLoading } = useAuthSession();

    const login = async (email, password) => {
        await signIn(email, password);
    };

    const register = async ({ username, email, password }) => {
        await signUp({ username, email, password });
    };

    const logout = async () => {
        await signOut();
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
