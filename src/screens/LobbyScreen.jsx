import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LobbyScreen({ navigation }) {
    const handlePressCreateRoom = () => {
        navigation.navigate('CreateRoom');
    };
    
    return (
        <SafeAreaView>
            <Text>Lobby</Text>
            <Button title='Create a room' onPress={handlePressCreateRoom}/>
        </SafeAreaView>
    );
}
