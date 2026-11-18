import { StyleSheet, Text, View } from 'react-native';

import ErrorIcon from './ErrorIcon';

import { colors, fonts } from '../styles/theme';

export default function FormError({ message }) {
    return (
        <View style={styles.error}>
            <ErrorIcon />
            <Text style={styles.errorText}>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    errorText: {
        fontFamily: fonts.bold,
        fontSize: 13,
        color: colors.errorText,
    },
});
