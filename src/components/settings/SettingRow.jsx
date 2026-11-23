import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '../../styles/theme';

export default function SettingRow({ icon, label, style, children }) {
    return (
        <View style={[styles.row, style]}>
            {icon}
            <Text style={styles.label}>{label}</Text>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        minHeight: 52,
        paddingHorizontal: 14,
    },
    label: {
        flex: 1,
        fontFamily: fonts.bold,
        fontSize: 15,
        color: colors.text,
    },
});
