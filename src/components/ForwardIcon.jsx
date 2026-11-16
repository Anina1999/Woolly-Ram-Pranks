import Svg, { Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function ForwardIcon({ size = 16, color = colors.actionText }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Path
                d='M9 5 L16 12 L9 19'
                fill='none'
                stroke={color}
                strokeWidth={3}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}
