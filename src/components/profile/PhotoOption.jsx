import { Pressable, StyleSheet, Text, View } from 'react-native';

import ForwardIcon from '../icons/ForwardIcon';

import { colors, fonts } from '../../styles/theme';

export default function PhotoOption({ icon, variant, title, subtitle, onPress }) {
    const isAccent = variant === 'accent';

    return (
        <Pressable
            style={({ pressed }) => [styles.option, pressed && styles.optionPressed]}
            accessibilityRole='button'
            onPress={onPress}
        >
            <View style={[styles.iconCircle, isAccent && styles.iconCircleAccent]}>{icon}</View>
            <View style={styles.texts}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <ForwardIcon size={18} color={colors.muted} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        minHeight: 64,
        paddingHorizontal: 14,
    },
    optionPressed: {
        backgroundColor: colors.surfacePressed,
    },
    iconCircle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: colors.primary,
    },
    iconCircleAccent: {
        backgroundColor: colors.accent,
    },
    texts: {
        flex: 1,
        gap: 1,
    },
    title: {
        fontFamily: fonts.extraBold,
        fontSize: 16,
        color: colors.text,
    },
    subtitle: {
        fontFamily: fonts.regular,
        fontSize: 13,
        color: colors.muted,
    },
});
