import Svg, { Circle, Defs, Ellipse, G, Path, RadialGradient, Rect, Stop, Text } from 'react-native-svg';

import { fonts } from '../../styles/theme';

export default function Dog({ size }) {
    const height = Math.round(size * 140 / 160);

    return (
        <Svg width={size} height={height} viewBox='0 0 160 140'>
            <Defs>
                <RadialGradient id='dogFur' gradientUnits='userSpaceOnUse' cx={50} cy={38} r={110}>
                    <Stop offset='0' stopColor='#B9844F' />
                    <Stop offset='0.45' stopColor='#8A5A30' />
                    <Stop offset='1' stopColor='#4E2F17' />
                </RadialGradient>
                <RadialGradient id='dogHead' gradientUnits='userSpaceOnUse' cx={120} cy={54} r={40}>
                    <Stop offset='0' stopColor='#B9844F' />
                    <Stop offset='0.6' stopColor='#8A5A30' />
                    <Stop offset='1' stopColor='#5A361B' />
                </RadialGradient>
                <RadialGradient id='dogShadow' cx='0.5' cy='0.5' r='0.5'>
                    <Stop offset='0' stopColor='#2E4A3A' stopOpacity='0.55' />
                    <Stop offset='1' stopColor='#2E4A3A' stopOpacity='0' />
                </RadialGradient>
            </Defs>
            <Ellipse cx={84} cy={122} rx={66} ry={13} fill='url(#dogShadow)' />
            <G transform='translate(0, 12)'>
                <G transform='rotate(40 26 62)'>
                    <Path d='M28 60 Q10 54 7 36 Q6 28 11 22 Q12 34 18 41 Q24 48 36 50 Z' fill='url(#dogFur)' />
                    <Path d='M11 22 Q6 28 7 34 Q10 30 12 27 Z' fill='#F4EDE0' />
                </G>
                <Path
                    d='M20 70 Q18 48 40 40 Q62 32 86 36 Q110 38 120 54 Q126 72 118 90 Q114 98 102 99 Q66 103 34 96 Q20 90 20 70 Z'
                    fill='url(#dogFur)'
                />
                <Path d='M44 44 Q56 38 66 44 Q70 54 60 58 Q48 60 44 52 Z' fill='#F4EDE0' />
                <Path d='M30 66 Q38 60 46 66 Q48 76 40 80 Q30 80 30 72 Z' fill='#F4EDE0' />
                <Path d='M78 60 Q92 54 102 62 Q104 74 94 80 l-3 5 l-3 -5 l-4 6 l-3 -6 Q74 72 78 60 Z' fill='#F4EDE0' />
                <Ellipse cx={60} cy={86} rx={44} ry={8} fill='#3A2210' opacity={0.25} />
                <G fill='none' stroke='#D9A672' strokeWidth={1.6} strokeLinecap='round' opacity={0.7}>
                    <Path d='M70 42 q10 -3 20 1' />
                    <Path d='M30 58 q6 -8 14 -10' />
                    <Path d='M106 50 q6 4 8 10' />
                </G>
                <G fill='none' stroke='#3E2512' strokeWidth={1.4} strokeLinecap='round' opacity={0.55}>
                    <Path d='M40 82 q2 8 0 14' />
                    <Path d='M58 82 q2 8 -1 14' />
                    <Path d='M78 84 q2 8 0 12' />
                    <Path d='M104 80 q2 8 -1 14' />
                </G>
                <Path d='M60 94 Q90 100 116 84' fill='none' stroke='#BFE3F2' strokeWidth={2} opacity={0.3} />
                <Ellipse cx={34} cy={94} rx={16} ry={9} fill='#7A4E2C' />
                <Ellipse cx={22} cy={100} rx={10} ry={5} fill='#F4EDE0' />
                <Rect x={60} y={94} width={30} height={10} rx={5} fill='#6B4426' />
                <Ellipse cx={62} cy={99} rx={6} ry={5} fill='#E9DFCC' />
                <Rect x={98} y={96} width={44} height={11} rx={5.5} fill='#7A4E2C' />
                <Rect x={108} y={104} width={40} height={11} rx={5.5} fill='#8A5A30' />
                <Ellipse cx={141} cy={101} rx={7} ry={5.5} fill='#F4EDE0' />
                <Ellipse cx={147} cy={109.5} rx={7} ry={5.5} fill='#F4EDE0' />
                <Path
                    d='M138 99 v4 M141 98.5 v4.5 M144 99 v4'
                    stroke='#C9BBA2'
                    strokeWidth={0.9}
                    strokeLinecap='round'
                />
                <G transform='translate(-2, 6) rotate(8 126 70)'>
                    <Path d='M102 54 Q118 52 128 70 Q132 90 124 100 Q112 104 104 98 Q98 80 102 54 Z' fill='url(#dogFur)' />
                    <Path d='M142 50 Q158 52 159 70 Q157 80 150 76 Q148 64 138 54 Z' fill='#4E2F17' />
                    <Path
                        d='M126 46 Q106 46 104 64 Q104 82 118 90 Q128 94 140 90 Q152 82 150 64 Q148 46 126 46 Z'
                        fill='url(#dogHead)'
                    />
                    <Path
                        d='M110 86 Q125 97 142 88'
                        fill='none'
                        stroke='#B8322A'
                        strokeWidth={5.5}
                        strokeLinecap='round'
                    />
                    <Path
                        d='M110 86 Q125 97 142 88'
                        fill='none'
                        stroke='#7E2416'
                        strokeWidth={1.2}
                        strokeDasharray='2 4'
                        opacity={0.7}
                    />
                    <Path d='M126 48 Q122 58 124 72 Q128 76 132 72 Q134 58 130 48 Z' fill='#F4EDE0' />
                    <Ellipse cx={135} cy={79} rx={13} ry={9.5} fill='#F4EDE0' />
                    <Ellipse cx={135} cy={84} rx={11} ry={4} fill='#D8CBB3' opacity={0.6} />
                    <Circle cx={125} cy={98} r={5} fill='#C9CED6' stroke='#8E959F' strokeWidth={1.2} />
                    <Circle cx={123.5} cy={96.5} r={1.4} fill='#FFFFFF' opacity={0.9} />
                    <Path d='M125 92 v2' stroke='#8E959F' strokeWidth={1.4} />
                    <Path d='M108 51 Q93 58 95 84 Q101 93 109 84 Q111 68 115 55 Z' fill='#5E3A1E' />
                    <Path
                        d='M106 60 Q99 70 100 82'
                        fill='none'
                        stroke='#7A4E2C'
                        strokeWidth={1.4}
                        strokeLinecap='round'
                        opacity={0.7}
                    />
                    <G fill='none' stroke='#2A1408' strokeWidth={1.5} strokeLinecap='round'>
                        <Path d='M116 65 q3 2.5 6 0' />
                        <Path d='M134 63 q3 2.5 6 0' />
                    </G>
                    <Path
                        d='M109 57 Q112 46 125 44.5 Q140 44 147 53 Q144 57.5 140 55.5 Q137 60 132.5 56.5 Q128.5 60.5 125 56.5 Q121 60 117.5 56 Q113.5 59.5 109 57 Z'
                        fill='#6B4426'
                    />
                    <G fill='none' stroke='#A8743F' strokeWidth={1.2} strokeLinecap='round' opacity={0.8}>
                        <Path d='M118 49 Q121 53 120 57' />
                        <Path d='M127 47.5 Q129 52 128 56' />
                        <Path d='M136 48.5 Q139 52 139 55' />
                    </G>
                    <Ellipse cx={143} cy={74} rx={5.4} ry={3.8} fill='#14100E' />
                    <Ellipse cx={141.5} cy={72.8} rx={1.8} ry={1} fill='#8E8E9C' />
                    <Path
                        d='M128 85 Q136 89 144 83'
                        fill='none'
                        stroke='#3A2210'
                        strokeWidth={1.4}
                        strokeLinecap='round'
                    />
                </G>
            </G>
            <G fontFamily={fonts.display} fill='#FFFFFF' stroke='#2E2117' strokeWidth={0.8}>
                <Text x={148} y={38} fontSize={14}>z</Text>
                <Text x={140} y={26} fontSize={11}>z</Text>
                <Text x={152} y={18} fontSize={9}>z</Text>
            </G>
            <G fill='#F7D24A' stroke='#B9851A' strokeWidth={0.7}>
                <Path d='M112 34 l1.4 2.8 3.1 0.5 -2.3 2.1 0.6 3.1 -2.8 -1.5 -2.8 1.5 0.6 -3.1 -2.3 -2.1 3.1 -0.5 Z' />
                <Path d='M128 28 l1.2 2.4 2.6 0.4 -1.9 1.8 0.5 2.6 -2.4 -1.3 -2.4 1.3 0.5 -2.6 -1.9 -1.8 2.6 -0.4 Z' />
            </G>
        </Svg>
    );
}
