import { StyleSheet, Text, TextInput, View } from 'react-native';

import { colors, fonts } from '../../styles/theme';

export default function GameInput({ label, icon, ...inputProps }) {
    return (
        <View style={styles.field}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.box}>
                {icon}
                <TextInput placeholderTextColor={colors.placeholder} style={styles.input} {...inputProps} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    field: {
        gap: 6,
    },
    label: {
        fontFamily: fonts.bold,
        fontSize: 14,
        color: colors.text,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        height: 52,
        paddingHorizontal: 14,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: colors.border,
        backgroundColor: colors.card,
    },
    input: {
        flex: 1,
        padding: 0,
        fontFamily: fonts.regular,
        fontSize: 16,
        color: colors.text,
    },
});
