import { Text, View } from 'react-native';

import Stepper from './Stepper';

export default function MaxPlayersSetting({ maxPlayers }) {
    return (
        <View>
            <Text>Max players</Text>
            <Text>Up to 5 players</Text>
            <Stepper>
                <Text>{maxPlayers}</Text>
            </Stepper>
        </View>
    );
}
