import Svg, { Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function PlayIcon() {
    return (
        <Svg width={22} height={22} viewBox='0 0 24 24'>
            <Path d='M7 4 L19 12 L7 20 Z' fill={colors.white} />
        </Svg>
    );
}
