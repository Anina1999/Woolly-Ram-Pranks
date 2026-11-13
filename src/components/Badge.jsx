import { StyleSheet, Text, View } from 'react-native';

import { fonts } from '../styles/theme';

export default function Badge({ label, backgroundColor, color, style, labelStyle, children }) {
    return (
        <View style={[styles.badge, { backgroundColor }, style]}>
            {children}
            <Text style={[styles.label, { color }, labelStyle]}>{label}</Text>
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
        fontFamily: fonts.extraBold,
        fontSize: 11,
        letterSpacing: 0.6,
    },
});
