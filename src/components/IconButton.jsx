import { Pressable, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors } from '../styles/theme';

export default function IconButton({ icon, size, isDisabled, accessibilityLabel, onPress, children }) {
    const isSmall = size === 'small';

    return (
        <Pressable
            style={[styles.button, isSmall && styles.buttonSmall]}
            disabled={isDisabled}
            accessibilityRole='button'
            accessibilityLabel={accessibilityLabel}
            onPress={onPress}
        >
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
});
