import Svg, { Path } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function CheckIcon({ color = colors.textOnPrimary, opacity = 1 }) {
    return (
        <Svg width={16} height={16} viewBox='0 0 24 24'>
            <Path
                d='M5 12.5 L10 17 L19 7'
                fill='none'
                stroke={color}
                strokeOpacity={opacity}
                strokeWidth={4}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}
