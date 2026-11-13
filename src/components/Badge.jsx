import { StyleSheet, Text, View } from 'react-native';

export default function Badge({ label, backgroundColor, color, children }) {
    return (
        <View style={[styles.badge, { backgroundColor }]}>
            {children}
            <Text style={[styles.label, { color }]}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 999,
    },
    label: {
        fontFamily: 'NunitoSans_800ExtraBold',
        fontSize: 11,
        letterSpacing: 0.6,
    },
});
