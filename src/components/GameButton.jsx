import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function GameButton({ title, onPress, size, variant, children }) {
    const isLarge = size === 'large';
    const isSecondary = variant === 'secondary';

    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                isSecondary && styles.buttonSecondary,
                pressed && styles.buttonPressed,
            ]}
            onPress={onPress}
        >
            <View style={[styles.face, isLarge && styles.faceLarge, isSecondary && styles.faceSecondary]}>
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
        backgroundColor: '#24601F',
    },
    buttonSecondary: {
        backgroundColor: '#8A5A34',
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
        backgroundColor: '#3C8C35',
    },
    faceLarge: {
        gap: 10,
        height: 56,
    },
    faceSecondary: {
        borderWidth: 2,
        borderColor: '#8A5A34',
        backgroundColor: '#FBF3E2',
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
        fontFamily: 'LilitaOne_400Regular',
        fontSize: 20,
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
    },
    titleLarge: {
        fontSize: 22,
    },
    titleSecondary: {
        color: '#5E3A1E',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 0,
    },
});
