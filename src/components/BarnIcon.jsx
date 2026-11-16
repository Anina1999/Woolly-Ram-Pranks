import Svg, { Circle, Path, Rect } from 'react-native-svg';

export default function BarnIcon() {
    return (
        <Svg width={44} height={44} viewBox='0 0 44 44'>
            <Rect x={6} y={18} width={22} height={16} fill='#A83A2C' />
            <Path d='M3 19 L17 8 L31 19 Z' fill='#5B4636' />
            <Circle cx={35} cy={30} r={6} fill='#E7C66A' />
        </Svg>
    );
}
