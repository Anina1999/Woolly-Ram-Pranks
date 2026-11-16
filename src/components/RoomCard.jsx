import { Pressable, StyleSheet, Text, View } from 'react-native';

import Badge from './Badge';
import DifficultyPips from './DifficultyPips';
import InfoCornerIcon from './InfoCornerIcon';
import PlayersIcon from './PlayersIcon';
import RamAvatar from './RamAvatar';

import getDifficulty from '../utils/getDifficulty';
import getStatusColors from '../utils/getStatusColors';

import { colors, fonts } from '../styles/theme';

export default function RoomCard({ room, host, playerCount, isMyRoom, onPress, onPressDetails }) {
    const badgeLabel = isMyRoom ? 'YOU’RE IN' : room.status;
    const statusColors = getStatusColors(badgeLabel);
    const difficulty = getDifficulty(room.difficulty);
    const isPlaying = room.status === 'PLAYING';
    const isFull = playerCount === room.maxPlayers;
    const isClosed = !isMyRoom && (isPlaying || isFull);

    return (
        <View style={[styles.wrapper, isClosed && styles.wrapperClosed]}>
            <Pressable
                style={({ pressed }) => [
                    styles.card,
                    isMyRoom && styles.cardMyRoom,
                    isClosed && styles.cardClosed,
                    pressed && styles.cardPressed,
                ]}
                onPress={isClosed ? onPressDetails : onPress}
            >
                <RamAvatar wool={host.wool} bandana={host.bandana} size={46} style={styles.avatar} />
                <View style={styles.info}>
                    <Text style={styles.name} numberOfLines={1}>{room.name}</Text>
                    <Text style={styles.host} numberOfLines={1}>Host: {host.name}</Text>
                    <View style={styles.difficulty}>
                        <DifficultyPips difficulty={room.difficulty} size='small' />
                        <Text style={[styles.difficultyName, { color: difficulty.text }]}>{difficulty.name}</Text>
                    </View>
                </View>
                <View style={styles.side}>
                    <View style={styles.players}>
                        <PlayersIcon />
                        <Text style={styles.playersText}>
                            {playerCount}
                            <Text style={styles.maxPlayers}>/{room.maxPlayers}</Text>
                        </Text>
                    </View>
                    <Badge label={badgeLabel} backgroundColor={statusColors.background} color={statusColors.text}>
                        <View style={[styles.statusDot, { backgroundColor: statusColors.dot }]} />
                    </Badge>
                </View>
            </Pressable>
            <Pressable
                style={styles.details}
                accessibilityRole='button'
                accessibilityLabel={`Room details: ${room.name}`}
                onPress={onPressDetails}
            >
                <InfoCornerIcon />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        overflow: 'hidden',
        borderRadius: 18,
    },
    wrapperClosed: {
        opacity: 0.75,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        minHeight: 76,
        paddingVertical: 8,
        paddingLeft: 12,
        paddingRight: 32,
        borderRadius: 18,
        borderWidth: 2,
        borderBottomWidth: 5,
        borderColor: colors.border,
        backgroundColor: colors.card,
    },
    cardMyRoom: {
        borderColor: colors.myRoomBorder,
        backgroundColor: colors.myRoomCard,
    },
    cardClosed: {
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
    details: {
        position: 'absolute',
        top: 2,
        right: 2,
        width: 44,
        height: 44,
    },
});
