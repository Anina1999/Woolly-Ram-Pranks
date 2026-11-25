import Svg, { Path } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function LogOutIcon({ size = 20, color = colors.dangerSecondaryText }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Path
                d='M10 4 H5 V20 H10 M15 8 L20 12 L15 16 M20 12 H9'
                fill='none'
                stroke={color}
                strokeWidth={2.4}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}
