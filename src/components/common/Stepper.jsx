import { Pressable, StyleSheet, View } from 'react-native';

import BackIcon from '../icons/BackIcon';
import ForwardIcon from '../icons/ForwardIcon';
import MinusIcon from '../icons/MinusIcon';
import PlusIcon from '../icons/PlusIcon';

import { colors } from '../../styles/theme';

export default function Stepper({
    variant,
    isDecreaseDisabled,
    isIncreaseDisabled,
    onDecrease,
    onIncrease,
    children,
}) {
    const isArrows = variant === 'arrows';
    const decreaseIconColor = isDecreaseDisabled ? colors.stepperIconDisabled : colors.actionText;
    const forwardIconColor = isIncreaseDisabled ? colors.stepperIconDisabled : colors.actionText;
    const plusIconColor = isIncreaseDisabled ? colors.stepperIconDisabled : colors.textOnPrimary;

    return (
        <View style={styles.stepper}>
            <Pressable
                style={[styles.button, styles.buttonLeft, isDecreaseDisabled && styles.buttonDisabled]}
                disabled={isDecreaseDisabled}
                onPress={onDecrease}
            >
                {isArrows ? (
                    <BackIcon size={16} color={decreaseIconColor} />
                ) : (
                    <MinusIcon color={decreaseIconColor} />
                )}
            </Pressable>
            <View style={styles.value}>{children}</View>
            <Pressable
                style={[
                    styles.button,
                    styles.buttonRight,
                    !isArrows && styles.buttonPlus,
                    isIncreaseDisabled && styles.buttonDisabled,
                ]}
                disabled={isIncreaseDisabled}
                onPress={onIncrease}
            >
                {isArrows ? (
                    <ForwardIcon color={forwardIconColor} />
                ) : (
                    <PlusIcon size={16} color={plusIconColor} />
                )}
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
    buttonDisabled: {
        backgroundColor: colors.stepperButtonDisabled,
    },
    value: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        width: 92,
    },
});
