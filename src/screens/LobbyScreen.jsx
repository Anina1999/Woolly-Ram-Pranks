import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LobbyScreen({ navigation }) {
    const handlePressCreateRoom = () => {
        navigation.navigate('CreateRoom');
    };

    const handlePressPlayCoop = () => {
        navigation.navigate('Rooms');
    };
    
    return (
        <SafeAreaView>
            <Text>Lobby</Text>
            <Button title='Play Co-op' onPress={handlePressPlayCoop}/>
            <Button title='Create a room' onPress={handlePressCreateRoom}/>
        </SafeAreaView>
    );
}
