import Svg, { Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function BellIcon({ size = 22, color = colors.actionText }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Path
                d='M6 16 V11 a6 6 0 0 1 12 0 V16 L20 18 H4 Z'
                fill='none'
                stroke={color}
                strokeWidth={2}
                strokeLinejoin='round'
            />
            <Path d='M10 21 H14' stroke={color} strokeWidth={2} strokeLinecap='round' />
        </Svg>
    );
}
