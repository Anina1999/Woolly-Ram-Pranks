import { StyleSheet, View } from 'react-native';

import { colors } from '../styles/theme';

export default function RoomCardSkeleton({ opacity }) {
    return (
        <View style={[styles.card, { opacity }]}>
            <View style={styles.avatar} />
            <View style={styles.lines}>
                <View style={styles.title} />
                <View style={styles.subtitle} />
            </View>
            <View style={styles.badge} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        height: 72,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: colors.skeletonBorder,
        backgroundColor: colors.skeleton,
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: colors.skeletonShape,
    },
    lines: {
        flex: 1,
        gap: 8,
    },
    title: {
        width: '70%',
        height: 12,
        borderRadius: 6,
        backgroundColor: colors.skeletonShape,
    },
    subtitle: {
        width: '40%',
        height: 10,
        borderRadius: 6,
        backgroundColor: colors.skeletonShapeLight,
    },
    badge: {
        width: 48,
        height: 20,
        borderRadius: 10,
        backgroundColor: colors.skeletonShape,
    },
});
