import { Text, View } from 'react-native';

import DifficultyPips from './DifficultyPips';
import Stepper from './Stepper';

import getDifficulty from '../utils/getDifficulty';

export default function DifficultySetting({ difficulty }) {
    const { name } = getDifficulty(difficulty);

    return (
        <View>
            <Text>Difficulty</Text>
            <Stepper variant='arrows'>
                <Text>{name}</Text>
                <DifficultyPips difficulty={difficulty} />
            </Stepper>
        </View>
    );
}
