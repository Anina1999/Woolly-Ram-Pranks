import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import RamAvatar from '../components/characters/RamAvatar';
import StatCard from '../components/profile/StatCard';

import profile from '../data/profile';

import formatTime from '../utils/formatTime';
import getBandanaName from '../utils/getBandanaName';

import { colors } from '../styles/theme';

export default function ProfileScreen({ navigation }) {
    const winRate = profile.gamesPlayed > 0 ? Math.round((profile.wins / profile.gamesPlayed) * 100) : 0;

    const handlePressLogOut = () => {
        // simulates log out by leading to lobby cause we don't have auth screens and logic yet
        //TODO auth screens and logic
        navigation.navigate('Lobby');
    };

    return (
        <SafeAreaView>
            <Text>Profile</Text>
            <Pressable accessibilityRole='button' accessibilityLabel='Change photo'>
                <RamAvatar wool={profile.wool} bandana={profile.bandana} size={136} />
            </Pressable>
            <Text>{profile.name}</Text>
            <Text>{profile.email}</Text>
            <View>
                <StatCard value={profile.gamesPlayed} label='Games played' />
                <StatCard value={profile.wins} label='Wins' />
                <StatCard value={formatTime(profile.bestTimeSeconds)} label='Best time' />
            </View>
            <View>
                <View>
                    <Text>Win rate</Text>
                    <Text>{winRate}%</Text>
                </View>
                <View>
                    <Text>Favourite bandana</Text>
                    <Text>{getBandanaName(profile.bandana)}</Text>
                </View>
            </View>
            <Pressable onPress={handlePressLogOut}>
                <Text style={styles.logOutText}>Log out</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    logOutText: {
        color: colors.danger,
    },
});
