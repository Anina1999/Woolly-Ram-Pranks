import Svg, { Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function BackIcon({ size = 22, color = colors.actionText }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Path
                d='M15 5 L8 12 L15 19'
                fill='none'
                stroke={color}
                strokeWidth={3}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}
