import { Pressable, Text, View } from 'react-native';

export default function Stepper({ children }) {
    return (
        <View>
            <Pressable>
                <Text>-</Text>
            </Pressable>
            {children}
            <Pressable>
                <Text>+</Text>
            </Pressable>
        </View>
    );
}
