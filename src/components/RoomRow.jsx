import { Pressable, StyleSheet, Text, View } from 'react-native';

import Badge from './Badge';
import DetailsCornerButton from './DetailsCornerButton';
import RamAvatar from './RamAvatar';

import getDifficulty from '../utils/getDifficulty';
import getStatusColors from '../utils/getStatusColors';

import { colors, fonts } from '../styles/theme';

export default function RoomRow({ room, host, playerCount, isMyRoom, onPress, onPressDetails }) {
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
                    styles.row,
                    isMyRoom && styles.rowMyRoom,
                    isClosed && styles.rowClosed,
                    pressed && styles.rowPressed,
                ]}
                onPress={isClosed ? onPressDetails : onPress}
            >
                <RamAvatar wool={host.wool} bandana={host.bandana} size={44} style={styles.avatar} />
                <View style={styles.info}>
                    <Text style={styles.name} numberOfLines={1}>{room.name}</Text>
                    <Text style={styles.details} numberOfLines={1}>Host: {host.name} · {difficulty.name}</Text>
                </View>
                <View style={styles.side}>
                    <Text style={styles.playersText}>
                        {playerCount}
                        <Text style={styles.maxPlayers}>/{room.maxPlayers}</Text>
                    </Text>
                    <Badge
                        label={badgeLabel}
                        backgroundColor={statusColors.background}
                        color={statusColors.text}
                        style={styles.badge}
                        labelStyle={styles.badgeLabel}
                    >
                        <View style={[styles.statusDot, { backgroundColor: statusColors.dot }]} />
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
        borderRadius: 14,
    },
    wrapperClosed: {
        opacity: 0.75,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        minHeight: 60,
        paddingVertical: 6,
        paddingLeft: 6,
        paddingRight: 40,
        borderRadius: 14,
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: colors.border,
        backgroundColor: colors.card,
    },
    rowMyRoom: {
        borderColor: colors.myRoomBorder,
        backgroundColor: colors.myRoomCard,
    },
    rowClosed: {
        borderColor: colors.disabledBorder,
        backgroundColor: colors.disabledSurface,
    },
    rowPressed: {
        borderBottomWidth: 2,
        backgroundColor: colors.surfacePressed,
    },
    avatar: {
        borderWidth: 2,
        borderColor: colors.frameDark,
    },
    info: {
        flex: 1,
    },
    name: {
        fontFamily: fonts.extraBold,
        fontSize: 15,
        color: colors.text,
    },
    details: {
        fontFamily: fonts.bold,
        fontSize: 12,
        color: colors.muted,
    },
    side: {
        alignItems: 'flex-end',
        gap: 4,
    },
    playersText: {
        fontFamily: fonts.display,
        fontSize: 16,
        color: colors.text,
    },
    maxPlayers: {
        fontSize: 13,
        color: colors.muted,
    },
    badge: {
        gap: 4,
        marginRight: -8,
        paddingVertical: 2,
        paddingHorizontal: 7,
    },
    badgeLabel: {
        fontSize: 10,
        letterSpacing: 0.5,
    },
    statusDot: {
        width: 6,
        height: 6,
        borderRadius: 999,
    },
});
