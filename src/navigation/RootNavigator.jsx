import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import CreateRoomScreen from '../screens/CreateRoomScreen';
import ProfileErrorScreen from '../screens/ProfileErrorScreen';
import WaitingRoomScreen from '../screens/WaitingRoomScreen';
import SettingsScreen from '../screens/SettingsScreen';

import useAuthContext from '../contexts/auth-context/useAuthContext';
import useProfileContext from '../contexts/profile-context/useProfileContext';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    const { user, isLoading } = useAuthContext();
    const { profile, error: profileError } = useProfileContext();

    const isProfileLoading = user && !profile && !profileError;

    if (isLoading || isProfileLoading) {
        return null;
    }

    return (
        <Stack.Navigator>
            {user && profile && (
                <>
                    <Stack.Screen
                        name='App'
                        component={AppNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='CreateRoom'
                        component={CreateRoomScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='WaitingRoom'
                        component={WaitingRoomScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Settings'
                        component={SettingsScreen}
                        options={{ headerShown: false }}
                    />
                </>
            )}
            {user && !profile && (
                <Stack.Screen
                    name='ProfileError'
                    component={ProfileErrorScreen}
                    options={{ headerShown: false }}
                />
            )}
            {!user && (
                <Stack.Screen
                    name='Auth'
                    component={AuthNavigator}
                    options={{ headerShown: false }}
                />
            )}
        </Stack.Navigator>
    );
}
