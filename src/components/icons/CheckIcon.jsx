import Svg, { Path } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function CheckIcon() {
    return (
        <Svg width={18} height={18} viewBox='0 0 24 24'>
            <Path
                d='M5 12.5 L10 17 L19 7'
                fill='none'
                stroke={colors.textOnPrimary}
                strokeWidth={3.5}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}
