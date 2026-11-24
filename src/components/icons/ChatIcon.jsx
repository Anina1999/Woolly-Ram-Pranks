import Svg, { Path } from 'react-native-svg';

import { colors } from '../../styles/theme';

export default function ChatIcon({ size = 16, color = colors.actionText }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Path
                d='M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z'
                fill='none'
                stroke={color}
                strokeWidth={2.4}
                strokeLinejoin='round'
            />
        </Svg>
    );
}
