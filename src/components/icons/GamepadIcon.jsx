import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function GamepadIcon({ size = 22, color = colors.actionText }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Rect x={3} y={6} width={18} height={12} rx={4} fill='none' stroke={color} strokeWidth={2} />
            <Path d='M8 10 v4 M6 12 h4' stroke={color} strokeWidth={2} strokeLinecap='round' />
            <Circle cx={15.5} cy={11} r={1.2} fill={color} />
            <Circle cx={17.5} cy={13.5} r={1.2} fill={color} />
        </Svg>
    );
}
