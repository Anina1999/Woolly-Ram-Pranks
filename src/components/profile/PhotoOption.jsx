import { Pressable, Text, View } from 'react-native';

export default function PhotoOption({ title, subtitle, onPress }) {
    return (
        <Pressable accessibilityRole='button' onPress={onPress}>
            <View>
                <Text>{title}</Text>
                <Text>{subtitle}</Text>
            </View>
        </Pressable>
    );
}
