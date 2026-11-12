import Svg, { Path, Rect } from 'react-native-svg';

export default function LockIcon() {
    return (
        <Svg width={18} height={18} viewBox='0 0 24 24'>
            <Rect x={5} y={10} width={14} height={11} rx={2} fill='#F3E4C3' />
            <Path
                d='M8 10V7a4 4 0 0 1 8 0v3'
                fill='none'
                stroke='#F3E4C3'
                strokeWidth={2.5}
            />
        </Svg>
    );
}
