import Svg, { Path } from 'react-native-svg';

export default function PlusIcon() {
    return (
        <Svg width={20} height={20} viewBox='0 0 24 24'>
            <Path d='M5 12h14M12 5v14' stroke='#FFFFFF' strokeWidth={3.2} strokeLinecap='round' />
        </Svg>
    );
}
