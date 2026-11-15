import { Text, View } from 'react-native';

import RamAvatar from './RamAvatar';

export default function PlayerRow({ player }) {
    return (
        <View>
            <RamAvatar wool={player.wool} bandana={player.bandana} size={42} />
            <Text>{player.name}</Text>
            {player.you && <Text>(you)</Text>}
            {player.host && <Text>HOST</Text>}
            <Text>{player.ready ? 'READY' : 'NOT READY'}</Text>
        </View>
    );
}
