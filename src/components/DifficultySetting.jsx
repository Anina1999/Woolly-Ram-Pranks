import { StyleSheet, Text, View } from 'react-native';

import DifficultyPips from './DifficultyPips';
import Stepper from './Stepper';

import getDifficulty from '../utils/getDifficulty';
import getNextDifficulty from '../utils/getNextDifficulty';

import { colors, fonts } from '../styles/theme';

const MIN_LEVEL = 1;
const MAX_LEVEL = 5;

export default function DifficultySetting({ difficulty, onChange }) {
    const { name, level, text } = getDifficulty(difficulty);

    const handlePressEasier = () => {
        onChange(getNextDifficulty(difficulty, -1));
    };

    const handlePressHarder = () => {
        onChange(getNextDifficulty(difficulty, 1));
    };

    return (
        <View style={styles.row}>
            <Text style={styles.title}>Difficulty</Text>
            <Stepper
                variant='arrows'
                isDecreaseDisabled={level === MIN_LEVEL}
                isIncreaseDisabled={level === MAX_LEVEL}
                onDecrease={handlePressEasier}
                onIncrease={handlePressHarder}
            >
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
