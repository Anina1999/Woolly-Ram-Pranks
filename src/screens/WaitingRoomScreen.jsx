import { useState } from 'react';
import { FlatList, Pressable, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Clipboard from 'expo-clipboard';

import BackHeader from '../components/common/BackHeader';
import CheckIcon from '../components/icons/CheckIcon';
import DifficultySetting from '../components/room-settings/DifficultySetting';
import FormError from '../components/common/FormError';
import GameButton from '../components/common/GameButton';
import GlobeIcon from '../components/icons/GlobeIcon';
import IconButton from '../components/common/IconButton';
import LeaveRoomPicture from '../components/waiting-room/LeaveRoomPicture';
import LockIcon from '../components/icons/LockIcon';
import MaxPlayersSetting from '../components/room-settings/MaxPlayersSetting';
import ModalPanel from '../components/common/ModalPanel';
import Panel from '../components/common/Panel';
import PlayerRow from '../components/waiting-room/PlayerRow';
import PlusIcon from '../components/icons/PlusIcon';
import PrivacySetting from '../components/room-settings/PrivacySetting';
import RefreshButton from '../components/common/RefreshButton';
import RefreshError from '../components/common/RefreshError';
import RoomChat from '../components/waiting-room/RoomChat';
import SlotRow from '../components/waiting-room/SlotRow';

import useRoomsContext from '../contexts/rooms-context/useRoomsContext';

import { leaveRoom, updateRoomPlayerReady, updateRoomSettings } from '../services';

import getDifficulty from '../utils/getDifficulty';
import getPlayerSlots from '../utils/getPlayerSlots';
import getRoomPlayers from '../utils/getRoomPlayers';
import getRoomStatus from '../utils/getRoomStatus';

import { colors, fonts } from '../styles/theme';

const MIN_PLAYERS = 2;

export default function WaitingRoomScreen({ route, navigation }) {
    const { roomId } = route.params;
    const { rooms, players, isLoading, error, reloadData } = useRoomsContext();
    const [isLeaveModalVisible, setIsLeaveModalVisible] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);
    const [leaveError, setLeaveError] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const [isSettingsVisible, setIsSettingsVisible] = useState(false);
    const [settingsDraft, setSettingsDraft] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const [settingsError, setSettingsError] = useState('');
    const [isSavingReady, setIsSavingReady] = useState(false);
    const [readyError, setReadyError] = useState('');

    const room = rooms.find((item) => item.id === roomId);
    const roomPlayers = getRoomPlayers(players, roomId);
    const me = roomPlayers.find((player) => player.you);
    const isHost = me?.host;

    const handleChangeDraft = (changes) => {
        setSettingsDraft({ ...settingsDraft, ...changes });
    };

    const handlePressDone = async () => {
        if (isSaving) {
            return;
        }

        const hasChanges =
            settingsDraft.isPrivate !== room.isPrivate ||
            settingsDraft.maxPlayers !== room.maxPlayers ||
            settingsDraft.difficulty !== room.difficulty;

        if (!hasChanges) {
            setIsSettingsVisible(false);
            return;
        }

        setIsSaving(true);
        setSettingsError('');

        try {
            await updateRoomSettings(roomId, settingsDraft);
            setIsSettingsVisible(false);
        } catch (saveError) {
            if (saveError.code) {
                setSettingsError("Couldn't save the settings. Try again.");
            } else {
                setIsSettingsVisible(false);
            }
        } finally {
            await reloadData();
            setIsSaving(false);
        }
    };

    const handleRefresh = () => {
        setSettingsError('');
        setReadyError('');
        reloadData();
    };

    const handlePressBack = () => {
        navigation.popTo('App', { screen: 'Rooms' });
    };

    const handlePressSettings = () => {
        setSettingsDraft({
            isPrivate: room.isPrivate,
            maxPlayers: room.maxPlayers,
            difficulty: room.difficulty,
        });
        setSettingsError('');
        setIsSettingsVisible(true);
    };

    const handleCloseSettings = () => {
        if (isSaving) {
            return;
        }

        setIsSettingsVisible(false);
    };

    const handlePressLeave = () => {
        setIsLeaveModalVisible(true);
    };

    const handleCloseLeaveModal = () => {
        if (isLeaving) {
            return;
        }

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

    const handlePressReady = async () => {
        if (isSavingReady) {
            return;
        }

        setIsSavingReady(true);
        setReadyError('');

        try {
            await updateRoomPlayerReady(me.profileId, !me.ready);
        } catch (saveError) {
            if (saveError.code) {
                setReadyError("Couldn't save Ready. Try again.");
            }
        } finally {
            await reloadData();
            setIsSavingReady(false);
        }
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
                        {room.mode} · {room.map} · {roomPlayers.length}/{room.maxPlayers} players · {difficultyInfo.name}
                    </Text>
                </View>
                <RefreshButton isDisabled={isLoading} accessibilityLabel='Refresh room' onPress={handleRefresh} />
            </BackHeader>
            <ScrollView
                contentContainerStyle={styles.content}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />}
            >
                {error && <RefreshError />}
                {room.isPrivate && isHost && (
                    <View style={styles.codeBar}>
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
                    </View>
                )}
                <Panel style={[styles.panel, styles.playersPanel]}>
                    <View style={styles.playersHeader}>
                        <View style={styles.playersTitleRow}>
                            <Text style={styles.playersTitle}>Players</Text>
                            {!room.isPrivate && (
                                <View
                                    style={[styles.roomBadge, styles.publicBadge]}
                                    accessible
                                    accessibilityRole='image'
                                    accessibilityLabel='Public room, listed in Rooms'
                                >
                                    <GlobeIcon size={16} color={colors.publicBadgeIcon} />
                                </View>
                            )}
                            {room.isPrivate && !isHost && (
                                <View
                                    style={[styles.roomBadge, styles.privateBadge]}
                                    accessible
                                    accessibilityRole='image'
                                    accessibilityLabel='Private room, join by code'
                                >
                                    <LockIcon size={14} color={colors.privateBadgeIcon} />
                                </View>
                            )}
                        </View>
                        <View style={styles.playersActions}>
                            <Text style={styles.playersReady}>{readyCount} of {roomPlayers.length} ready</Text>
                            {isHost && (
                                <IconButton
                                    icon='settings'
                                    size='small'
                                    accessibilityLabel='Room settings'
                                    onPress={handlePressSettings}
                                />
                            )}
                        </View>
                    </View>
                    <FlatList
                        data={slots}
                        keyExtractor={(slot) => slot.id}
                        renderItem={renderSlot}
                        contentContainerStyle={styles.slots}
                        scrollEnabled={false}
                    />
                </Panel>
                <RoomChat style={[styles.panel, styles.chat]} />
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
                    {readyError !== '' && !error && <FormError message={readyError} />}
                    <Text style={styles.status}>{status}</Text>
                </View>
            </ScrollView>
            <ModalPanel visible={isSettingsVisible} variant='sheet' onClose={handleCloseSettings}>
                <View style={styles.settingsHeader}>
                    <Text style={styles.settingsTitle}>Room settings</Text>
                    <IconButton icon='x' size='small' accessibilityLabel='Close settings' onPress={handleCloseSettings} />
                </View>
                {settingsDraft && (
                    <View style={styles.settingsCard}>
                        <PrivacySetting
                            isPrivate={settingsDraft.isPrivate}
                            isDisabled={isSaving}
                            onChange={(value) => handleChangeDraft({ isPrivate: value })}
                        />
                        <View style={styles.divider} />
                        <MaxPlayersSetting
                            maxPlayers={settingsDraft.maxPlayers}
                            playerCount={roomPlayers.length}
                            isDisabled={isSaving}
                            onChange={(value) => handleChangeDraft({ maxPlayers: value })}
                        />
                        <View style={styles.divider} />
                        <DifficultySetting
                            difficulty={settingsDraft.difficulty}
                            isDisabled={isSaving}
                            onChange={(value) => handleChangeDraft({ difficulty: value })}
                        />
                    </View>
                )}
                {settingsError !== '' && !error && <FormError message={settingsError} />}
                <GameButton
                    title='Done'
                    isLoading={isSaving}
                    loadingTitle='Saving…'
                    onPress={handlePressDone}
                />
            </ModalPanel>
            <ModalPanel visible={isLeaveModalVisible} onClose={handleCloseLeaveModal}>
                {me && <LeaveRoomPicture wool={me.wool} bandana={me.bandana} />}
                <Text style={styles.dialogTitle}>{leaveTitle}</Text>
                <View style={styles.dialogButtons}>
                    <GameButton
                        title='Leave'
                        variant='danger'
                        isLoading={isLeaving}
                        loadingTitle='Leaving…'
                        onPress={handleConfirmLeave}
                    />
                    <GameButton title='Stay' variant='secondary' isDisabled={isLeaving} onPress={handleCloseLeaveModal} />
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
        letterSpacing: 1,
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
    playersTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    playersActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    roomBadge: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 26,
        height: 26,
        borderRadius: 999,
        borderWidth: 2,
    },
    publicBadge: {
        borderColor: colors.publicBadgeBorder,
        backgroundColor: colors.publicBadge,
    },
    privateBadge: {
        borderColor: colors.privateBadgeBorder,
        backgroundColor: colors.privateBadge,
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
    chat: {
        flex: 1,
        minHeight: 150,
        marginTop: 12,
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
    settingsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
    settingsTitle: {
        paddingLeft: 4,
        fontFamily: fonts.display,
        fontSize: 24,
        lineHeight: 28,
        color: colors.text,
    },
    settingsCard: {
        gap: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: colors.rowBorder,
        backgroundColor: colors.card,
    },
});
