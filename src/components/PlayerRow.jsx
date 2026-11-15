import { StyleSheet, Text, View } from 'react-native';

import Badge from './Badge';
import CrownIcon from './CrownIcon';
import RamAvatar from './RamAvatar';

import { colors, fonts } from '../styles/theme';

export default function PlayerRow({ player }) {
    return (
        <View style={styles.row}>
            <RamAvatar wool={player.wool} bandana={player.bandana} size={42} style={styles.avatar} />
            <View style={styles.info}>
                <Text style={styles.name}>{player.name}</Text>
                {player.you && <Text style={styles.you}>(you)</Text>}
                {player.host && (
                    <Badge
                        label='HOST'
                        backgroundColor={colors.accent}
                        color={colors.text}
                        style={styles.hostBadge}
                        labelStyle={styles.hostLabel}
                    >
                        <CrownIcon />
                    </Badge>
                )}
            </View>
            <Badge
                label={player.ready ? 'READY' : 'NOT READY'}
                backgroundColor={player.ready ? colors.success : colors.notReadyBackground}
                color={player.ready ? colors.textOnPrimary : colors.notReadyText}
                style={styles.readyBadge}
            />
        </View>
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
        borderColor: colors.rowBorder,
        backgroundColor: colors.card,
    },
    avatar: {
        borderWidth: 3,
        borderColor: colors.frame,
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    name: {
        fontFamily: fonts.extraBold,
        fontSize: 16,
        color: colors.text,
    },
    you: {
        fontFamily: fonts.bold,
        fontSize: 12,
        color: colors.muted,
    },
    hostBadge: {
        gap: 3,
        paddingVertical: 2,
        paddingHorizontal: 7,
    },
    hostLabel: {
        fontSize: 10,
    },
    readyBadge: {
        paddingVertical: 4,
        paddingHorizontal: 9,
    },
});
