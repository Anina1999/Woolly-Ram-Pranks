import { Pressable, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors } from '../../styles/theme';

export default function IconButton({ icon, size, variant, isDisabled, accessibilityLabel, onPress, children }) {
    const isSmall = size === 'small';
    const isPrimary = variant === 'primary';

    return (
        <Pressable
            style={[
                styles.button,
                isSmall && styles.buttonSmall,
                isPrimary && styles.buttonPrimary,
                isDisabled && styles.buttonDisabled,
            ]}
            disabled={isDisabled}
            accessibilityRole='button'
            accessibilityLabel={accessibilityLabel}
            onPress={onPress}
        >
            {isPrimary && !isDisabled && <View style={styles.shine} />}
            {children || <Feather name={icon} size={isSmall ? 18 : 22} color={colors.actionText} />}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        borderRadius: 999,
        borderWidth: 3,
        borderColor: colors.frame,
        backgroundColor: colors.surface,
    },
    buttonSmall: {
        width: 44,
        height: 44,
        borderWidth: 2,
        backgroundColor: colors.smallIconButton,
    },
    buttonPrimary: {
        width: 52,
        height: 52,
        borderBottomWidth: 6,
        borderColor: colors.primaryEdge,
        backgroundColor: colors.primary,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.35,
        shadowRadius: 0,
        elevation: 3,
    },
    buttonDisabled: {
        borderColor: colors.disabledButtonEdge,
        backgroundColor: colors.disabledButton,
    },
    shine: {
        position: 'absolute',
        top: 3,
        left: 7,
        right: 7,
        height: 14,
        borderRadius: 999,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
});
