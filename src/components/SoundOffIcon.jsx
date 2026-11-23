import Svg, { Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function SoundOffIcon({ size = 22, color = colors.mutedIcon }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Path d='M4 9 H8 L13 5 V19 L8 15 H4 Z' fill='none' stroke={color} strokeWidth={2} strokeLinejoin='round' />
            <Path
                d='M16 9 L22 15 M22 9 L16 15'
                fill='none'
                stroke={colors.mutedSlash}
                strokeWidth={2.4}
                strokeLinecap='round'
            />
        </Svg>
    );
}
