import { useContext, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import EmptyRooms from '../components/EmptyRooms';
import FilterChip from '../components/FilterChip';
import FindRoom from '../components/FindRoom';
import ForwardIcon from '../components/ForwardIcon';
import GameButton from '../components/GameButton';
import IconButton from '../components/IconButton';
import ModalPanel from '../components/ModalPanel';
import PlusIcon from '../components/PlusIcon';
import Ram from '../components/Ram';
import RamAvatar from '../components/RamAvatar';
import RoomCard from '../components/RoomCard';
import RoomDetails from '../components/RoomDetails';
import SearchIcon from '../components/SearchIcon';

import friends from '../data/friends';
import profile from '../data/profile';

import { RoomsContext } from '../contexts/RoomsContext';

import getDifficulty from '../utils/getDifficulty';
import getRoomHost from '../utils/getRoomHost';
import getRoomPlayers from '../utils/getRoomPlayers';

import { colors, fonts } from '../styles/theme';

export default function RoomsScreen({ navigation }) {
    const { rooms, players, setPlayers, isLoading, error, reloadData } = useContext(RoomsContext);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [blockedRoom, setBlockedRoom] = useState(null);
    const [detailsRoom, setDetailsRoom] = useState(null);
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const publicRooms = rooms.filter((room) => !room.isPrivate);
    const waitingRooms = publicRooms.filter((room) => room.status === 'WAITING');
    const friendsRooms = rooms.filter((room) => {
        const host = getRoomHost(players, room.id);
        return friends.includes(host.name);
    });
    const friendsLabel = friendsRooms.length > 0 ? `Friends · ${friendsRooms.length}` : 'Friends';

    let shownRooms = publicRooms;
    if (selectedFilter === 'waiting') {
        shownRooms = waitingRooms;
    }
    if (selectedFilter === 'friends') {
        shownRooms = friendsRooms;
    }

    const isFriendsFilter = selectedFilter === 'friends';
    const isEveryRoomPlaying = selectedFilter === 'waiting' && publicRooms.length > 0;

    let emptyTitle = 'No rooms yet';
    let emptyText = 'Even the dog is asleep. Be the first — create a room and invite your friends.';
    if (isFriendsFilter) {
        emptyTitle = "No friends' rooms";
        emptyText = 'None of your friends are hosting right now. Tap + to create a room and invite them.';
    }
    if (isEveryRoomPlaying) {
        emptyTitle = 'No waiting rooms';
        emptyText = 'Every room is already playing. Tap + to create a room and invite your friends.';
    }

    const me = players.find((player) => player.you);
    const myRoom = rooms.find((room) => room.id === me?.roomId);
    const myRoomPlayers = getRoomPlayers(players, me?.roomId);
    const myReadyCount = myRoomPlayers.filter((player) => player.ready).length;
    const isInRoom = me !== undefined;
    const plusIconColor = isInRoom ? colors.disabledButtonText : colors.textOnPrimary;

    const handlePressRoom = (room) => {
        setIsSearchVisible(false);

        if (room.id === me?.roomId) {
            handlePressReturn();
            return;
        }

        handleJoinRoom(room);
    };

    const handleCloseBlockedModal = () => {
        setBlockedRoom(null);
    };

    const handlePressDetails = (room) => {
        setIsSearchVisible(false);
        setDetailsRoom(room);
    };

    const handleCloseDetails = () => {
        setDetailsRoom(null);
    };

    const handlePressFindRoom = () => {
        setIsSearchVisible(true);
    };

    const handleCloseSearch = () => {
        setIsSearchVisible(false);
    };

    const handlePressReturn = () => {
        navigation.navigate('WaitingRoom', { roomId: myRoom.id });
    };

    const handlePressGoToMyRoom = () => {
        setBlockedRoom(null);
        setDetailsRoom(null);
        handlePressReturn();
    };

    const handleJoinRoom = (room) => {
        setDetailsRoom(null);

        if (isInRoom) {
            setBlockedRoom(room);
            return;
        }

        const newPlayer = {
            id: String(Date.now()),
            roomId: room.id,
            name: profile.name,
            host: false,
            you: true,
            ready: false,
            wool: profile.wool,
            bandana: profile.bandana,
        };

        setPlayers([...players, newPlayer]);
        navigation.navigate('WaitingRoom', { roomId: room.id });
    };

    const handlePressCreateRoom = () => {
        navigation.navigate('CreateRoom');
    };

    const renderRoom = ({ item }) => {
        const roomPlayers = getRoomPlayers(players, item.id);
        const host = getRoomHost(players, item.id);

        return (
            <RoomCard
                room={item}
                host={host}
                playerCount={roomPlayers.length}
                isMyRoom={item.id === me?.roomId}
                isFriend={!isFriendsFilter && friends.includes(host.name)}
                onPress={() => handlePressRoom(item)}
                onPressDetails={() => handlePressDetails(item)}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <Text style={styles.title}>Rooms</Text>
                <View style={styles.headerButtons}>
                    <IconButton icon='rotate-cw' />
                    <IconButton
                        variant='primary'
                        isDisabled={isInRoom}
                        accessibilityLabel='Create room'
                        onPress={handlePressCreateRoom}
                    >
                        <PlusIcon size={24} color={plusIconColor} strokeWidth={3.6} />
                    </IconButton>
                </View>
            </View>
            {myRoom && (
                <View style={styles.myRoomBar}>
                    <RamAvatar wool={me.wool} bandana={me.bandana} size={44} style={styles.myRoomAvatar} />
                    <View style={styles.myRoomInfo}>
                        <Text style={styles.myRoomLabel}>YOU'RE IN A ROOM</Text>
                        <Text style={styles.myRoomName} numberOfLines={1}>{myRoom.name}</Text>
                        <Text style={styles.myRoomDetails} numberOfLines={1}>
                            {myRoomPlayers.length}/{myRoom.maxPlayers} · {getDifficulty(myRoom.difficulty).name} · {myReadyCount} of {myRoomPlayers.length} ready
                        </Text>
                    </View>
                    <Pressable style={styles.returnButton} onPress={handlePressReturn}>
                        <Text style={styles.returnText}>Return</Text>
                        <ForwardIcon size={18} color={colors.textOnAccent} />
                    </Pressable>
                </View>
            )}
            <View style={styles.panel}>
                <View style={styles.panelInner}>
                    <View style={styles.chips}>
                        <FilterChip
                            label={`All · ${publicRooms.length}`}
                            selected={selectedFilter === 'all'}
                            onPress={() => setSelectedFilter('all')}
                        />
                        <FilterChip
                            label={`Waiting · ${waitingRooms.length}`}
                            selected={selectedFilter === 'waiting'}
                            onPress={() => setSelectedFilter('waiting')}
                        />
                        <FilterChip
                            label={friendsLabel}
                            selected={selectedFilter === 'friends'}
                            onPress={() => setSelectedFilter('friends')}
                        />
                    </View>
                    {isLoading && <Text>Rounding up rooms…</Text>}
                    {error && (
                        <View>
                            <Text>Couldn't load rooms</Text>
                            <Text>The farm's signal got tangled in a fence. Check your connection.</Text>
                            <GameButton title='Try again' onPress={reloadData} />
                        </View>
                    )}
                    {!isLoading && !error && (
                        <FlatList
                            data={shownRooms}
                            keyExtractor={(room) => room.id}
                            contentContainerStyle={styles.list}
                            renderItem={renderRoom}
                            ListEmptyComponent={<EmptyRooms title={emptyTitle} text={emptyText} />}
                        />
                    )}
                    {!error && (
                        <View style={styles.bottomBar}>
                            <GameButton title='Find a room' variant='accent' onPress={handlePressFindRoom}>
                                <SearchIcon />
                            </GameButton>
                        </View>
                    )}
                </View>
            </View>
            <ModalPanel visible={isSearchVisible} onClose={handleCloseSearch} style={styles.searchPanel}>
                <FindRoom
                    rooms={publicRooms}
                    players={players}
                    myRoomId={me?.roomId}
                    onClose={handleCloseSearch}
                    onPressRoom={handlePressRoom}
                    onPressDetails={handlePressDetails}
                />
            </ModalPanel>
            <ModalPanel visible={blockedRoom !== null} onClose={handleCloseBlockedModal}>
                {me && <Ram wool={me.wool} bandana={me.bandana} pose='dizzy' size={110} />}
                <Text style={styles.dialogTitle}>Already in a room</Text>
                <Text style={styles.dialogMessage}>
                    You're in <Text style={styles.dialogRoomName}>{myRoom?.name}</Text>. To join{' '}
                    <Text style={styles.dialogRoomName}>{blockedRoom?.name}</Text>, go back to your room and leave it first.
                </Text>
                <View style={styles.dialogButtons}>
                    <GameButton title='Go to my room' onPress={handlePressGoToMyRoom} />
                    <GameButton title='Stay here' variant='secondary' onPress={handleCloseBlockedModal} />
                </View>
            </ModalPanel>
            <ModalPanel visible={detailsRoom !== null} onClose={handleCloseDetails} style={styles.detailsPanel}>
                {detailsRoom && (
                    <RoomDetails
                        room={detailsRoom}
                        players={players}
                        isMyRoom={detailsRoom.id === me?.roomId}
                        onClose={handleCloseDetails}
                        onPressGoToMyRoom={handlePressGoToMyRoom}
                        onPressJoin={() => handleJoinRoom(detailsRoom)}
                    />
                )}
            </ModalPanel>
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
        paddingHorizontal: 16,
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
    headerButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    myRoomBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        height: 64,
        marginTop: 12,
        marginHorizontal: 16,
        paddingHorizontal: 8,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: colors.myRoomBorder,
        backgroundColor: colors.myRoomBar,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 7,
        elevation: 6,
    },
    myRoomAvatar: {
        borderWidth: 2,
        borderColor: colors.myRoomBorder,
    },
    myRoomInfo: {
        flex: 1,
    },
    myRoomLabel: {
        fontFamily: fonts.extraBold,
        fontSize: 11,
        letterSpacing: 0.8,
        color: colors.myRoomLabel,
    },
    myRoomName: {
        fontFamily: fonts.extraBold,
        fontSize: 16,
        lineHeight: 20,
        color: colors.textOnScene,
    },
    myRoomDetails: {
        fontFamily: fonts.bold,
        fontSize: 12,
        color: colors.textOnDark,
    },
    returnButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        height: 44,
        paddingLeft: 14,
        paddingRight: 10,
        borderRadius: 12,
        backgroundColor: colors.accentButton,
    },
    returnText: {
        fontFamily: fonts.extraBold,
        fontSize: 14,
        color: colors.textOnAccent,
    },
    panel: {
        flex: 1,
        marginTop: 16,
        paddingTop: 4,
        paddingHorizontal: 4,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        backgroundColor: colors.frame,
    },
    panelInner: {
        flex: 1,
        overflow: 'hidden',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: colors.surface,
    },
    chips: {
        flexDirection: 'row',
        gap: 8,
        paddingTop: 14,
        paddingHorizontal: 12,
        paddingBottom: 10,
    },
    list: {
        flexGrow: 1,
        gap: 10,
        paddingTop: 2,
        paddingHorizontal: 12,
        paddingBottom: 12,
    },
    bottomBar: {
        paddingTop: 10,
        paddingHorizontal: 12,
        paddingBottom: 14,
        borderTopWidth: 2,
        borderTopColor: colors.divider,
    },
    dialogTitle: {
        textAlign: 'center',
        fontFamily: fonts.display,
        fontSize: 24,
        lineHeight: 28,
        color: colors.text,
    },
    dialogMessage: {
        textAlign: 'center',
        fontFamily: fonts.regular,
        fontSize: 15,
        lineHeight: 22,
        color: colors.modalText,
    },
    dialogRoomName: {
        fontFamily: fonts.bold,
        color: colors.text,
    },
    dialogButtons: {
        alignSelf: 'stretch',
        gap: 10,
        marginTop: 6,
    },
    detailsPanel: {
        alignItems: 'stretch',
        marginHorizontal: 2,
        padding: 14,
        borderRadius: 22,
    },
    searchPanel: {
        maxHeight: '85%',
        alignItems: 'stretch',
        gap: 14,
        marginHorizontal: -2,
        paddingVertical: 16,
        paddingHorizontal: 14,
        borderRadius: 22,
    },
});
