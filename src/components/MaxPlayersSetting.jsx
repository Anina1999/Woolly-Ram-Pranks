import { StyleSheet, Text, View } from 'react-native';

import Stepper from './Stepper';

import { colors, fonts } from '../styles/theme';

export default function MaxPlayersSetting({ maxPlayers }) {
    return (
        <View style={styles.row}>
            <View style={styles.labels}>
                <Text style={styles.title}>Max players</Text>
                <Text style={styles.hint}>Up to 5 players</Text>
            </View>
            <Stepper>
                <Text style={styles.value}>{maxPlayers}</Text>
            </Stepper>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
    labels: {
        flex: 1,
    },
    title: {
        fontFamily: fonts.extraBold,
        fontSize: 15,
        color: colors.text,
    },
    hint: {
        fontFamily: fonts.bold,
        fontSize: 11,
        color: colors.muted,
    },
    value: {
        fontFamily: fonts.display,
        fontSize: 22,
        color: colors.text,
    },
});
