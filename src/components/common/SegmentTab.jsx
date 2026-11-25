import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, fonts } from '../../styles/theme';

export default function SegmentTab({ label, selected, variant, onPress }) {
    const isDark = variant === 'dark';

    return (
        <Pressable
            style={[
                styles.tab,
                selected && styles.tabSelected,
                isDark && selected && styles.tabSelectedDark,
            ]}
            accessibilityRole='button'
            accessibilityState={{ selected }}
            onPress={onPress}
        >
            <Text
                style={[
                    styles.label,
                    selected && styles.labelSelected,
                    isDark && styles.labelDark,
                    isDark && selected && styles.labelSelectedDark,
                ]}
            >
                {label}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        borderRadius: 12,
    },
    tabSelected: {
        borderBottomWidth: 2,
        borderBottomColor: colors.selectedTabEdge,
        backgroundColor: colors.frameDark,
    },
    tabSelectedDark: {
        borderBottomWidth: 0,
        backgroundColor: colors.accent,
    },
    label: {
        fontFamily: fonts.extraBold,
        fontSize: 14,
        color: colors.actionText,
    },
    labelSelected: {
        color: colors.surface,
    },
    labelDark: {
        fontSize: 15,
        color: colors.tabInactive,
    },
    labelSelectedDark: {
        color: colors.textOnAccent,
    },
});
