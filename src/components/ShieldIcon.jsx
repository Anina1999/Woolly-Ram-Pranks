import Svg, { Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function ShieldIcon({ size = 22, color = colors.actionText }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Path
                d='M12 3 L19 6 V11 c0 5 -3 8 -7 10 c-4 -2 -7 -5 -7 -10 V6 Z'
                fill='none'
                stroke={color}
                strokeWidth={2}
                strokeLinejoin='round'
            />
        </Svg>
    );
}
