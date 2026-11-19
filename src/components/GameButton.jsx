import { Pressable, StyleSheet, Text, View } from 'react-native';

import Spinner from './Spinner';

import { colors, fonts } from '../styles/theme';

export default function GameButton({
    title,
    onPress,
    size,
    variant,
    isDisabled,
    isLoading,
    loadingTitle,
    style,
    children,
}) {
    const isLarge = size === 'large';
    const isSecondary = variant === 'secondary';
    const isDanger = variant === 'danger';
    const isReady = variant === 'ready';
    const isAccent = variant === 'accent';

    let spinnerColor = colors.textOnPrimary;
    let spinnerTrackColor = colors.spinnerTrackOnPrimary;
    if (isSecondary) {
        spinnerColor = colors.actionText;
        spinnerTrackColor = colors.spinnerTrackOnSecondary;
    }
    if (isAccent) {
        spinnerColor = colors.textOnAccent;
        spinnerTrackColor = colors.spinnerTrackOnAccent;
    }

    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                isSecondary && styles.buttonSecondary,
                isDanger && styles.buttonDanger,
                isAccent && styles.buttonAccent,
                isDisabled && styles.buttonDisabled,
                pressed && styles.buttonPressed,
                style,
            ]}
            disabled={isDisabled || isLoading}
            accessibilityState={{ disabled: isDisabled || isLoading, busy: isLoading }}
            onPress={onPress}
        >
            <View
                style={[
                    styles.face,
                    isLarge && styles.faceLarge,
                    isSecondary && styles.faceSecondary,
                    isDanger && styles.faceDanger,
                    isReady && styles.faceReady,
                    isAccent && styles.faceAccent,
                    isDisabled && styles.faceDisabled,
                ]}
            >
                {!isSecondary && !isDisabled && !isLoading && (
                    <View style={[styles.shine, isLarge && styles.shineLarge, isAccent && styles.shineAccent]} />
                )}
                {isLoading ? <Spinner size={22} color={spinnerColor} trackColor={spinnerTrackColor} /> : children}
                <Text
                    style={[
                        styles.title,
                        isLarge && styles.titleLarge,
                        isSecondary && styles.titleSecondary,
                        isAccent && styles.titleAccent,
                        isDisabled && styles.titleDisabled,
                    ]}
                >
                    {isLoading ? loadingTitle : title}
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
    buttonAccent: {
        backgroundColor: colors.accentButtonEdge,
    },
    buttonDisabled: {
        backgroundColor: colors.disabledButtonEdge,
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
    faceAccent: {
        gap: 10,
        backgroundColor: colors.accentButton,
    },
    faceDisabled: {
        borderColor: colors.disabledButtonEdge,
        backgroundColor: colors.disabledButton,
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
    shineAccent: {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
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
    titleAccent: {
        color: colors.textOnAccent,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 0,
    },
    titleDisabled: {
        color: colors.disabledButtonText,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 0,
    },
});
