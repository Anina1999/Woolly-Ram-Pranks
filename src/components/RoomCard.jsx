import { Pressable, Text } from 'react-native';

import Ram from './Ram';

export default function RoomCard({ room, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <Ram wool={room.wool} bandana={room.bandana} pose='idle' size={54} />
            <Text>{room.name}</Text>
            <Text>Host: {room.host}</Text>
            <Text>{room.players}/{room.maxPlayers}</Text>
            <Text>{room.status}</Text>
        </Pressable>
    );
}
