import { StyleSheet, Text, View } from 'react-native';

import ErrorIcon from '../icons/ErrorIcon';

import { colors, fonts } from '../../styles/theme';

export default function ServerError() {
    return (
        <View style={styles.box} accessibilityRole='alert'>
            <ErrorIcon size={22} />
            <View style={styles.texts}>
                <Text style={styles.title}>Can't reach the farm</Text>
                <Text style={styles.message}>The server didn't answer. Check your connection and try again.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
        padding: 12,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: colors.errorBorder,
        backgroundColor: colors.serverErrorSurface,
    },
    texts: {
        flex: 1,
        gap: 2,
    },
    title: {
        fontFamily: fonts.extraBold,
        fontSize: 15,
        color: colors.errorTitle,
    },
    message: {
        fontFamily: fonts.regular,
        fontSize: 14,
        lineHeight: 20,
        color: colors.serverErrorText,
    },
});
