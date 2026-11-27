import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import CreateRoomScreen from '../screens/CreateRoomScreen';
import WaitingRoomScreen from '../screens/WaitingRoomScreen';
import SettingsScreen from '../screens/SettingsScreen';

import useAuthContext from '../contexts/auth-context/useAuthContext';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    const { user, isLoading } = useAuthContext();

    if (isLoading) {
        return null;
    }

    return (
        <Stack.Navigator>
            {user ? (
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
            ) : (
                <Stack.Screen
                    name='Auth'
                    component={AuthNavigator}
                    options={{ headerShown: false }}
                />
            )}
        </Stack.Navigator>
    );
}
