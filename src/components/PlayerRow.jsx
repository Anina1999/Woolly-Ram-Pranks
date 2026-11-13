import { Text, View } from 'react-native';

export default function PlayerRow({ player }) {
    return (
        <View>
            <Text>{player.name}</Text>
            {player.you && <Text>(you)</Text>}
            {player.host && <Text>HOST</Text>}
            <Text>{player.ready ? 'READY' : 'NOT READY'}</Text>
        </View>
    );
}
