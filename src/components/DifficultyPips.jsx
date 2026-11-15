import { StyleSheet, View } from 'react-native';

import getDifficulty from '../utils/getDifficulty';

import { colors } from '../styles/theme';

const PIPS = 5;

export default function DifficultyPips({ difficulty, size }) {
    const { level, dot } = getDifficulty(difficulty);
    const isSmall = size === 'small';

    return (
        <View style={[styles.pips, isSmall && styles.pipsSmall]}>
            {Array.from({ length: PIPS }, (_, index) => (
                <View
                    key={index}
                    style={[
                        styles.pip,
                        isSmall && styles.pipSmall,
                        { backgroundColor: index < level ? dot : colors.pipEmpty },
                    ]}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    pips: {
        flexDirection: 'row',
        gap: 4,
    },
    pipsSmall: {
        gap: 2,
    },
    pip: {
        width: 14,
        height: 6,
        borderRadius: 3,
    },
    pipSmall: {
        width: 8,
        height: 5,
    },
});
