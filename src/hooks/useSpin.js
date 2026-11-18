import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

export default function useSpin() {
    const spin = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.timing(spin, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        );

        animation.start();

        return () => animation.stop();
    }, []);

    return spin.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
}
