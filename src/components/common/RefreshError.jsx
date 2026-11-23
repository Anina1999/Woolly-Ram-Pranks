import { StyleSheet, View } from 'react-native';

import FormError from './FormError';

import { colors } from '../../styles/theme';

export default function RefreshError() {
    return (
        <View style={styles.error}>
            <FormError message="Couldn't refresh the room. Check your connection and tap refresh." />
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
});
