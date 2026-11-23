import Svg, { Path } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function MinusIcon({ color = colors.actionText }) {
    return (
        <Svg width={16} height={16} viewBox='0 0 24 24'>
            <Path d='M5 12h14' stroke={color} strokeWidth={3} strokeLinecap='round' />
        </Svg>
    );
}
