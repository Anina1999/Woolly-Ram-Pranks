import Svg, { Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function BackIcon() {
    return (
        <Svg width={22} height={22} viewBox='0 0 24 24'>
            <Path
                d='M15 5 L8 12 L15 19'
                fill='none'
                stroke={colors.actionText}
                strokeWidth={3}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}
