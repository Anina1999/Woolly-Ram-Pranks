import Svg, { Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function SoundIcon({ size = 22, color = colors.actionText }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Path d='M4 9 H8 L13 5 V19 L8 15 H4 Z' fill='none' stroke={color} strokeWidth={2} strokeLinejoin='round' />
            <Path
                d='M16.5 9 a4 4 0 0 1 0 6 M19 6.5 a7.5 7.5 0 0 1 0 11'
                fill='none'
                stroke={color}
                strokeWidth={2}
                strokeLinecap='round'
            />
        </Svg>
    );
}
