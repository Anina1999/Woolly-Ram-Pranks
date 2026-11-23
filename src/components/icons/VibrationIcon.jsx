import Svg, { Path, Rect } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function VibrationIcon({ size = 22, color = colors.actionText }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Rect x={8} y={3} width={8} height={18} rx={2} fill='none' stroke={color} strokeWidth={2} />
            <Path d='M4 8 V16 M20 8 V16' stroke={color} strokeWidth={2} strokeLinecap='round' />
        </Svg>
    );
}
