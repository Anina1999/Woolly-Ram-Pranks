import { Button, Text, View } from 'react-native';

export default function CreateRoomScreen({ navigation}) {
    const handlePressCreate = () => {
        navigation.replace('WaitingRoom', { roomId: 2 });
    };

    return (
        <View>
            <Text>Create room</Text>
            <Button title='Create' onPress={handlePressCreate}/>
        </View>
    );
}