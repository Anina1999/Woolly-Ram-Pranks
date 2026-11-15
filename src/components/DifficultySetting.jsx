import { StyleSheet, Text, View } from 'react-native';

import DifficultyPips from './DifficultyPips';
import Stepper from './Stepper';

import getDifficulty from '../utils/getDifficulty';

import { colors, fonts } from '../styles/theme';

export default function DifficultySetting({ difficulty }) {
    const { name, text } = getDifficulty(difficulty);

    return (
        <View style={styles.row}>
            <Text style={styles.title}>Difficulty</Text>
            <Stepper variant='arrows'>
                <Text style={[styles.value, { color: text }]}>{name}</Text>
                <DifficultyPips difficulty={difficulty} />
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
    title: {
        flex: 1,
        fontFamily: fonts.extraBold,
        fontSize: 15,
        color: colors.text,
    },
    value: {
        fontFamily: fonts.display,
        fontSize: 16,
        lineHeight: 18,
    },
});
