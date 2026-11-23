import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function MusicIcon({ size = 22, color = colors.actionText }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Path d='M9 18 V5 L20 3 V16' fill='none' stroke={color} strokeWidth={2} strokeLinejoin='round' />
            <Circle cx={6.5} cy={18} r={2.5} fill='none' stroke={color} strokeWidth={2} />
            <Circle cx={17.5} cy={16} r={2.5} fill='none' stroke={color} strokeWidth={2} />
        </Svg>
    );
}
