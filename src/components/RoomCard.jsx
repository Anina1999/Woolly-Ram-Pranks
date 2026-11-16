import { Pressable, StyleSheet, Text, View } from 'react-native';

import Badge from './Badge';
import DifficultyPips from './DifficultyPips';
import PlayersIcon from './PlayersIcon';
import RamAvatar from './RamAvatar';

import getDifficulty from '../utils/getDifficulty';
import getStatusColors from '../utils/getStatusColors';

import { colors, fonts } from '../styles/theme';

export default function RoomCard({ room, onPress }) {
    const statusColors = getStatusColors(room.status);
    const difficulty = getDifficulty(room.difficulty);
    const isPlaying = room.status === 'PLAYING';
    const isFull = room.players === room.maxPlayers;
    const isClosed = isPlaying || isFull;

    return (
        <Pressable
            style={({ pressed }) => [styles.card, isClosed && styles.cardClosed, pressed && styles.cardPressed]}
            onPress={onPress}
            disabled={isClosed}
        >
            <RamAvatar wool={room.wool} bandana={room.bandana} size={46} style={styles.avatar} />
            <View style={styles.info}>
                <Text style={styles.name} numberOfLines={1}>{room.name}</Text>
                <Text style={styles.host} numberOfLines={1}>Host: {room.host}</Text>
                <View style={styles.difficulty}>
                    <DifficultyPips difficulty={room.difficulty} size='small' />
                    <Text style={[styles.difficultyName, { color: difficulty.text }]}>{difficulty.name}</Text>
                </View>
            </View>
            <View style={styles.side}>
                <View style={styles.players}>
                    <PlayersIcon />
                    <Text style={styles.playersText}>
                        {room.players}
                        <Text style={styles.maxPlayers}>/{room.maxPlayers}</Text>
                    </Text>
                </View>
                <Badge label={room.status} backgroundColor={statusColors.background} color={statusColors.text}>
                    <View style={[styles.statusDot, { backgroundColor: statusColors.dot }]} />
                </Badge>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        minHeight: 76,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 18,
        borderWidth: 2,
        borderBottomWidth: 5,
        borderColor: colors.border,
        backgroundColor: colors.card,
    },
    cardClosed: {
        opacity: 0.75,
        borderColor: colors.disabledBorder,
        backgroundColor: colors.disabledSurface,
    },
    cardPressed: {
        borderBottomWidth: 2,
        backgroundColor: colors.surfacePressed,
    },
    avatar: {
        borderWidth: 2,
        borderColor: colors.frameDark,
    },
    info: {
        flex: 1,
        gap: 2,
    },
    name: {
        fontFamily: fonts.extraBold,
        fontSize: 16,
        color: colors.text,
    },
    host: {
        fontFamily: fonts.regular,
        fontSize: 13,
        color: colors.muted,
    },
    difficulty: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    difficultyName: {
        fontFamily: fonts.extraBold,
        fontSize: 12,
    },
    side: {
        alignItems: 'flex-end',
        gap: 6,
    },
    players: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    playersText: {
        fontFamily: fonts.display,
        fontSize: 18,
        color: colors.text,
    },
    maxPlayers: {
        fontSize: 14,
        color: colors.muted,
    },
    statusDot: {
        width: 7,
        height: 7,
        borderRadius: 999,
    },
});
