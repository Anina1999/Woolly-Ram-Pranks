import Svg, { Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function CrownIcon() {
    return (
        <Svg width={11} height={11} viewBox='0 0 24 24'>
            <Path d='M3 18 L5 7 L10 12 L12 5 L14 12 L19 7 L21 18 Z' fill={colors.text} />
        </Svg>
    );
}
