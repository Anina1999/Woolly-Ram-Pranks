import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function CameraIcon({ size = 22, color = colors.textOnPrimary }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Path
                d='M4 8 h3 l2 -3 h6 l2 3 h3 v11 H4 Z'
                fill='none'
                stroke={color}
                strokeWidth={2.2}
                strokeLinejoin='round'
            />
            <Circle cx={12} cy={13} r={3.5} fill='none' stroke={color} strokeWidth={2.2} />
        </Svg>
    );
}
