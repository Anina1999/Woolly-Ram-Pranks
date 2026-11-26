import { Pressable, Text, View } from 'react-native';

export default function AuthFooter({ question, linkTitle, onPress }) {
    return (
        <View>
            <Text>{question}</Text>
            <Pressable onPress={onPress}>
                <Text>{linkTitle}</Text>
            </Pressable>
        </View>
    );
}
