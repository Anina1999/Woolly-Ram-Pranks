import { Text, View } from 'react-native';

export default function StatCard({ value, label }) {
    return (
        <View>
            <Text>{value}</Text>
            <Text>{label}</Text>
        </View>
    );
}
