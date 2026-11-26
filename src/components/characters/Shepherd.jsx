import Svg, { Circle, Defs, Ellipse, G, LinearGradient, Path, RadialGradient, Stop } from 'react-native-svg';

export default function Shepherd({ size }) {
    const height = Math.round(size * 1.6);

    return (
        <Svg width={size} height={height} viewBox='0 0 100 160'>
            <Defs>
                <LinearGradient id='shepherdJacket' gradientUnits='userSpaceOnUse' x1={26} y1={56} x2={76} y2={112}>
                    <Stop offset='0' stopColor='#9C7A54' />
                    <Stop offset='0.55' stopColor='#7A5A3C' />
                    <Stop offset='1' stopColor='#5A3F28' />
                </LinearGradient>
                <LinearGradient id='shepherdTrousers' x1='0' y1='0' x2='1' y2='1'>
                    <Stop offset='0' stopColor='#B84A34' />
                    <Stop offset='1' stopColor='#7E2A1E' />
                </LinearGradient>
                <RadialGradient id='shepherdSkin' cx='0.4' cy='0.3' r='0.8'>
                    <Stop offset='0' stopColor='#F8DCC4' />
                    <Stop offset='1' stopColor='#D9A688' />
                </RadialGradient>
                <RadialGradient id='shepherdBeard' gradientUnits='userSpaceOnUse' cx={48} cy={38} r={40}>
                    <Stop offset='0' stopColor='#FFFFFF' />
                    <Stop offset='0.6' stopColor='#F1EEE7' />
                    <Stop offset='1' stopColor='#CFC9BD' />
                </RadialGradient>
                <RadialGradient id='shepherdShadow' cx='0.5' cy='0.5' r='0.5'>
                    <Stop offset='0' stopColor='#2E4A3A' stopOpacity='0.55' />
                    <Stop offset='1' stopColor='#2E4A3A' stopOpacity='0' />
                </RadialGradient>
            </Defs>
            <Ellipse cx={52} cy={150} rx={36} ry={7} fill='url(#shepherdShadow)' />

            <Path d='M31 104 L46 104 L45 140 Q38 142 32 140 Z' fill='url(#shepherdTrousers)' />
            <Path d='M35 118 Q38 121 42 118' fill='none' stroke='#6A2218' strokeWidth={1} opacity={0.7} />
            <Ellipse cx={38} cy={145} rx={10.5} ry={5} fill='#1E1A1A' />
            <Ellipse cx={35} cy={143.5} rx={4} ry={1.5} fill='#4A4448' />
            <Path d='M51 104 L67 104 L66 141 Q59 143 52 141 Z' fill='url(#shepherdTrousers)' />
            <Path d='M55 119 Q59 122 63 119' fill='none' stroke='#6A2218' strokeWidth={1} opacity={0.7} />
            <Ellipse cx={61} cy={147} rx={11} ry={5} fill='#252020' />
            <Ellipse cx={58} cy={145.5} rx={4.2} ry={1.5} fill='#4E4850' />

            <Path d='M27 68 Q28 58 42 56 L62 56 Q74 58 74 70 L75 106 Q52 113 26 107 Z' fill='url(#shepherdJacket)' />
            <Path d='M26 104 Q52 110 75 103 L75 108 Q52 115 26 109 Z' fill='#4A3424' />
            <Path d='M52 62 L53 108' stroke='#3E2A1A' strokeWidth={1.3} opacity={0.7} />
            <G fill='#2E2117'>
                <Circle cx={54.6} cy={76} r={1.3} />
                <Circle cx={55} cy={88} r={1.3} />
                <Circle cx={55.2} cy={99} r={1.3} />
            </G>
            <Path d='M60 88 h10 v7 q-5 1.6 -10 0 Z' fill='#5A3F28' />
            <Path
                d='M30 70 Q28 86 29 102'
                fill='none'
                stroke='#B89670'
                strokeWidth={1.6}
                strokeLinecap='round'
                opacity={0.6}
            />
            <Path d='M73 76 L74 102' stroke='#BFE3F2' strokeWidth={1.3} opacity={0.3} />

            <Path
                d='M33 64 Q30 80 42 88 Q50 92 56 88'
                fill='none'
                stroke='#6B4E33'
                strokeWidth={9}
                strokeLinecap='round'
            />
            <Circle cx={57} cy={87.5} r={4.2} fill='url(#shepherdSkin)' />

            <G fill='url(#shepherdBeard)'>
                <Circle cx={31} cy={33} r={8.5} />
                <Circle cx={29} cy={24} r={6.5} />
                <Circle cx={80} cy={31} r={7.5} />
                <Circle cx={78} cy={22} r={5.5} />
            </G>
            <Ellipse cx={55} cy={27} rx={17} ry={15} fill='url(#shepherdSkin)' />
            <Ellipse cx={49} cy={18} rx={5} ry={2.6} fill='#FFF3E8' opacity={0.7} />
            <G fill='url(#shepherdBeard)'>
                <Circle cx={38} cy={50} r={10} />
                <Circle cx={49} cy={58} r={11} />
                <Circle cx={62} cy={58} r={11} />
                <Circle cx={72} cy={49} r={9.5} />
                <Circle cx={35} cy={40} r={8} />
                <Circle cx={76} cy={39} r={8} />
                <Circle cx={56} cy={65} r={9} />
                <Circle cx={42} cy={62} r={7} />
                <Circle cx={69} cy={62} r={7} />
            </G>
            <G fill='none' stroke='#D3CEC3' strokeWidth={1} strokeLinecap='round'>
                <Path d='M40 52 a4 4 0 0 0 6 2' />
                <Path d='M52 60 a4 4 0 0 0 6 2' />
                <Path d='M64 55 a4 4 0 0 0 6 1' />
                <Path d='M54 68 a3.5 3.5 0 0 0 5 1' />
                <Path d='M30 28 a3.5 3.5 0 0 0 4 3' />
                <Path d='M77 30 a3.5 3.5 0 0 1 -4 3' />
            </G>
            <Ellipse cx={56} cy={38} rx={13} ry={7} fill='url(#shepherdSkin)' />
            <G fill='none' stroke='#2E2117' strokeWidth={1.6} strokeLinecap='round'>
                <Path d='M48.5 36.6 Q51 38 53.5 36.6' />
                <Path d='M59 36.6 Q61.5 38 64 36.6' />
            </G>
            <Ellipse cx={51} cy={37.6} rx={1.3} ry={1} fill='#2E2117' />
            <Ellipse cx={61.5} cy={37.6} rx={1.3} ry={1} fill='#2E2117' />
            <G fill='#FFFFFF' stroke='#D3CEC3' strokeWidth={0.6}>
                <Path d='M43 33 Q48 28 55 31.5 Q49 35 43 33 Z' />
                <Path d='M57.5 31.5 Q64 28 70 33 Q63 35 57.5 31.5 Z' />
                <Path d='M42 47 Q49 41.5 56.5 45.5 Q64 41.5 71 47 Q66 52.5 56.5 49 Q47 52.5 42 47 Z' />
            </G>
            <Ellipse cx={56.5} cy={43} rx={5.2} ry={4.3} fill='#E89A86' />
            <Ellipse cx={55} cy={41.6} rx={1.6} ry={1} fill='#FBD2C4' />

            <Path d='M81 58 L78 148' stroke='#8A6238' strokeWidth={3.4} strokeLinecap='round' />
            <Path
                d='M81 58 Q82 47 74.5 47.5 Q70 48.5 71.5 53.5'
                fill='none'
                stroke='#7A5530'
                strokeWidth={3.4}
                strokeLinecap='round'
            />
            <Path d='M80.4 68 L79.8 80' stroke='#B48A5C' strokeWidth={1} strokeLinecap='round' />
            <Path
                d='M70 62 Q78 70 80 86'
                fill='none'
                stroke='#6B4E33'
                strokeWidth={9}
                strokeLinecap='round'
            />
            <Path d='M71 64 Q76 70 78 78' fill='none' stroke='#9C7A54' strokeWidth={1.3} opacity={0.6} />
            <Circle cx={80.5} cy={89} r={4.4} fill='url(#shepherdSkin)' />
        </Svg>
    );
}
