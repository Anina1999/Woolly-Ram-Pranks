import Svg, { Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function PlusIcon({ size = 20, color = colors.textOnPrimary }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24'>
            <Path d='M5 12h14M12 5v14' stroke={color} strokeWidth={3.2} strokeLinecap='round' />
        </Svg>
    );
}
