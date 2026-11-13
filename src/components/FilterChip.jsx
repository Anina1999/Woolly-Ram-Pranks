import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, fonts } from '../styles/theme';

export default function FilterChip({ label, selected, onPress }) {
    return (
        <Pressable style={[styles.chip, selected && styles.chipSelected]} onPress={onPress}>
            <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    chip: {
        justifyContent: 'center',
        height: 40,
        paddingHorizontal: 16,
        borderRadius: 999,
        borderWidth: 2,
        borderColor: colors.border,
        backgroundColor: colors.surfaceLight,
    },
    chipSelected: {
        borderColor: colors.woodDark,
        backgroundColor: colors.woodDark,
    },
    label: {
        fontFamily: fonts.extraBold,
        fontSize: 14,
        color: colors.woodDark,
    },
    labelSelected: {
        color: colors.surface,
    },
});
