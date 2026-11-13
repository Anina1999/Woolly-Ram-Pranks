import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function PlayersIcon() {
    return (
        <Svg width={16} height={16} viewBox='0 0 24 24'>
            <Circle cx={9} cy={8} r={3.5} fill={colors.muted} />
            <Circle cx={17} cy={9} r={3} fill={colors.muted} />
            <Path d='M2 20 c1 -5 4 -7 7 -7 s6 2 7 7 Z M15 14 c3 0 6 2 7 6 h-5' fill={colors.muted} />
        </Svg>
    );
}
