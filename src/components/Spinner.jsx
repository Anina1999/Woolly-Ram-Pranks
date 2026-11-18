import { Animated } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import useSpin from '../hooks/useSpin';

import { colors } from '../styles/theme';

export default function Spinner({ size = 18 }) {
    const rotate = useSpin();

    return (
        <Animated.View style={{ transform: [{ rotate }] }}>
            <Svg width={size} height={size} viewBox='0 0 22 22'>
                <Circle cx={11} cy={11} r={8} fill='none' stroke={colors.spinnerTrack} strokeWidth={3.5} />
                <Path
                    d='M11 3a8 8 0 0 1 8 8'
                    fill='none'
                    stroke={colors.spinnerArc}
                    strokeWidth={3.5}
                    strokeLinecap='round'
                />
            </Svg>
        </Animated.View>
    );
}
