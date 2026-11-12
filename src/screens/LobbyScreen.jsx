import { Button, Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

export default function LobbyScreen({ navigation }) {
    const handlePressProfile = () => {
        navigation.navigate('Profile');
    };

    const handlePressSettings = () => {
        navigation.navigate('Settings');
    };

    const handlePressPlayCoop = () => {
        navigation.navigate('Rooms');
    };

    const handlePressCreateRoom = () => {
        navigation.navigate('CreateRoom');
    };

    return (
        <SafeAreaView>
            <Pressable onPress={handlePressProfile}>
                <Text>Name</Text>
            </Pressable>
            <Pressable onPress={handlePressSettings}>
                <Feather name='settings' size={22} />
            </Pressable>
            <Button title='Play Co-op' onPress={handlePressPlayCoop} />
            <Button title='Create a room' onPress={handlePressCreateRoom} />
        </SafeAreaView>
    );
}
