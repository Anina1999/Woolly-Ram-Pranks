import { StyleSheet, View } from 'react-native';

import { colors } from '../styles/theme';

export default function Panel({ style, children }) {
    return <View style={[styles.panel, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    panel: {
        borderRadius: 22,
        borderWidth: 4,
        borderColor: colors.frame,
        backgroundColor: colors.surface,
    },
});
