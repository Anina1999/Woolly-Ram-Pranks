import Svg, { Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function CrownIcon({ size = 11, color = colors.text, strokeColor }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Path
                d='M3 18 L5 7 L10 12 L12 5 L14 12 L19 7 L21 18 Z'
                fill={color}
                stroke={strokeColor}
                strokeWidth={1.5}
                strokeLinejoin='round'
            />
        </Svg>
    );
}
