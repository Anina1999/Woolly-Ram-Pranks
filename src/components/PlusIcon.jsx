import Svg, { Path } from 'react-native-svg';

import { colors } from '../styles/theme';

export default function PlusIcon() {
    return (
        <Svg width={20} height={20} viewBox='0 0 24 24'>
            <Path d='M5 12h14M12 5v14' stroke={colors.white} strokeWidth={3.2} strokeLinecap='round' />
        </Svg>
    );
}
