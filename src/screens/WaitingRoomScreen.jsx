import { FlatList, Pressable, Text, View } from 'react-native';

import PlayerRow from '../components/PlayerRow';

import players from '../data/players';
import rooms from '../data/rooms';

export default function WaitingRoomScreen({ route }) {
    const { roomId } = route.params;
    const room = rooms.find((item) => item.id === roomId);

    if (!room) {
        return (
            <View>
                <Text>Room not found</Text>
            </View>
        );
    }

    const roomPlayers = players.filter((player) => player.roomId === roomId);

    return (
        <View>
            <Text>{room.name}</Text>
            <Text>Host: {room.host}</Text>
            <Text>The flock</Text>
            <FlatList
                data={roomPlayers}
                keyExtractor={(player) => player.id}
                renderItem={({ item }) => <PlayerRow player={item} />}
                ListFooterComponent={
                    <Pressable>
                        <Text>Invite a friend</Text>
                    </Pressable>
                }
            />
            <Text>Waiting for Fleecy to be ready…</Text>
            <Pressable>
                <Text>Leave room</Text>
            </Pressable>
            <Pressable>
                <Text>Ready!</Text>
            </Pressable>
            <Pressable>
                <Text>Start game</Text>
            </Pressable>
        </View>
    );
}
