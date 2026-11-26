import Svg, { Path, Rect } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function PasswordIcon({ size = 20, color = colors.fieldIcon }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Rect x={5} y={10} width={14} height={10} rx={2} fill='none' stroke={color} strokeWidth={2} />
            <Path d='M8 10V7a4 4 0 0 1 8 0v3' fill='none' stroke={color} strokeWidth={2} />
        </Svg>
    );
}
