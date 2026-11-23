import { FlatList, StyleSheet, Text, View } from 'react-native';

import Badge from './common/Badge';
import CrownIcon from './icons/CrownIcon';
import GameButton from './common/GameButton';
import IconButton from './common/IconButton';
import RamAvatar from './characters/RamAvatar';

import getDifficulty from '../utils/getDifficulty';
import { JOIN_ERROR_TEXTS } from '../utils/getJoinErrorText';
import getPlayerSlots from '../utils/getPlayerSlots';
import getRoomPlayers from '../utils/getRoomPlayers';
import getStatusColors from '../utils/getStatusColors';

import { colors, fonts } from '../styles/theme';

export default function RoomDetails({ room, players, isMyRoom, isJoining, onClose, onPressGoToMyRoom, onPressJoin }) {
    const roomPlayers = getRoomPlayers(players, room.id);
    const difficulty = getDifficulty(room.difficulty);
    const statusColors = getStatusColors(room.status);
    const slots = getPlayerSlots(roomPlayers, room.maxPlayers).filter((slot) => slot.type !== 'closed');
    const isPlaying = room.status === 'PLAYING';
    const isFull = roomPlayers.length === room.maxPlayers;

    let cantJoinReason = JOIN_ERROR_TEXTS.ROOM_FULL;
    if (room.isPrivate) {
        cantJoinReason = JOIN_ERROR_TEXTS.ROOM_PRIVATE;
    }
    if (isPlaying) {
        cantJoinReason = JOIN_ERROR_TEXTS.ROOM_PLAYING;
    }

    const renderSlot = ({ item }) => {
        if (item.type === 'open') {
            return (
                <View style={[styles.cell, styles.openCell]}>
                    <View style={styles.openCircle} />
                    <Text style={styles.openText}>Open</Text>
                </View>
            );
        }

        return (
            <View style={[styles.cell, styles.playerCell]}>
                <RamAvatar
                    wool={item.player.wool}
                    bandana={item.player.bandana}
                    size={44}
                    crop='whole'
                    style={styles.avatar}
                />
                <Text style={styles.name} numberOfLines={1}>{item.player.name}</Text>
                {item.player.host && (
                    <View accessible accessibilityRole='image' accessibilityLabel='Host'>
                        <CrownIcon size={14} color={colors.hostCrown} strokeColor={colors.hostCrownEdge} />
                    </View>
                )}
            </View>
        );
    };

    const renderAction = () => {
        if (isMyRoom) {
            return <GameButton title='Go to my room' onPress={onPressGoToMyRoom} />;
        }

        if (isPlaying || isFull || room.isPrivate) {
            return (
                <View style={styles.cantJoin}>
                    <GameButton title="Can't join right now" isDisabled />
                    <Text style={styles.reason}>{cantJoinReason}</Text>
                </View>
            );
        }

        return <GameButton title='Join room' isLoading={isJoining} loadingTitle='Joining…' onPress={onPressJoin} />;
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerInfo}>
                    <Text style={styles.label}>{room.mode} · {room.map}</Text>
                    <Text style={styles.title}>{room.name}</Text>
                    <Text style={styles.host}>
                        Host: <Text style={styles.hostName}>{room.host.name}</Text>
                    </Text>
                </View>
                <IconButton icon='x' size='small' accessibilityLabel='Close' onPress={onClose} />
            </View>
            <View style={styles.statusRow}>
                <Badge
                    label={room.status}
                    backgroundColor={statusColors.background}
                    color={statusColors.text}
                    style={styles.statusBadge}
                >
                    <View style={[styles.statusDot, { backgroundColor: statusColors.dot }]} />
                </Badge>
                <Text style={styles.summary}>{difficulty.name} · {roomPlayers.length}/{room.maxPlayers} players</Text>
            </View>
            <FlatList
                data={slots}
                keyExtractor={(slot) => slot.id}
                renderItem={renderSlot}
                numColumns={2}
                scrollEnabled={false}
                columnWrapperStyle={styles.slotRow}
                contentContainerStyle={styles.slots}
            />
            {renderAction()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 12,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
    },
    headerInfo: {
        flex: 1,
        gap: 2,
    },
    label: {
        fontFamily: fonts.extraBold,
        fontSize: 12,
        letterSpacing: 0.6,
        textTransform: 'uppercase',
        color: colors.levelLabel,
    },
    title: {
        fontFamily: fonts.display,
        fontSize: 22,
        lineHeight: 26,
        color: colors.text,
    },
    host: {
        fontFamily: fonts.regular,
        fontSize: 14,
        color: colors.muted,
    },
    hostName: {
        fontFamily: fonts.bold,
        color: colors.text,
    },
    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    statusBadge: {
        height: 26,
        paddingVertical: 0,
        paddingHorizontal: 9,
    },
    statusDot: {
        width: 7,
        height: 7,
        borderRadius: 999,
    },
    summary: {
        fontFamily: fonts.extraBold,
        fontSize: 13,
        color: colors.muted,
    },
    slots: {
        gap: 8,
    },
    slotRow: {
        gap: 8,
    },
    cell: {
        flex: 1,
        maxWidth: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingVertical: 5,
        paddingLeft: 5,
        paddingRight: 8,
        borderRadius: 14,
        borderWidth: 2,
    },
    playerCell: {
        borderColor: colors.rowBorder,
        backgroundColor: colors.card,
    },
    openCell: {
        borderStyle: 'dashed',
        borderColor: colors.openSlotBorder,
    },
    avatar: {
        borderWidth: 2,
        borderColor: colors.frame,
    },
    name: {
        flex: 1,
        fontFamily: fonts.extraBold,
        fontSize: 14,
        color: colors.text,
    },
    openCircle: {
        width: 44,
        height: 44,
        borderRadius: 999,
        backgroundColor: colors.openSlotCircle,
    },
    openText: {
        fontFamily: fonts.bold,
        fontSize: 14,
        color: colors.muted,
    },
    cantJoin: {
        gap: 8,
    },
    reason: {
        textAlign: 'center',
        fontFamily: fonts.regular,
        fontSize: 13,
        lineHeight: 18,
        color: colors.muted,
    },
});
