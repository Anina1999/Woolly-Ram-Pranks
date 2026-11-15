import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '../styles/theme';

export default function GameButton({ title, onPress, size, variant, style, children }) {
    const isLarge = size === 'large';
    const isSecondary = variant === 'secondary';
    const isDanger = variant === 'danger';
    const isReady = variant === 'ready';

    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                isSecondary && styles.buttonSecondary,
                isDanger && styles.buttonDanger,
                pressed && styles.buttonPressed,
                style,
            ]}
            onPress={onPress}
        >
            <View
                style={[
                    styles.face,
                    isLarge && styles.faceLarge,
                    isSecondary && styles.faceSecondary,
                    isDanger && styles.faceDanger,
                    isReady && styles.faceReady,
                ]}
            >
                {!isSecondary && <View style={[styles.shine, isLarge && styles.shineLarge]} />}
                {children}
                <Text style={[styles.title, isLarge && styles.titleLarge, isSecondary && styles.titleSecondary]}>
                    {title}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 4,
        borderRadius: 16,
        backgroundColor: colors.primaryEdge,
    },
    buttonSecondary: {
        backgroundColor: colors.frame,
    },
    buttonDanger: {
        backgroundColor: colors.dangerButtonEdge,
    },
    buttonPressed: {
        marginTop: 4,
        paddingBottom: 0,
    },
    face: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        height: 52,
        overflow: 'hidden',
        borderRadius: 16,
        backgroundColor: colors.primary,
    },
    faceLarge: {
        gap: 10,
        height: 56,
    },
    faceSecondary: {
        borderWidth: 2,
        borderColor: colors.frame,
        backgroundColor: colors.surface,
    },
    faceDanger: {
        backgroundColor: colors.dangerButton,
    },
    faceReady: {
        borderWidth: 3,
        borderColor: colors.readyBorder,
        backgroundColor: colors.success,
    },
    shine: {
        position: 'absolute',
        top: 4,
        left: 8,
        right: 8,
        height: 18,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.18)',
    },
    shineLarge: {
        height: 20,
    },
    title: {
        fontFamily: fonts.display,
        fontSize: 20,
        color: colors.textOnPrimary,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
    },
    titleLarge: {
        fontSize: 22,
    },
    titleSecondary: {
        color: colors.actionText,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 0,
    },
});
