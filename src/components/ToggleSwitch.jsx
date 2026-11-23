import { Pressable, StyleSheet, View } from 'react-native';

import { colors } from '../styles/theme';

export default function ToggleSwitch({ value, size, accessibilityLabel, onValueChange }) {
    const isSmall = size === 'small';

    const handlePress = () => {
        onValueChange(!value);
    };

    return (
        <Pressable
            style={[styles.track, isSmall && styles.trackSmall, value && styles.trackOn]}
            accessibilityRole='switch'
            accessibilityLabel={accessibilityLabel}
            accessibilityState={{ checked: value }}
            hitSlop={10}
            onPress={handlePress}
        >
            <View style={[styles.thumb, isSmall && styles.thumbSmall]} />
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
    trackSmall: {
        width: 52,
        height: 30,
        borderRadius: 15,
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
    thumbSmall: {
        width: 22,
        height: 22,
        borderRadius: 11,
    },
});
