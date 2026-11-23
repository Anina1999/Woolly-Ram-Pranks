import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function SearchIcon({ size = 22, color = colors.textOnAccent }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Circle cx={10.5} cy={10.5} r={6.5} fill='none' stroke={color} strokeWidth={2.8} />
            <Path d='M15.5 15.5 L20.5 20.5' stroke={color} strokeWidth={3} strokeLinecap='round' />
        </Svg>
    );
}
