import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, fonts } from '../../styles/theme';

export default function SegmentTab({ label, selected, onPress }) {
    return (
        <Pressable
            style={[styles.tab, selected && styles.tabSelected]}
            accessibilityRole='button'
            accessibilityState={{ selected }}
            onPress={onPress}
        >
            <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
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
    label: {
        fontFamily: fonts.extraBold,
        fontSize: 14,
        color: colors.actionText,
    },
    labelSelected: {
        color: colors.surface,
    },
});
