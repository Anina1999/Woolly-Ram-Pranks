import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigator from './AppNavigator';
import CreateRoomScreen from '../screens/CreateRoomScreen';
import WaitingRoomScreen from '../screens/WaitingRoomScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='App'
                component={AppNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='CreateRoom'
                component={CreateRoomScreen}
                options={{ title: 'Create room' }}
            />
            <Stack.Screen
                name='WaitingRoom'
                component={WaitingRoomScreen}
                options={{ title: 'Waiting room' }}
            />
            <Stack.Screen
                name='Settings'
                component={SettingsScreen}
            />
        </Stack.Navigator>
    );
}