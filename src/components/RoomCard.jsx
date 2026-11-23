import { Pressable, StyleSheet, Text, View } from 'react-native';

import Badge from './Badge';
import DetailsCornerButton from './DetailsCornerButton';
import DifficultyPips from './DifficultyPips';
import LockIcon from './icons/LockIcon';
import PlayersIcon from './icons/PlayersIcon';
import RamAvatar from './characters/RamAvatar';
import Spinner from './Spinner';

import getDifficulty from '../utils/getDifficulty';
import getStatusColors from '../utils/getStatusColors';

import { colors, fonts } from '../styles/theme';

export default function RoomCard({ room, playerCount, isMyRoom, isFriend, isJoining, onPress, onPressDetails }) {
    const isPlaying = room.status === 'PLAYING';
    const isFull = playerCount === room.maxPlayers;
    const isPrivate = !isMyRoom && room.isPrivate;
    const isClosed = !isMyRoom && (isPlaying || isFull);
    const canJoin = !isClosed && !isPrivate;
    const difficulty = getDifficulty(room.difficulty);
    const status = isMyRoom ? "YOU'RE IN" : room.status;
    const statusColors = getStatusColors(status);
    const badgeLabel = isJoining ? 'JOINING' : status;

    return (
        <View style={[styles.wrapper, isClosed && styles.wrapperClosed]}>
            <Pressable
                style={({ pressed }) => [
                    styles.card,
                    isMyRoom && styles.cardMyRoom,
                    isClosed && styles.cardClosed,
                    isPrivate && styles.cardPrivate,
                    pressed && styles.cardPressed,
                    pressed && isPrivate && styles.cardPrivatePressed,
                ]}
                onPress={canJoin ? onPress : onPressDetails}
            >
                <RamAvatar wool={room.host.wool} bandana={room.host.bandana} size={46} style={styles.avatar} />
                <View style={styles.info}>
                    <View style={styles.nameRow}>
                        {room.isPrivate && (
                            <View accessible accessibilityRole='image' accessibilityLabel='Private room'>
                                <LockIcon size={18} color={isPrivate ? colors.privateLock : colors.privateIcon} />
                            </View>
                        )}
                        <Text style={styles.name} numberOfLines={1}>{room.name}</Text>
                    </View>
                    <View style={styles.hostRow}>
                        <Text style={styles.host} numberOfLines={1}>Host: {room.host.name}</Text>
                        {isFriend && (
                            <Badge
                                label='FRIEND'
                                backgroundColor={colors.friendBackground}
                                color={colors.friendText}
                                style={styles.friendBadge}
                                labelStyle={styles.friendLabel}
                            />
                        )}
                    </View>
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
                        {isJoining ? (
                            <Spinner size={10} />
                        ) : (
                            <View style={[styles.statusDot, { backgroundColor: statusColors.dot }]} />
                        )}
                    </Badge>
                </View>
            </Pressable>
            <DetailsCornerButton roomName={room.name} onPress={onPressDetails} />
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
    cardPrivate: {
        borderColor: colors.privateBorder,
        backgroundColor: colors.privateSurface,
    },
    cardPressed: {
        borderBottomWidth: 2,
        backgroundColor: colors.surfacePressed,
    },
    cardPrivatePressed: {
        backgroundColor: colors.privateSurfacePressed,
    },
    avatar: {
        borderWidth: 2,
        borderColor: colors.frameDark,
    },
    info: {
        flex: 1,
        gap: 2,
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    name: {
        flexShrink: 1,
        fontFamily: fonts.extraBold,
        fontSize: 16,
        color: colors.text,
    },
    hostRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    host: {
        flexShrink: 1,
        fontFamily: fonts.regular,
        fontSize: 13,
        color: colors.muted,
    },
    friendBadge: {
        flexShrink: 0,
        paddingVertical: 1,
        paddingHorizontal: 6,
    },
    friendLabel: {
        fontSize: 10,
        letterSpacing: 0.5,
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
