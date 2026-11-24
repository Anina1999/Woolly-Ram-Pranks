import Svg, { Path } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function SendIcon() {
    return (
        <Svg width={20} height={20} viewBox='0 0 24 24'>
            <Path
                d='M4 12 L20 4 L14 20 L11 13 Z'
                fill={colors.textOnPrimary}
                stroke={colors.textOnPrimary}
                strokeWidth={2}
                strokeLinejoin='round'
            />
        </Svg>
    );
}
