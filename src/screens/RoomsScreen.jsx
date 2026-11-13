import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FilterChip from '../components/FilterChip';
import GameButton from '../components/GameButton';
import IconButton from '../components/IconButton';
import PlusIcon from '../components/PlusIcon';
import RoomCard from '../components/RoomCard';

import rooms from '../data/rooms';

import { colors, fonts } from '../styles/theme';

export default function RoomsScreen({ navigation }) {
    const [selectedFilter, setSelectedFilter] = useState('all');

    const waitingRooms = rooms.filter((room) => room.status === 'WAITING');
    const shownRooms = selectedFilter === 'waiting' ? waitingRooms : rooms;

    const handlePressRoom = (roomId) => {
        navigation.navigate('WaitingRoom', { roomId });
    };

    const handlePressCreateRoom = () => {
        navigation.navigate('CreateRoom');
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <Text style={styles.title}>Rooms</Text>
                <IconButton icon='rotate-cw' />
            </View>
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
                        renderItem={({ item }) => (
                            <RoomCard room={item} onPress={() => handlePressRoom(item.id)} />
                        )}
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
        color: colors.white,
        textShadowColor: colors.text,
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
    },
    panel: {
        flex: 1,
        marginTop: 16,
        paddingTop: 4,
        paddingHorizontal: 4,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        backgroundColor: colors.wood,
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
