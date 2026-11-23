import { Pressable, StyleSheet } from 'react-native';

import InfoCornerIcon from '../icons/InfoCornerIcon';

export default function DetailsCornerButton({ roomName, onPress }) {
    return (
        <Pressable
            style={styles.button}
            accessibilityRole='button'
            accessibilityLabel={`Room details: ${roomName}`}
            onPress={onPress}
        >
            <InfoCornerIcon />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 2,
        right: 2,
        width: 44,
        height: 44,
    },
});
