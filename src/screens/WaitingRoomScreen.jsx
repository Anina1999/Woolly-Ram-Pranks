import { useContext, useState } from 'react';
import { FlatList, Pressable, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Clipboard from 'expo-clipboard';

import BackHeader from '../components/BackHeader';
import CheckIcon from '../components/CheckIcon';
import DifficultySetting from '../components/DifficultySetting';
import FormError from '../components/FormError';
import GameButton from '../components/GameButton';
import GlobeIcon from '../components/GlobeIcon';
import LeaveRoomPicture from '../components/LeaveRoomPicture';
import LockIcon from '../components/LockIcon';
import MaxPlayersSetting from '../components/MaxPlayersSetting';
import ModalPanel from '../components/ModalPanel';
import Panel from '../components/Panel';
import PlayerRow from '../components/PlayerRow';
import PlusIcon from '../components/PlusIcon';
import PrivacySetting from '../components/PrivacySetting';
import RefreshButton from '../components/RefreshButton';
import RefreshError from '../components/RefreshError';
import SlotRow from '../components/SlotRow';

import { RoomsContext } from '../contexts/RoomsContext';

import { leaveRoom, updateRoomSettings } from '../services/roomsService';

import getDifficulty from '../utils/getDifficulty';
import getPlayerSlots from '../utils/getPlayerSlots';
import getRoomPlayers from '../utils/getRoomPlayers';
import getRoomStatus from '../utils/getRoomStatus';

import { colors, fonts } from '../styles/theme';

const MIN_PLAYERS = 2;

export default function WaitingRoomScreen({ route, navigation }) {
    const { roomId } = route.params;
    const { rooms, players, setPlayers, isLoading, error, reloadData } = useContext(RoomsContext);
    const [isLeaveModalVisible, setIsLeaveModalVisible] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);
    const [leaveError, setLeaveError] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [settingsError, setSettingsError] = useState('');

    const room = rooms.find((item) => item.id === roomId);
    const roomPlayers = getRoomPlayers(players, roomId);
    const me = roomPlayers.find((player) => player.you);
    const isHost = me?.host;

    const handleChangeSettings = async (changes) => {
        if (isSaving) {
            return;
        }

        setIsSaving(true);
        setSettingsError('');

        try {
            await updateRoomSettings(roomId, {
                isPrivate: room.isPrivate,
                maxPlayers: room.maxPlayers,
                difficulty: room.difficulty,
                ...changes,
            });
        } catch {
            setSettingsError("Couldn't save the settings. Try again.");
        } finally {
            await reloadData();
            setIsSaving(false);
        }
    };

    const handlePressBack = () => {
        navigation.popTo('App', { screen: 'Rooms' });
    };

    const handlePressLeave = () => {
        setIsLeaveModalVisible(true);
    };

    const handleCloseLeaveModal = () => {
        setIsLeaveModalVisible(false);
        setLeaveError('');
    };

    const handleConfirmLeave = async () => {
        setIsLeaving(true);
        setLeaveError('');

        try {
            await leaveRoom(roomId, me.profileId, isHost);
            await reloadData();
            setIsLeaveModalVisible(false);
            navigation.popTo('App', { screen: 'Rooms' });
        } catch {
            setLeaveError("Couldn't leave the room. Try again.");
        } finally {
            setIsLeaving(false);
        }
    };

    const handlePressCopy = async () => {
        await Clipboard.setStringAsync(room.code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const handlePressReady = () => {
        setPlayers(players.map((player) =>
            player.you ? { ...player, ready: !player.ready } : player
        ));
    };

    if (!room) {
        return (
            <SafeAreaView style={styles.container} edges={['top']}>
                <BackHeader onBack={handlePressBack}>
                    <View style={styles.headerText}>
                        {!error && <Text>Room not found</Text>}
                    </View>
                    <RefreshButton isDisabled={isLoading} accessibilityLabel='Refresh room' onPress={reloadData} />
                </BackHeader>
                {error && <RefreshError />}
            </SafeAreaView>
        );
    }

    const readyCount = roomPlayers.filter((player) => player.ready).length;
    const hasEnoughPlayers = roomPlayers.length >= MIN_PLAYERS;
    const canStart = hasEnoughPlayers && readyCount === roomPlayers.length;
    const status = getRoomStatus(roomPlayers, room.host, isHost, hasEnoughPlayers);
    const difficultyInfo = getDifficulty(room.difficulty);
    const slots = getPlayerSlots(roomPlayers, room.maxPlayers);
    const leaveTitle = isHost ? `Leave ${room.name}?` : `Are you sure you want to leave ${room.name}?`;

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
            <BackHeader onBack={handlePressBack}>
                <View style={styles.headerText}>
                    <Text style={styles.title}>{room.name}</Text>
                    <Text style={styles.subtitle}>
                        {room.mode} · {room.map} · {roomPlayers.length}/{room.maxPlayers} players ·{difficultyInfo.name}
                    </Text>
                </View>
                <RefreshButton isDisabled={isLoading} accessibilityLabel='Refresh room' onPress={reloadData} />
            </BackHeader>
            <ScrollView
                contentContainerStyle={styles.content}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={reloadData} />}
            >
                {error && <RefreshError />}
                <View style={styles.codeBar}>
                    {room.isPrivate ? (
                        <>
                            <LockIcon color={colors.codeBarLock} />
                            <Text style={styles.codeText}>
                                Private · code <Text style={styles.roomCode}>{room.code}</Text>
                            </Text>
                            <Pressable
                                style={styles.copyButton}
                                accessibilityRole='button'
                                accessibilityLabel='Copy room code'
                                onPress={handlePressCopy}
                            >
                                <Text style={styles.copyText}>{isCopied ? 'Copied' : 'Copy'}</Text>
                            </Pressable>
                        </>
                    ) : (
                        <>
                            <GlobeIcon color={colors.codeBarGlobe} />
                            <Text style={styles.codeText}>Public · listed in Rooms</Text>
                        </>
                    )}
                </View>
                <Panel style={[styles.panel, styles.playersPanel]}>
                    <View style={styles.playersHeader}>
                        <Text style={styles.playersTitle}>Players</Text>
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
                        <PrivacySetting
                            isPrivate={room.isPrivate}
                            onChange={(value) => handleChangeSettings({ isPrivate: value })}
                        />
                        <View style={styles.divider} />
                        <MaxPlayersSetting
                            maxPlayers={room.maxPlayers}
                            playerCount={roomPlayers.length}
                            onChange={(value) => handleChangeSettings({ maxPlayers: value })}
                        />
                        <View style={styles.divider} />
                        <DifficultySetting
                            difficulty={room.difficulty}
                            onChange={(value) => handleChangeSettings({ difficulty: value })}
                        />
                        {settingsError !== '' && <FormError message={settingsError} />}
                    </Panel>
                ) : (
                    <Panel style={[styles.panel, styles.guestPanel]}>
                        <View style={styles.guestRow}>
                            <Text style={styles.guestLabel}>Max players</Text>
                            <Text style={styles.guestValue}>{room.maxPlayers}</Text>
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
                            onPress={handlePressLeave}
                        />
                        {isHost ? (
                            <GameButton title='Start game' isDisabled={!canStart} style={styles.mainButton} />
                        ) : (
                            <GameButton
                                title='Ready!'
                                variant='ready'
                                style={styles.mainButton}
                                onPress={handlePressReady}
                            >
                                <CheckIcon />
                            </GameButton>
                        )}
                    </View>
                    <Text style={styles.status}>{status}</Text>
                </View>
            </ScrollView>
            <ModalPanel visible={isLeaveModalVisible} onClose={handleCloseLeaveModal}>
                {me && <LeaveRoomPicture wool={me.wool} bandana={me.bandana} />}
                <Text style={styles.dialogTitle}>{leaveTitle}</Text>
                <View style={styles.dialogButtons}>
                    <GameButton title='Leave' variant='danger' isDisabled={isLeaving} onPress={handleConfirmLeave} />
                    <GameButton title='Stay' variant='secondary' onPress={handleCloseLeaveModal} />
                </View>
                {leaveError !== '' && <FormError message={leaveError} />}
            </ModalPanel>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sky,
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
    content: {
        flexGrow: 1,
    },
    panel: {
        marginTop: 24,
        marginHorizontal: 16,
    },
    codeBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        minHeight: 56,
        marginTop: 12,
        marginHorizontal: 16,
        paddingVertical: 6,
        paddingRight: 6,
        paddingLeft: 14,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: colors.codeBarBorder,
        backgroundColor: colors.codeBar,
    },
    codeText: {
        flex: 1,
        fontFamily: fonts.bold,
        fontSize: 14,
        color: colors.textOnScene,
    },
    roomCode: {
        fontFamily: fonts.display,
        fontSize: 18,
        letterSpacing: 2,
        color: colors.roomCode,
    },
    copyButton: {
        justifyContent: 'center',
        height: 40,
        paddingHorizontal: 14,
        borderRadius: 12,
        backgroundColor: colors.copyButton,
    },
    copyText: {
        fontFamily: fonts.extraBold,
        fontSize: 14,
        color: colors.actionText,
    },
    playersPanel: {
        marginTop: 4,
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
        marginTop: 12,
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
        paddingTop: 16,
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
    dialogTitle: {
        textAlign: 'center',
        fontFamily: fonts.display,
        fontSize: 24,
        lineHeight: 28,
        color: colors.text,
    },
    dialogButtons: {
        alignSelf: 'stretch',
        gap: 10,
        marginTop: 6,
    },
});
