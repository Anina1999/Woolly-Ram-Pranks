import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function ClockIcon({ size = 22, color = colors.actionText }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Circle cx={12} cy={13} r={8} fill='none' stroke={color} strokeWidth={2} />
            <Path d='M12 13 V8.5 M12 13 L15 15' stroke={color} strokeWidth={2} strokeLinecap='round' />
        </Svg>
    );
}
