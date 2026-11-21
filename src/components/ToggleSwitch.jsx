import { Pressable, StyleSheet, View } from 'react-native';

import { colors } from '../styles/theme';

export default function ToggleSwitch({ value, accessibilityLabel, onValueChange }) {
    const handlePress = () => {
        onValueChange(!value);
    };

    return (
        <Pressable
            style={[styles.track, value && styles.trackOn]}
            accessibilityRole='switch'
            accessibilityLabel={accessibilityLabel}
            accessibilityState={{ checked: value }}
            hitSlop={10}
            onPress={handlePress}
        >
            <View style={styles.thumb} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    track: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 60,
        height: 34,
        padding: 2,
        borderRadius: 17,
        borderWidth: 2,
        borderColor: colors.switchOffEdge,
        backgroundColor: colors.switchOff,
    },
    trackOn: {
        justifyContent: 'flex-end',
        borderColor: colors.primaryEdge,
        backgroundColor: colors.primary,
    },
    thumb: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: colors.switchThumb,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 2,
    },
});
