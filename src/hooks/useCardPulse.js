import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { colors } from '../styles/theme';

export default function useCardPulse() {
    const pulse = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(pulse, {
                    toValue: 1,
                    duration: 1200,
                    useNativeDriver: true,
                }),
                Animated.timing(pulse, {
                    toValue: 0,
                    duration: 1200,
                    useNativeDriver: true,
                }),
            ])
        );

        animation.start();

        return () => animation.stop();
    }, []);

    const borderColor = pulse.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.accent, colors.accentLight],
    });

    const scale = pulse.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.02],
    });

    return { borderColor, scale };
}
