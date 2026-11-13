import { Button, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

export default function RoomsScreen({ navigation }) {
    const handlePressRoom = () => {
        navigation.navigate('WaitingRoom', { roomId: 1 });
    };

    const handlePressCreateRoom = () => {
        navigation.navigate('CreateRoom');
    };

    return (
        <SafeAreaView>
            <View>
                <Text>Rooms</Text>
                <Pressable>
                    <Feather name='refresh-cw' size={22} />
                </Pressable>
            </View>
            <Button title='Join my room' onPress={handlePressRoom}/>
            <Button title='Create room' onPress={handlePressCreateRoom}/>
        </SafeAreaView>
    );
}
