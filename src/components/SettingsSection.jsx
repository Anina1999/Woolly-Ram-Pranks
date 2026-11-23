import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '../styles/theme';

export default function SettingsSection({ title, children }) {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.card}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        gap: 8,
    },
    title: {
        marginHorizontal: 4,
        fontFamily: fonts.extraBold,
        fontSize: 13,
        letterSpacing: 0.8,
        color: colors.muted,
    },
    card: {
        borderRadius: 18,
        borderWidth: 2,
        borderColor: colors.settingsBorder,
        backgroundColor: colors.card,
    },
});
