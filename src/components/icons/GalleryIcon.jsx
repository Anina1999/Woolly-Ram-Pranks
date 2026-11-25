import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function GalleryIcon({ size = 22, color = colors.textOnAccent }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Rect x={3.5} y={5} width={17} height={14} rx={2.5} fill='none' stroke={color} strokeWidth={2.2} />
            <Circle cx={9} cy={10} r={1.8} fill={color} />
            <Path
                d='M5 17 L10 12.5 L13 15 L16 12 L19.5 15.5'
                fill='none'
                stroke={color}
                strokeWidth={2.2}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}
