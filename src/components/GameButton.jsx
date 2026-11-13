import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function GameButton({ title, onPress, size, children }) {
    const isLarge = size === 'large';

    return (
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={onPress}>
            <View style={[styles.face, isLarge && styles.faceLarge]}>
                <View style={[styles.shine, isLarge && styles.shineLarge]} />
                {children}
                <Text style={[styles.title, isLarge && styles.titleLarge]}>{title}</Text>
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
});
