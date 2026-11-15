import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackIcon from '../components/BackIcon';
import DifficultySetting from '../components/DifficultySetting';
import IconButton from '../components/IconButton';
import MaxPlayersSetting from '../components/MaxPlayersSetting';
import PlayerRow from '../components/PlayerRow';

import players from '../data/players';
import rooms from '../data/rooms';

import getDifficulty from '../utils/getDifficulty';
import getSeats from '../utils/getSeats';

import { colors, fonts } from '../styles/theme';

export default function WaitingRoomScreen({ route }) {
    const { roomId } = route.params;
    const room = rooms.find((item) => item.id === roomId);

    if (!room) {
        return (
            <SafeAreaView style={styles.container} edges={['top']}>
                <View style={styles.header}>
                    <IconButton>
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
    const difficulty = getDifficulty(room.difficulty);
    const seats = getSeats(roomPlayers, room.maxPlayers);

    const renderSeat = ({ item }) => {
        if (item.type === 'player') {
            return <PlayerRow player={item.player} />;
        }

        if (item.type === 'open') {
            return (
                <Pressable>
                    <Text>Invite a friend</Text>
                </Pressable>
            );
        }

        return (
            <View>
                <Text>Seat closed by host</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <IconButton>
                    <BackIcon />
                </IconButton>
                <View style={styles.headerText}>
                    <Text style={styles.title}>{room.name}</Text>
                    <Text style={styles.subtitle}>
                        {room.mode} · {room.map} · {roomPlayers.length}/{room.maxPlayers} rams · {difficulty.name}
                    </Text>
                </View>
            </View>
            <Text>Host: {room.host}</Text>
            <Text>The flock</Text>
            <FlatList
                data={seats}
                keyExtractor={(seat) => seat.id}
                renderItem={renderSeat}
            />
            {isHost ? (
                <View>
                    <MaxPlayersSetting maxPlayers={room.maxPlayers} />
                    <DifficultySetting difficulty={room.difficulty} />
                </View>
            ) : (
                <View>
                    <View>
                        <Text>Max players</Text>
                        <Text>{room.maxPlayers}</Text>
                    </View>
                    <View>
                        <Text>Difficulty</Text>
                        <Text>{difficulty.name}</Text>
                    </View>
                </View>
            )}
            <Text>Waiting for Fleecy to be ready…</Text>
            <Pressable>
                <Text>Leave</Text>
            </Pressable>
            {isHost ? (
                <Pressable>
                    <Text>Start game</Text>
                </Pressable>
            ) : (
                <Pressable>
                    <Text>Ready!</Text>
                </Pressable>
            )}
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
});
