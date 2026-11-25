import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LeaderboardRow from '../components/leaderboard/LeaderboardRow';
import PodiumPlace from '../components/leaderboard/PodiumPlace';
import SegmentTab from '../components/common/SegmentTab';

import leaderboard from '../data/leaderboard';
import profile from '../data/profile';

import formatTime from '../utils/formatTime';

import { colors, fonts } from '../styles/theme';

export default function LeaderboardScreen() {
    const [first, second, third] = leaderboard.players;
    const otherPlayers = leaderboard.players.slice(3);

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <Text style={styles.title}>Leaderboard</Text>
                <Text style={styles.levelChip}>Meadow Farm</Text>
            </View>
            <View style={styles.tabs}>
                <SegmentTab label='Best time' variant='dark' selected={true} />
                <SegmentTab label='Most wins' variant='dark' selected={false} />
            </View>
            <View>
                <PodiumPlace player={second} place={2} value={formatTime(second.bestTimeSeconds)} />
                <PodiumPlace player={first} place={1} value={formatTime(first.bestTimeSeconds)} />
                <PodiumPlace player={third} place={3} value={formatTime(third.bestTimeSeconds)} />
            </View>
            <FlatList
                data={otherPlayers}
                keyExtractor={(player) => player.id}
                renderItem={({ item, index }) => (
                    <LeaderboardRow rank={index + 4} player={item} value={formatTime(item.bestTimeSeconds)} />
                )}
            />
            <LeaderboardRow
                rank={leaderboard.myRank}
                player={profile}
                value={formatTime(profile.bestTimeSeconds)}
                isMe={true}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sky,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
        marginHorizontal: 16,
    },
    title: {
        fontFamily: fonts.display,
        fontSize: 32,
        lineHeight: 36,
        color: colors.textOnScene,
        textShadowColor: colors.text,
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
    },
    levelChip: {
        overflow: 'hidden',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 999,
        fontFamily: fonts.extraBold,
        fontSize: 13,
        color: colors.textOnScene,
        backgroundColor: colors.levelChip,
    },
    tabs: {
        flexDirection: 'row',
        gap: 4,
        marginTop: 16,
        marginHorizontal: 16,
        padding: 4,
        borderRadius: 16,
        backgroundColor: colors.surfaceDark,
    },
});
