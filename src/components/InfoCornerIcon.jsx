import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function InfoCornerIcon() {
    return (
        <Svg width={44} height={44} viewBox='0 0 44 44'>
            <Path d='M0 0 H44 V44 Z' fill={colors.detailsCorner} />
            <Path d='M32 11 V16' stroke={colors.detailsCornerIcon} strokeWidth={2} strokeLinecap='round' />
            <Circle cx={32} cy={8} r={1.3} fill={colors.detailsCornerIcon} />
        </Svg>
    );
}
