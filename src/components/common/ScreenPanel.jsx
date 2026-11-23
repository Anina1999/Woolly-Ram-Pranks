import { StyleSheet, View } from 'react-native';

import { colors } from '../../styles/theme';

export default function ScreenPanel({ style, children }) {
    return (
        <View style={[styles.frame, style]}>
            <View style={styles.panel}>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        paddingTop: 4,
        paddingHorizontal: 4,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        backgroundColor: colors.frame,
    },
    panel: {
        flex: 1,
        overflow: 'hidden',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: colors.surface,
    },
});
