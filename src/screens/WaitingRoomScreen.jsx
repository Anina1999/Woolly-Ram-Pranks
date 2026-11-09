import { Text, View } from 'react-native';

export default function WaitingRoomScreen({ route }) {
    const { roomId } = route.params;
    
    return (
        <View>
            <Text>Waiting room</Text>
            <Text>Room id: {roomId}</Text>
        </View>
    );
}