import { Text, View } from 'react-native';

import RamAvatar from '../characters/RamAvatar';

export default function LeaderboardRow({ rank, player, value, isMe }) {
    return (
        <View>
            <Text>{rank}</Text>
            <RamAvatar wool={player.wool} bandana={player.bandana} size={40} />
            <View>
                <Text>
                    {player.name}
                    {isMe && <Text> (you)</Text>}
                </Text>
                <Text>{player.wins} wins</Text>
            </View>
            <Text>{value}</Text>
        </View>
    );
}
