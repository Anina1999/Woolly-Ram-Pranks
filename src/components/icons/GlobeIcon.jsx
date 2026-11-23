import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function GlobeIcon({ size = 18, color = colors.textOnDark }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Circle cx={12} cy={12} r={9} fill='none' stroke={color} strokeWidth={2.2} />
            <Path
                d='M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18'
                fill='none'
                stroke={color}
                strokeWidth={2}
            />
        </Svg>
    );
}
