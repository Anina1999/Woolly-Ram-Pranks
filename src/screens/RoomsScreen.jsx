import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RoomsScreen({ navigation }) {
    const handlePressRoom = () => {
        navigation.navigate('WaitingRoom', { roomId: 1 });
    };

    return (
        <SafeAreaView>
            <Text>Rooms</Text>
            <Button title='Join my room' onPress={handlePressRoom}/>
        </SafeAreaView>
    );
}
