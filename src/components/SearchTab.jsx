import { Pressable, Text } from 'react-native';

export default function SearchTab({ label, selected }) {
    return (
        <Pressable accessibilityRole='button' accessibilityState={{ selected }}>
            <Text>{label}</Text>
        </Pressable>
    );
}
