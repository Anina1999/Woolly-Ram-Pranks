import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import FormError from './FormError';
import GameButton from './GameButton';
import IconButton from './IconButton';
import RoomRow from './RoomRow';
import SearchIcon from './SearchIcon';
import SearchTab from './SearchTab';

import formatRoomCode, { ROOM_CODE_LENGTH } from '../utils/formatRoomCode';
import getRoomPlayers from '../utils/getRoomPlayers';

import { colors, fonts } from '../styles/theme';

export default function FindRoom({
    rooms,
    players,
    myRoomId,
    codeError,
    onClose,
    onPressRoom,
    onPressDetails,
    onJoinByCode,
    onClearCodeError,
}) {
    const [searchMode, setSearchMode] = useState('name');
    const [searchText, setSearchText] = useState('');
    const [code, setCode] = useState('');

    const isCodeMode = searchMode === 'code';
    const query = searchText.trim().toLowerCase();
    const hasQuery = query !== '';
    const foundRooms = rooms.filter((room) => room.name.toLowerCase().startsWith(query));
    const roomWord = foundRooms.length === 1 ? 'ROOM' : 'ROOMS';

    const handleSelectMode = (mode) => {
        setSearchMode(mode);
        onClearCodeError();
    };

    const handleChangeCode = (text) => {
        setCode(formatRoomCode(text));
        onClearCodeError();
    };

    const renderRoom = ({ item }) => {
        const roomPlayers = getRoomPlayers(players, item.id);

        return (
            <RoomRow
                room={item}
                playerCount={roomPlayers.length}
                isMyRoom={item.id === myRoomId}
                onPress={() => onPressRoom(item)}
                onPressDetails={() => onPressDetails(item)}
            />
        );
    };

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.title}>Find a room</Text>
                <IconButton icon='x' size='small' accessibilityLabel='Close' onPress={onClose} />
            </View>
            <View style={styles.tabs}>
                <SearchTab label='By name' selected={!isCodeMode} onPress={() => handleSelectMode('name')} />
                <SearchTab label='Code' selected={isCodeMode} onPress={() => handleSelectMode('code')} />
            </View>
            {isCodeMode ? (
                <View>
                    <Text>Got a code from a friend? Type it in to jump straight into their private room.</Text>
                    <Text>ROOM CODE</Text>
                    <TextInput
                        placeholder='ABC-1234'
                        placeholderTextColor={colors.placeholder}
                        accessibilityLabel='Room code'
                        autoCapitalize='characters'
                        autoCorrect={false}
                        maxLength={ROOM_CODE_LENGTH}
                        value={code}
                        onChangeText={handleChangeCode}
                    />
                    {codeError !== '' && <FormError message={codeError} />}
                    <GameButton title='Join room' onPress={() => onJoinByCode(code)} />
                </View>
            ) : (
                <>
                    <View style={styles.field}>
                        <SearchIcon size={20} color={colors.searchIcon} />
                        <TextInput
                            placeholder='Room name'
                            placeholderTextColor={colors.placeholder}
                            accessibilityLabel='Room name'
                            value={searchText}
                            onChangeText={setSearchText}
                            style={styles.input}
                        />
                    </View>
                    {hasQuery && (
                        <View style={styles.results}>
                            <Text style={styles.resultsLabel}>{foundRooms.length} {roomWord} FOUND</Text>
                            {foundRooms.length === 0 ? (
                                <Text style={styles.emptyText}>No rooms match that name. Try another one.</Text>
                            ) : (
                                <FlatList
                                    data={foundRooms}
                                    keyExtractor={(room) => room.id}
                                    contentContainerStyle={styles.list}
                                    renderItem={renderRoom}
                                />
                            )}
                            <Text>Private rooms don't show up here — use Code.</Text>
                        </View>
                    )}
                </>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    title: {
        flex: 1,
        fontFamily: fonts.display,
        fontSize: 24,
        lineHeight: 28,
        color: colors.text,
    },
    tabs: {
        flexDirection: 'row',
        gap: 4,
        padding: 4,
        borderRadius: 16,
        backgroundColor: colors.searchTabs,
    },
    field: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        height: 52,
        paddingHorizontal: 14,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: colors.searchFieldBorder,
        backgroundColor: colors.card,
    },
    input: {
        flex: 1,
        padding: 0,
        fontFamily: fonts.bold,
        fontSize: 16,
        color: colors.text,
    },
    results: {
        flexShrink: 1,
        gap: 8,
    },
    resultsLabel: {
        fontFamily: fonts.extraBold,
        fontSize: 12,
        letterSpacing: 0.6,
        color: colors.muted,
    },
    list: {
        gap: 8,
    },
    emptyText: {
        textAlign: 'center',
        fontFamily: fonts.regular,
        fontSize: 12,
        lineHeight: 17,
        color: colors.muted,
    },
});
