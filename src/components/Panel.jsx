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
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.35,
        shadowRadius: 12,
        elevation: 8,
    },
});
