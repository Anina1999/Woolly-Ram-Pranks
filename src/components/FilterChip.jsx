import { Pressable, StyleSheet, Text } from 'react-native';

import LockIcon from './icons/LockIcon';

import { colors, fonts } from '../styles/theme';

export default function FilterChip({ label, icon, selected, onPress }) {
    const isLock = icon === 'lock';
    const labelColor = selected ? colors.surface : colors.actionText;

    return (
        <Pressable
            style={[styles.chip, selected && styles.chipSelected]}
            accessibilityRole='button'
            accessibilityState={{ selected }}
            onPress={onPress}
        >
            {isLock && <LockIcon size={13} color={labelColor} />}
            <Text style={[styles.label, { color: labelColor }]} numberOfLines={1}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    chip: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 999,
        borderWidth: 2,
        borderColor: colors.border,
        backgroundColor: colors.card,
    },
    chipSelected: {
        borderColor: colors.frameDark,
        backgroundColor: colors.frameDark,
    },
    label: {
        fontFamily: fonts.extraBold,
        fontSize: 14,
    },
});
