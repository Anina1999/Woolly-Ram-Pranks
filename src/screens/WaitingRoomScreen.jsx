import { Text, View } from 'react-native';

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

    return (
        <View>
            <Text>{room.name}</Text>
            <Text>Host: {room.host}</Text>
        </View>
    );
}
