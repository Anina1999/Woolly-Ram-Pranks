import { StyleSheet, Text, View } from 'react-native';

import RamAvatar from '../characters/RamAvatar';

import { colors, fonts } from '../../styles/theme';

export default function LeaderboardRow({ rank, player, value, detail, isMe, style }) {
    return (
        <View style={[styles.row, isMe && styles.rowMe, style]}>
            <Text style={[styles.rank, isMe && styles.rankMe]}>{rank}</Text>
            <RamAvatar wool={player.wool} bandana={player.bandana} size={40} style={styles.avatar} />
            <View style={styles.info}>
                <Text style={styles.name} numberOfLines={1}>
                    {player.name}
                    {isMe && <Text style={styles.you}> (you)</Text>}
                </Text>
                <Text style={styles.detail}>{detail}</Text>
            </View>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        minHeight: 56,
        paddingVertical: 6,
        paddingLeft: 8,
        paddingRight: 12,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: colors.rowBorder,
        backgroundColor: colors.card,
    },
    rowMe: {
        minHeight: 60,
        borderWidth: 3,
        borderColor: colors.myRowBorder,
        backgroundColor: colors.myRow,
        boxShadow: '0px -4px 12px rgba(46, 33, 23, 0.18)',
    },
    rank: {
        width: 34,
        textAlign: 'center',
        fontFamily: fonts.display,
        fontSize: 20,
        color: colors.muted,
    },
    rankMe: {
        color: colors.myRank,
    },
    avatar: {
        borderWidth: 2,
        borderColor: colors.frame,
    },
    info: {
        flex: 1,
    },
    name: {
        fontFamily: fonts.extraBold,
        fontSize: 15,
        color: colors.text,
    },
    you: {
        fontFamily: fonts.bold,
        color: colors.muted,
    },
    detail: {
        fontFamily: fonts.regular,
        fontSize: 12,
        color: colors.muted,
    },
    value: {
        fontFamily: fonts.display,
        fontSize: 20,
        color: colors.text,
    },
});
