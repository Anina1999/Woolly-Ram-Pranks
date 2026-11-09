import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';

import LobbyScreen from '../screens/LobbyScreen';
import RoomsScreen from '../screens/RoomsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';

const Tabs = createNativeBottomTabNavigator();

export default function RootNavigator() {
  return (
    <>
      <Tabs.Navigator
        screenOptions={{
          tabBarIconSize: 22,
          tabBarLabelVisibilityMode: 'labeled',
        }}
      >
        <Tabs.Screen
          name='Lobby'
          component={LobbyScreen}
          options={{
            tabBarIcon: { type: 'image', source: require('../assets/icons/lobby.png') },
          }}
        />
        <Tabs.Screen
          name='Rooms'
          component={RoomsScreen}
          options={{
            tabBarIcon: { type: 'image', source: require('../assets/icons/rooms.png') },
          }}
        />
        <Tabs.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            tabBarIcon: { type: 'image', source: require('../assets/icons/profile.png') },
          }}
        />
        <Tabs.Screen
          name='Leaderboard'
          component={LeaderboardScreen}
          options={{
            tabBarIcon: { type: 'image', source: require('../assets/icons/leaderboard.png') },
          }}
        />
      </Tabs.Navigator>
    </>
  );
}
