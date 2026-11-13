import { Pressable, StyleSheet, Text } from 'react-native';

import RamAvatar from './RamAvatar';

export default function RoomCard({ room, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <RamAvatar wool={room.wool} bandana={room.bandana} size={46} style={styles.avatar} />
            <Text>{room.name}</Text>
            <Text>Host: {room.host}</Text>
            <Text>{room.players}/{room.maxPlayers}</Text>
            <Text>{room.status}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    avatar: {
        borderWidth: 2,
        borderColor: '#5E3A1E',
    },
});
