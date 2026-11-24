import { Pressable, Text, View } from 'react-native';

import CheckIcon from '../icons/CheckIcon';

export default function ReadyButton({ isReady, style, onPress }) {
    return (
        <Pressable
            style={style}
            accessibilityRole='togglebutton'
            accessibilityLabel='Ready'
            accessibilityState={{ checked: isReady }}
            onPress={onPress}
        >
            <View>{isReady && <CheckIcon />}</View>
            <Text>{isReady ? 'Ready!' : 'I’m ready'}</Text>
        </Pressable>
    );
}
