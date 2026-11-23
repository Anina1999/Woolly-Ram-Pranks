import Svg, { Path, Rect } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function ClipboardIcon({ size = 15, color = colors.pasteText }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Rect x={5} y={4} width={14} height={17} rx={2.5} fill='none' stroke={color} strokeWidth={2.2} />
            <Rect
                x={8.5}
                y={2}
                width={7}
                height={4}
                rx={1.5}
                fill={colors.privateSurface}
                stroke={color}
                strokeWidth={2}
            />
            <Path d='M9 11h6M9 15h4' stroke={color} strokeWidth={2} strokeLinecap='round' />
        </Svg>
    );
}
