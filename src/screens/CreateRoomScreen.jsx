import { Button, Text, View } from 'react-native';

import DifficultySetting from '../components/DifficultySetting';
import MaxPlayersSetting from '../components/MaxPlayersSetting';

export default function CreateRoomScreen({ navigation}) {
    const handlePressCreate = () => {
        navigation.replace('WaitingRoom', { roomId: '2' });
    };

    return (
        <View>
            <Text>Create room</Text>
            <MaxPlayersSetting maxPlayers={5} />
            <DifficultySetting difficulty='normal' />
            <Button title='Create' onPress={handlePressCreate}/>
        </View>
    );
}
