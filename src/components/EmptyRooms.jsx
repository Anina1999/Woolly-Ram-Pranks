import { Text, View } from 'react-native';

export default function EmptyRooms({ title, text }) {
    return (
        <View>
            <Text>{title}</Text>
            <Text>{text}</Text>
        </View>
    );
}
