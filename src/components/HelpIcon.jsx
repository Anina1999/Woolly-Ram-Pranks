import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function HelpIcon({ size = 22, color = colors.actionText }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Circle cx={12} cy={12} r={9} fill='none' stroke={color} strokeWidth={2} />
            <Path
                d='M9.5 9.5 a2.5 2.5 0 1 1 3.5 2.3 c-0.7 0.3 -1 0.9 -1 1.7'
                fill='none'
                stroke={color}
                strokeWidth={2}
                strokeLinecap='round'
            />
            <Circle cx={12} cy={17} r={1.2} fill={color} />
        </Svg>
    );
}
