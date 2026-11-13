import { Pressable, StyleSheet, Text, View } from 'react-native';

import Badge from './Badge';
import RamAvatar from './RamAvatar';

import getStatusColors from '../utils/getStatusColors';

export default function RoomCard({ room, onPress }) {
    const statusColors = getStatusColors(room.status);

    return (
        <Pressable onPress={onPress}>
            <RamAvatar wool={room.wool} bandana={room.bandana} size={46} style={styles.avatar} />
            <Text>{room.name}</Text>
            <Text>Host: {room.host}</Text>
            <Text>{room.players}/{room.maxPlayers}</Text>
            <Badge label={room.status} backgroundColor={statusColors.background} color={statusColors.text}>
                <View style={[styles.statusDot, { backgroundColor: statusColors.dot }]} />
            </Badge>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    avatar: {
        borderWidth: 2,
        borderColor: '#5E3A1E',
    },
    statusDot: {
        width: 7,
        height: 7,
        borderRadius: 999,
    },
});
