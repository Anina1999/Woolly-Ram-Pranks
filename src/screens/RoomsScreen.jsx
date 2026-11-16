import { useContext, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FilterChip from '../components/FilterChip';
import ForwardIcon from '../components/ForwardIcon';
import GameButton from '../components/GameButton';
import IconButton from '../components/IconButton';
import PlusIcon from '../components/PlusIcon';
import RamAvatar from '../components/RamAvatar';
import RoomCard from '../components/RoomCard';

import { RoomsContext } from '../contexts/RoomsContext';

import getDifficulty from '../utils/getDifficulty';
import getRoomPlayers from '../utils/getRoomPlayers';

import { colors, fonts } from '../styles/theme';

export default function RoomsScreen({ navigation }) {
    const { rooms, players } = useContext(RoomsContext);
    const [selectedFilter, setSelectedFilter] = useState('all');

    const waitingRooms = rooms.filter((room) => room.status === 'WAITING');
    const shownRooms = selectedFilter === 'waiting' ? waitingRooms : rooms;

    const me = players.find((player) => player.you);
    const myRoom = rooms.find((room) => room.id === me?.roomId);
    const myRoomPlayers = getRoomPlayers(players, me?.roomId);
    const myReadyCount = myRoomPlayers.filter((player) => player.ready).length;

    const handlePressRoom = (roomId) => {
        navigation.navigate('WaitingRoom', { roomId });
    };

    const handlePressReturn = () => {
        navigation.navigate('WaitingRoom', { roomId: myRoom.id });
    };

    const handlePressCreateRoom = () => {
        navigation.navigate('CreateRoom');
    };

    const renderRoom = ({ item }) => {
        const roomPlayers = getRoomPlayers(players, item.id);
        const host = roomPlayers.find((player) => player.host);

        return (
            <RoomCard
                room={item}
                host={host}
                playerCount={roomPlayers.length}
                isMyRoom={item.id === me?.roomId}
                onPress={() => handlePressRoom(item.id)}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <Text style={styles.title}>Rooms</Text>
                <IconButton icon='rotate-cw' />
            </View>
            {myRoom && (
                <View style={styles.myRoomBar}>
                    <RamAvatar wool={me.wool} bandana={me.bandana} size={44} style={styles.myRoomAvatar} />
                    <View style={styles.myRoomInfo}>
                        <Text style={styles.myRoomLabel}>YOU’RE IN A ROOM</Text>
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
                            label={`All · ${rooms.length}`}
                            selected={selectedFilter === 'all'}
                            onPress={() => setSelectedFilter('all')}
                        />
                        <FilterChip
                            label={`Waiting · ${waitingRooms.length}`}
                            selected={selectedFilter === 'waiting'}
                            onPress={() => setSelectedFilter('waiting')}
                        />
                        <FilterChip label='Friends' />
                    </View>
                    <FlatList
                        data={shownRooms}
                        keyExtractor={(room) => room.id}
                        contentContainerStyle={styles.list}
                        renderItem={renderRoom}
                    />
                    <View style={styles.bottomBar}>
                        <GameButton title='Create room' onPress={handlePressCreateRoom}>
                            <PlusIcon />
                        </GameButton>
                    </View>
                </View>
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
});
