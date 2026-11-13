import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function GameButton({ title, onPress, children }) {
    return (
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={onPress}>
            <View style={styles.face}>
                <View style={styles.shine} />
                {children}
                <Text style={styles.title}>{title}</Text>
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
    shine: {
        position: 'absolute',
        top: 4,
        left: 8,
        right: 8,
        height: 18,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.18)',
    },
    title: {
        fontFamily: 'LilitaOne_400Regular',
        fontSize: 20,
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
    },
});
