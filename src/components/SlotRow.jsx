import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '../styles/theme';

export default function SlotRow({ title, variant, children }) {
    const isClosed = variant === 'closed';

    return (
        <Pressable style={[styles.row, isClosed ? styles.rowClosed : styles.rowOpen]} disabled={isClosed}>
            <View style={[styles.circle, isClosed ? styles.circleClosed : styles.circleOpen]}>{children}</View>
            <Text style={[styles.title, isClosed && styles.titleClosed]}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        height: 56,
        paddingVertical: 6,
        paddingLeft: 6,
        paddingRight: 10,
        borderRadius: 16,
        borderWidth: 2,
    },
    rowOpen: {
        borderStyle: 'dashed',
        borderColor: colors.openSlotBorder,
    },
    rowClosed: {
        borderColor: colors.closedSlotBorder,
        backgroundColor: colors.closedSlotSurface,
    },
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 42,
        height: 42,
        borderRadius: 999,
    },
    circleOpen: {
        backgroundColor: colors.openSlotCircle,
    },
    circleClosed: {
        backgroundColor: colors.closedSlotCircle,
    },
    title: {
        flex: 1,
        fontFamily: fonts.extraBold,
        fontSize: 16,
        color: colors.actionText,
    },
    titleClosed: {
        fontFamily: fonts.bold,
        fontSize: 15,
        color: colors.lockedText,
    },
});
