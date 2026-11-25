import Svg, { Path } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function TrophyIcon({ size = 22 }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Path
                d='M7 4 H17 V9 a5 5 0 0 1 -10 0 Z'
                fill={colors.trophy}
                stroke={colors.trophyEdge}
                strokeWidth={1.5}
            />
            <Path
                d='M7 6 H4 a3 3 0 0 0 3 5 M17 6 H20 a3 3 0 0 1 -3 5 M12 14 V18 M8 20 H16'
                fill='none'
                stroke={colors.trophyEdge}
                strokeWidth={2}
                strokeLinecap='round'
            />
        </Svg>
    );
}
