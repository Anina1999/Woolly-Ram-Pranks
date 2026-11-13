import { StyleSheet, Text, View } from 'react-native';

import Badge from './Badge';
import LockIcon from './LockIcon';

import { colors, fonts } from '../styles/theme';

export default function LockedModeCard({ title, description }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardInner}>
                <View style={styles.topRow}>
                    <View style={styles.lockCircle}>
                        <LockIcon />
                    </View>
                    <Badge label='COMING SOON' backgroundColor={colors.surfaceDark} color={colors.textOnDark} />
                </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 3,
        paddingBottom: 6,
        borderRadius: 20,
        backgroundColor: colors.lockedEdge,
    },
    cardInner: {
        gap: 8,
        height: 112,
        padding: 12,
        borderRadius: 17,
        backgroundColor: colors.lockedSurface,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lockCircle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 36,
        height: 36,
        borderRadius: 999,
        backgroundColor: colors.surfaceDark,
    },
    title: {
        fontFamily: fonts.display,
        fontSize: 20,
        color: colors.lockedText,
    },
    description: {
        fontFamily: fonts.regular,
        fontSize: 12,
        color: colors.lockedText,
    },
});
