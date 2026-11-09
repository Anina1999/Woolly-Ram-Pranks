import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LobbyScreen({ navigation }) {
    const handlePressProfile = () => {
        navigation.navigate('Profile');
    };

    const handlePressPlayCoop = () => {
        navigation.navigate('Rooms');
    };

    const handlePressCreateRoom = () => {
        navigation.navigate('CreateRoom');
    };

    return (
        <SafeAreaView>
            <Button title='Name' onPress={handlePressProfile} />
            <Button title='Play Co-op' onPress={handlePressPlayCoop} />
            <Button title='Create a room' onPress={handlePressCreateRoom} />
        </SafeAreaView>
    );
}
