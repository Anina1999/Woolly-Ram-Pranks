import { StyleSheet, Text, View } from 'react-native';

import Stepper from './Stepper';

import { colors, fonts } from '../styles/theme';

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 5;

export default function MaxPlayersSetting({ maxPlayers, onChange }) {
    const handlePressDecrease = () => {
        if (maxPlayers > MIN_PLAYERS) {
            onChange?.(maxPlayers - 1);
        }
    };

    const handlePressIncrease = () => {
        if (maxPlayers < MAX_PLAYERS) {
            onChange?.(maxPlayers + 1);
        }
    };

    return (
        <View style={styles.row}>
            <View style={styles.labels}>
                <Text style={styles.title}>Max players</Text>
                <Text style={styles.hint}>Up to 5 players</Text>
            </View>
            <Stepper onDecrease={handlePressDecrease} onIncrease={handlePressIncrease}>
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
