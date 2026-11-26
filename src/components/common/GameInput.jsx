import { StyleSheet, Text, TextInput, View } from 'react-native';

import FormError from './FormError';

import { colors, fonts } from '../../styles/theme';

export default function GameInput({ label, icon, error, children, ...inputProps }) {
    const hasError = Boolean(error);

    return (
        <View style={styles.field}>
            <Text style={[styles.label, hasError && styles.labelError]}>{label}</Text>
            <View style={[styles.box, hasError && styles.boxError]}>
                {icon}
                <TextInput placeholderTextColor={colors.placeholder} style={styles.input} {...inputProps} />
                {children}
            </View>
            {hasError && <FormError message={error} />}
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
    labelError: {
        color: colors.errorText,
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
    boxError: {
        borderColor: colors.errorBorder,
        backgroundColor: colors.errorSurface,
    },
    input: {
        flex: 1,
        padding: 0,
        fontFamily: fonts.regular,
        fontSize: 16,
        color: colors.text,
    },
});
