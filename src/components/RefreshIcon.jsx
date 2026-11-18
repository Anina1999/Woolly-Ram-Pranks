import Svg, { Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function RefreshIcon({ size = 20, color = colors.textOnPrimary }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Path
                d='M20 12a8 8 0 1 1-2.4-5.7M20 4v5h-5'
                fill='none'
                stroke={color}
                strokeWidth={2.6}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}
