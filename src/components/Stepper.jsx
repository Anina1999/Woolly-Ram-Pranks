import { Pressable, StyleSheet, View } from 'react-native';

import BackIcon from './BackIcon';
import ForwardIcon from './ForwardIcon';
import MinusIcon from './MinusIcon';
import PlusIcon from './PlusIcon';

import { colors } from '../styles/theme';

export default function Stepper({ variant, onDecrease, onIncrease, children }) {
    const isArrows = variant === 'arrows';

    return (
        <View style={styles.stepper}>
            <Pressable style={[styles.button, styles.buttonLeft]} onPress={onDecrease}>
                {isArrows ? <BackIcon size={16} /> : <MinusIcon />}
            </Pressable>
            <View style={styles.value}>{children}</View>
            <Pressable
                style={[styles.button, styles.buttonRight, !isArrows && styles.buttonPlus]}
                onPress={onIncrease}
            >
                {isArrows ? <ForwardIcon /> : <PlusIcon size={16} />}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    stepper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 14,
        borderWidth: 2,
        borderColor: colors.border,
        backgroundColor: colors.card,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 44,
        height: 44,
        backgroundColor: colors.stepperButton,
    },
    buttonLeft: {
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    buttonRight: {
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
    },
    buttonPlus: {
        backgroundColor: colors.primary,
    },
    value: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        width: 92,
    },
});
