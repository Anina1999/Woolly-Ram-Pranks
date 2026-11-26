import Svg, { Path, Rect } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function MailIcon({ size = 20, color = colors.fieldIcon }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Rect x={3} y={5.5} width={18} height={13} rx={2.5} fill='none' stroke={color} strokeWidth={2} />
            <Path
                d='M4 7.5 L12 13 L20 7.5'
                fill='none'
                stroke={color}
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}
