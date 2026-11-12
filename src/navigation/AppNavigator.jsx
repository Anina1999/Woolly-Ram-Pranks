import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabIcon from '../components/TabIcon';
import LobbyScreen from '../screens/LobbyScreen';
import RoomsScreen from '../screens/RoomsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';

const Tabs = createBottomTabNavigator();

export default function AppNavigator() {
    const insets = useSafeAreaInsets();

    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#F2B33D',
                tabBarInactiveTintColor: '#D9C9A8',
                tabBarStyle: {
                    height: 76 + insets.bottom,
                    borderTopWidth: 3,
                    borderTopColor: '#5E3A1E',
                    backgroundColor: '#3A2616',
                },
                tabBarItemStyle: {
                    justifyContent: 'center',
                    gap: 4,
                },
                tabBarIconStyle: {
                    width: 64,
                    height: 32,
                },
                tabBarLabelStyle: {
                    fontFamily: 'NunitoSans_800ExtraBold',
                    fontSize: 12,
                },
            }}
        >
            <Tabs.Screen
                name='Lobby'
                component={LobbyScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <TabIcon
                            source={require('../assets/icons/lobby.png')}
                            focused={focused}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='Rooms'
                component={RoomsScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <TabIcon
                            source={require('../assets/icons/rooms.png')}
                            focused={focused}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <TabIcon
                            source={require('../assets/icons/profile.png')}
                            focused={focused}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='Leaderboard'
                component={LeaderboardScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <TabIcon
                            source={require('../assets/icons/leaderboard.png')}
                            focused={focused}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
}
