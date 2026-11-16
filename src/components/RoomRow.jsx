import { Pressable, Text, View } from 'react-native';

import Badge from './Badge';
import DetailsCornerButton from './DetailsCornerButton';
import RamAvatar from './RamAvatar';

import getDifficulty from '../utils/getDifficulty';

export default function RoomRow({ room, host, playerCount, isMyRoom }) {
    const badgeLabel = isMyRoom ? 'YOU’RE IN' : room.status;
    const difficulty = getDifficulty(room.difficulty);

    return (
        <View>
            <Pressable>
                <RamAvatar wool={host.wool} bandana={host.bandana} size={44} />
                <View>
                    <Text numberOfLines={1}>{room.name}</Text>
                    <Text numberOfLines={1}>Host: {host.name} · {difficulty.name}</Text>
                </View>
                <View>
                    <Text>
                        {playerCount}
                        <Text>/{room.maxPlayers}</Text>
                    </Text>
                    <Badge label={badgeLabel} />
                </View>
            </Pressable>
            <DetailsCornerButton roomName={room.name} />
        </View>
    );
}
