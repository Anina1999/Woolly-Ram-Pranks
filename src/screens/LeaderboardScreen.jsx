import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LeaderboardBackground from '../components/leaderboard/LeaderboardBackground';
import LeaderboardRow from '../components/leaderboard/LeaderboardRow';
import PodiumPlace from '../components/leaderboard/PodiumPlace';
import ScreenPanel from '../components/common/ScreenPanel';
import SegmentTab from '../components/common/SegmentTab';

import leaderboard from '../data/leaderboard';
import profile from '../data/profile';

import formatTime from '../utils/formatTime';
import getSortedPlayers from '../utils/getSortedPlayers';

import { colors, fonts } from '../styles/theme';

export default function LeaderboardScreen() {
    const [sortBy, setSortBy] = useState('time');

    const isWins = sortBy === 'wins';
    const sortedPlayers = getSortedPlayers(leaderboard.players, sortBy);
    const [first, second, third] = sortedPlayers;
    const otherPlayers = sortedPlayers.slice(3);

    const getValue = (player) => (isWins ? `${player.wins} wins` : formatTime(player.bestTimeSeconds));
    const getDetail = (player) => (isWins ? `Best ${formatTime(player.bestTimeSeconds)}` : `${player.wins} wins`);

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <LeaderboardBackground />
            <View style={styles.header}>
                <Text style={styles.title}>Leaderboard</Text>
                <Text style={styles.levelChip}>Meadow Farm</Text>
            </View>
            <View style={styles.tabs}>
                <SegmentTab
                    label='Best time'
                    variant='dark'
                    selected={!isWins}
                    onPress={() => setSortBy('time')}
                />
                <SegmentTab
                    label='Most wins'
                    variant='dark'
                    selected={isWins}
                    onPress={() => setSortBy('wins')}
                />
            </View>
            <View style={styles.podium}>
                <PodiumPlace player={second} place={2} value={getValue(second)} />
                <PodiumPlace player={first} place={1} value={getValue(first)} />
                <PodiumPlace player={third} place={3} value={getValue(third)} />
            </View>
            <ScreenPanel>
                <FlatList
                    data={otherPlayers}
                    keyExtractor={(player) => player.id}
                    contentContainerStyle={styles.list}
                    renderItem={({ item, index }) => (
                        <LeaderboardRow
                            rank={index + 4}
                            player={item}
                            value={getValue(item)}
                            detail={getDetail(item)}
                        />
                    )}
                />
                <LeaderboardRow
                    rank={leaderboard.myRank}
                    player={profile}
                    value={getValue(profile)}
                    detail={getDetail(profile)}
                    isMe={true}
                    style={styles.myRow}
                />
            </ScreenPanel>
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
    podium: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 210,
        marginTop: 22,
        marginHorizontal: 16,
    },
    list: {
        gap: 8,
        paddingTop: 12,
        paddingHorizontal: 10,
        paddingBottom: 12,
    },
    myRow: {
        marginHorizontal: 8,
        marginBottom: 10,
    },
});
