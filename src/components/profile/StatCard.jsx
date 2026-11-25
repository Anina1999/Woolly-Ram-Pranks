import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '../../styles/theme';

export default function StatCard({ icon, value, label }) {
    return (
        <View style={styles.card}>
            {icon}
            <Text style={styles.value}>{value}</Text>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        gap: 2,
        paddingVertical: 14,
        paddingHorizontal: 4,
        borderRadius: 18,
        borderWidth: 2,
        borderBottomWidth: 5,
        borderColor: colors.cardBorder,
        backgroundColor: colors.card,
    },
    value: {
        fontFamily: fonts.display,
        fontSize: 28,
        lineHeight: 32,
        color: colors.text,
    },
    label: {
        fontFamily: fonts.bold,
        fontSize: 12,
        color: colors.muted,
    },
});
