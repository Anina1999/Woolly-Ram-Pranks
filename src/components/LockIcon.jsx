import Svg, { Path, Rect } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function LockIcon() {
    return (
        <Svg width={18} height={18} viewBox='0 0 24 24'>
            <Rect x={5} y={10} width={14} height={11} rx={2} fill={colors.textOnDark} />
            <Path
                d='M8 10V7a4 4 0 0 1 8 0v3'
                fill='none'
                stroke={colors.textOnDark}
                strokeWidth={2.5}
            />
        </Svg>
    );
}
