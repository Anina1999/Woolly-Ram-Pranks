import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function ErrorIcon({ size = 16 }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Circle cx={12} cy={12} r={10} fill={colors.errorIcon} />
            <Path
                d='M12 7v6M12 16.5v.5'
                stroke={colors.errorIconMark}
                strokeWidth={2.5}
                strokeLinecap='round'
            />
        </Svg>
    );
}
