import { Image, StyleSheet, View } from 'react-native';

import { colors } from '../styles/theme';

export default function TabIcon({ source, focused, color }) {
    return (
        <View style={[styles.pill, focused && styles.pillActive]}>
            <Image source={source} style={[styles.icon, { tintColor: focused ? colors.text : color }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    pill: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 32,
        borderRadius: 999,
    },
    pillActive: {
        backgroundColor: colors.accent,
    },
    icon: {
        width: 22,
        height: 22,
    },
});
