import { Pressable, StyleSheet, Text, View } from 'react-native';

import Badge from './Badge';
import PlayersIcon from './PlayersIcon';
import RamAvatar from './RamAvatar';

import getStatusColors from '../utils/getStatusColors';

export default function RoomCard({ room, onPress }) {
    const statusColors = getStatusColors(room.status);
    const isPlaying = room.status === 'PLAYING';
    const isFull = room.players === room.maxPlayers;
    const isClosed = isPlaying || isFull;

    return (
        <Pressable
            style={({ pressed }) => [styles.card, isClosed && styles.cardClosed, pressed && styles.cardPressed]}
            onPress={onPress}
            disabled={isClosed}
        >
            <RamAvatar wool={room.wool} bandana={room.bandana} size={46} style={styles.avatar} />
            <View style={styles.info}>
                <Text style={styles.name} numberOfLines={1}>{room.name}</Text>
                <Text style={styles.host}>Host: {room.host}</Text>
            </View>
            <View style={styles.side}>
                <View style={styles.players}>
                    <PlayersIcon />
                    <Text style={styles.playersText}>{room.players}/{room.maxPlayers}</Text>
                </View>
                <Badge label={room.status} backgroundColor={statusColors.background} color={statusColors.text}>
                    <View style={[styles.statusDot, { backgroundColor: statusColors.dot }]} />
                </Badge>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        minHeight: 72,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 18,
        borderWidth: 2,
        borderBottomWidth: 5,
        borderColor: '#D9C39A',
        backgroundColor: '#FFFBF2',
    },
    cardClosed: {
        opacity: 0.75,
        borderColor: '#D6CBB6',
        backgroundColor: '#F1EBDF',
    },
    cardPressed: {
        borderBottomWidth: 2,
        backgroundColor: '#F3E4C3',
    },
    avatar: {
        borderWidth: 2,
        borderColor: '#5E3A1E',
    },
    info: {
        flex: 1,
        gap: 2,
    },
    name: {
        fontFamily: 'NunitoSans_800ExtraBold',
        fontSize: 16,
        color: '#2E2117',
    },
    host: {
        fontFamily: 'NunitoSans_400Regular',
        fontSize: 13,
        color: '#6E5D49',
    },
    side: {
        alignItems: 'flex-end',
        gap: 6,
    },
    players: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    playersText: {
        fontFamily: 'LilitaOne_400Regular',
        fontSize: 18,
        color: '#2E2117',
    },
    statusDot: {
        width: 7,
        height: 7,
        borderRadius: 999,
    },
});
