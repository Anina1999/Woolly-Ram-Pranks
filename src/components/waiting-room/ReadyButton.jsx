import { Pressable, StyleSheet, Text, View } from 'react-native';

import CheckIcon from '../icons/CheckIcon';

import { colors, fonts } from '../../styles/theme';

export default function ReadyButton({ isReady, style, onPress }) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                isReady && styles.buttonReady,
                pressed && styles.buttonPressed,
                style,
            ]}
            accessibilityRole='togglebutton'
            accessibilityLabel='Ready'
            accessibilityState={{ checked: isReady }}
            onPress={onPress}
        >
            <View style={[styles.face, isReady && styles.faceReady]}>
                {isReady && <View style={styles.innerShadow} />}
                <View style={[styles.circle, isReady && styles.circleReady]}>
                    <CheckIcon
                        color={isReady ? colors.primaryEdge : colors.surface}
                        opacity={isReady ? 1 : 0.4}
                    />
                </View>
                <Text style={[styles.title, isReady && styles.titleReady]}>{isReady ? 'Ready!' : 'I’m ready'}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 4,
        borderRadius: 16,
        backgroundColor: colors.frame,
    },
    buttonReady: {
        backgroundColor: colors.readyButtonEdge,
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
        backgroundColor: colors.accentButton,
    },
    faceReady: {
        borderWidth: 3,
        borderColor: colors.readyBorder,
        backgroundColor: colors.primaryEdge,
    },
    innerShadow: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 26,
        height: 26,
        borderRadius: 999,
        backgroundColor: colors.text,
    },
    circleReady: {
        width: 24,
        height: 24,
        backgroundColor: colors.readyBorder,
    },
    title: {
        fontFamily: fonts.display,
        fontSize: 18,
        color: colors.textOnAccent,
    },
    titleReady: {
        color: colors.textOnPrimary,
    },
});
