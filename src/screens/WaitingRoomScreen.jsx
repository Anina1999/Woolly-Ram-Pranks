import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackIcon from '../components/BackIcon';
import CheckIcon from '../components/CheckIcon';
import DifficultySetting from '../components/DifficultySetting';
import GameButton from '../components/GameButton';
import IconButton from '../components/IconButton';
import LockIcon from '../components/LockIcon';
import MaxPlayersSetting from '../components/MaxPlayersSetting';
import Panel from '../components/Panel';
import PlayerRow from '../components/PlayerRow';
import PlusIcon from '../components/PlusIcon';
import SlotRow from '../components/SlotRow';

import players from '../data/players';
import rooms from '../data/rooms';

import getDifficulty from '../utils/getDifficulty';
import getPlayerSlots from '../utils/getPlayerSlots';

import { colors, fonts } from '../styles/theme';

export default function WaitingRoomScreen({ route, navigation }) {
    const { roomId } = route.params;
    const room = rooms.find((item) => item.id === roomId);
    const [maxPlayers, setMaxPlayers] = useState(room?.maxPlayers);
    const [difficulty, setDifficulty] = useState(room?.difficulty);

    const handlePressBack = () => {
        navigation.goBack();
    };

    if (!room) {
        return (
            <SafeAreaView style={styles.container} edges={['top']}>
                <View style={styles.header}>
                    <IconButton onPress={handlePressBack}>
                        <BackIcon />
                    </IconButton>
                    <Text>Room not found</Text>
                </View>
            </SafeAreaView>
        );
    }

    const roomPlayers = players.filter((player) => player.roomId === roomId);
    const me = roomPlayers.find((player) => player.you);
    const isHost = me?.host;
    const readyCount = roomPlayers.filter((player) => player.ready).length;
    const difficultyInfo = getDifficulty(difficulty);
    const slots = getPlayerSlots(roomPlayers, maxPlayers);

    const renderSlot = ({ item }) => {
        if (item.type === 'player') {
            return <PlayerRow player={item.player} />;
        }

        if (item.type === 'open') {
            return (
                <SlotRow title='Invite a friend'>
                    <PlusIcon color={colors.frame} />
                </SlotRow>
            );
        }

        return (
            <SlotRow title='Player slot closed by host' variant='closed'>
                <LockIcon color={colors.closedSlotIcon} />
            </SlotRow>
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <IconButton onPress={handlePressBack}>
                    <BackIcon />
                </IconButton>
                <View style={styles.headerText}>
                    <Text style={styles.title}>{room.name}</Text>
                    <Text style={styles.subtitle}>
                        {room.mode} · {room.map} · {roomPlayers.length}/{maxPlayers} rams · {difficultyInfo.name}
                    </Text>
                </View>
            </View>
            <Panel style={[styles.panel, styles.playersPanel]}>
                <View style={styles.playersHeader}>
                    <Text style={styles.playersTitle}>The flock</Text>
                    <Text style={styles.playersReady}>{readyCount} of {roomPlayers.length} ready</Text>
                </View>
                <FlatList
                    data={slots}
                    keyExtractor={(slot) => slot.id}
                    renderItem={renderSlot}
                    contentContainerStyle={styles.slots}
                    scrollEnabled={false}
                />
            </Panel>
            {isHost ? (
                <Panel style={[styles.panel, styles.hostPanel]}>
                    <MaxPlayersSetting
                        maxPlayers={maxPlayers}
                        playerCount={roomPlayers.length}
                        onChange={setMaxPlayers}
                    />
                    <View style={styles.divider} />
                    <DifficultySetting difficulty={difficulty} onChange={setDifficulty} />
                </Panel>
            ) : (
                <Panel style={[styles.panel, styles.guestPanel]}>
                    <View style={styles.guestRow}>
                        <Text style={styles.guestLabel}>Max players</Text>
                        <Text style={styles.guestValue}>{maxPlayers}</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.guestRow}>
                        <Text style={styles.guestLabel}>Difficulty</Text>
                        <Text style={[styles.guestValue, styles.guestDifficulty, { color: difficultyInfo.text }]}>
                            {difficultyInfo.name}
                        </Text>
                    </View>
                </Panel>
            )}
            <View style={styles.footer}>
                <View style={styles.buttons}>
                    <GameButton
                        title='Leave'
                        variant='danger'
                        style={styles.leaveButton}
                        onPress={handlePressBack}
                    />
                    {isHost ? (
                        <GameButton title='Start game' style={styles.mainButton} />
                    ) : (
                        <GameButton title='Ready!' variant='ready' style={styles.mainButton}>
                            <CheckIcon />
                        </GameButton>
                    )}
                </View>
                <Text style={styles.status}>Waiting for Fleecy to be ready…</Text>
            </View>
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
        alignItems: 'center',
        gap: 12,
        marginTop: 8,
        paddingHorizontal: 16,
    },
    headerText: {
        flex: 1,
    },
    title: {
        fontFamily: fonts.display,
        fontSize: 26,
        lineHeight: 30,
        color: colors.textOnScene,
        textShadowColor: colors.text,
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
    },
    subtitle: {
        fontFamily: fonts.bold,
        fontSize: 13,
        color: colors.textOnDark,
    },
    panel: {
        marginTop: 24,
        marginHorizontal: 16,
    },
    playersPanel: {
        // room for the Private code bar, it comes after the MVP
        marginTop: 84,
        gap: 6,
        padding: 10,
    },
    playersHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 4,
        paddingBottom: 2,
    },
    playersTitle: {
        fontFamily: fonts.display,
        fontSize: 20,
        color: colors.text,
    },
    playersReady: {
        fontFamily: fonts.extraBold,
        fontSize: 13,
        color: colors.muted,
    },
    slots: {
        gap: 6,
    },
    hostPanel: {
        gap: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    guestPanel: {
        marginTop: 56,
        paddingVertical: 4,
        paddingHorizontal: 16,
    },
    guestRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 44,
    },
    guestLabel: {
        fontFamily: fonts.extraBold,
        fontSize: 15,
        color: colors.text,
    },
    guestValue: {
        fontFamily: fonts.display,
        fontSize: 20,
        color: colors.text,
    },
    guestDifficulty: {
        fontSize: 18,
    },
    divider: {
        height: 2,
        backgroundColor: colors.divider,
    },
    footer: {
        gap: 8,
        marginTop: 'auto',
        paddingHorizontal: 16,
        paddingBottom: 18,
    },
    buttons: {
        flexDirection: 'row',
        gap: 10,
    },
    leaveButton: {
        flex: 1,
    },
    mainButton: {
        flex: 1.8,
    },
    status: {
        textAlign: 'center',
        fontFamily: fonts.bold,
        fontSize: 13,
        color: colors.textOnScene,
        textShadowColor: colors.text,
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
    },
});
