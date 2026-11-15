import Svg, { Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function ForwardIcon() {
    return (
        <Svg width={16} height={16} viewBox='0 0 24 24'>
            <Path
                d='M9 5 L16 12 L9 19'
                fill='none'
                stroke={colors.actionText}
                strokeWidth={3}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}
