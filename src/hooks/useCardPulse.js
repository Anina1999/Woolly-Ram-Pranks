import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

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
        outputRange: ['#F2B33D', '#F7E07A'],
    });

    const scale = pulse.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.02],
    });

    return { borderColor, scale };
}
