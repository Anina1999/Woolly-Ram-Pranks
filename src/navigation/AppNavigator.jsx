import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabIcon from '../components/TabIcon';
import LobbyScreen from '../screens/LobbyScreen';
import RoomsScreen from '../screens/RoomsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';

const Tabs = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <Tabs.Navigator screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name='Lobby'
                component={LobbyScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabIcon source={require('../assets/icons/lobby.png')} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='Rooms'
                component={RoomsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabIcon source={require('../assets/icons/rooms.png')} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabIcon source={require('../assets/icons/profile.png')} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='Leaderboard'
                component={LeaderboardScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabIcon source={require('../assets/icons/leaderboard.png')} color={color} />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
}
