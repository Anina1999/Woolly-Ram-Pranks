import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '../styles/theme';

export default function RefreshError() {
    return (
        <View style={styles.error}>
            <Text style={styles.errorText}>
                Couldn't refresh the room. Check your connection and tap refresh.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        marginTop: 16,
        marginHorizontal: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: colors.errorBorder,
        backgroundColor: colors.errorSurface,
    },
    errorText: {
        fontFamily: fonts.bold,
        fontSize: 13,
        color: colors.errorTitle,
    },
});
