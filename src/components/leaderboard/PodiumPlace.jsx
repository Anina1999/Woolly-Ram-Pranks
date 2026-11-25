import { Text, View } from 'react-native';

import Ram from '../characters/Ram';

export default function PodiumPlace({ player, place, value }) {
    return (
        <View>
            <Ram wool={player.wool} bandana={player.bandana} pose='idle' size={88} />
            <Text>{player.name}</Text>
            <View>
                <Text>{place}</Text>
                <Text>{value}</Text>
            </View>
        </View>
    );
}
