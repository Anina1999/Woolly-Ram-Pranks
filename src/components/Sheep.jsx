import Svg, { Circle, Defs, Ellipse, G, LinearGradient, Path, RadialGradient, Stop } from 'react-native-svg';

export default function Sheep({ size }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 120 120'>
            <Defs>
                <RadialGradient id='sheepWool' cx='0.35' cy='0.25' r='0.85'>
                    <Stop offset='0' stopColor='#FFFFFF' />
                    <Stop offset='0.55' stopColor='#EFEBE5' />
                    <Stop offset='1' stopColor='#C9C2B8' />
                </RadialGradient>
                <LinearGradient id='sheepSnout' x1='0' y1='0' x2='0' y2='1'>
                    <Stop offset='0' stopColor='#5E5866' />
                    <Stop offset='1' stopColor='#2E2A33' />
                </LinearGradient>
                <RadialGradient id='sheepShadow' cx='0.5' cy='0.5' r='0.5'>
                    <Stop offset='0' stopColor='#2E4A3A' stopOpacity='0.5' />
                    <Stop offset='1' stopColor='#2E4A3A' stopOpacity='0' />
                </RadialGradient>
            </Defs>
            <Ellipse cx={54} cy={103} rx={42} ry={7} fill='url(#sheepShadow)' />
            <G transform='translate(46, 102)'>
                <Path d='M-9 -26 L-9 -3' stroke='#36323C' strokeWidth={5.5} strokeLinecap='round' />
                <Ellipse cx={-9} cy={-2} rx={3.6} ry={2.4} fill='#1E1B22' />
                <Path d='M12 -26 L13 -3' stroke='#36323C' strokeWidth={5.5} strokeLinecap='round' />
                <Ellipse cx={13} cy={-2} rx={3.6} ry={2.4} fill='#1E1B22' />
                <Circle cx={-27} cy={-44} r={5.5} fill='url(#sheepWool)' />
                <Ellipse cx={0} cy={-38} rx={25} ry={15} fill='url(#sheepWool)' />
                <G fill='url(#sheepWool)'>
                    <Circle cx={-22} cy={-40} r={8} />
                    <Circle cx={-13} cy={-50} r={9} />
                    <Circle cx={1} cy={-53} r={9} />
                    <Circle cx={14} cy={-50} r={8.5} />
                    <Circle cx={23} cy={-40} r={8} />
                    <Circle cx={-16} cy={-28} r={8} />
                    <Circle cx={0} cy={-25} r={8.5} />
                    <Circle cx={15} cy={-28} r={8} />
                </G>
                <G fill='none' stroke='#FFFFFF' strokeWidth={1.3} strokeLinecap='round' opacity={0.9}>
                    <Path d='M-17 -53 a4 4 0 0 1 6 -2' />
                    <Path d='M-3 -57 a4 4 0 0 1 6 -1.5' />
                </G>
                <G fill='none' stroke='#CFC8BE' strokeWidth={1.1} strokeLinecap='round'>
                    <Path d='M-10 -36 a3.5 3.5 0 0 0 5 1.6' />
                    <Path d='M6 -34 a3.5 3.5 0 0 0 5 1.6' />
                    <Path d='M-4 -26 a3.5 3.5 0 0 0 5 1' />
                </G>
                <Path d='M-17 -26 L-18 -3' stroke='#3E3A44' strokeWidth={5.5} strokeLinecap='round' />
                <Ellipse cx={-18} cy={-2} rx={3.6} ry={2.4} fill='#1E1B22' />
                <Path d='M19 -26 L20 -3' stroke='#3E3A44' strokeWidth={5.5} strokeLinecap='round' />
                <Ellipse cx={20} cy={-2} rx={3.6} ry={2.4} fill='#1E1B22' />
                <Path d='M24 -44 Q30 -50 32 -56' fill='none' stroke='#3E3A44' strokeWidth={6.5} strokeLinecap='round' />
                <G transform='translate(26, 34)'>
                    <Ellipse cx={-1} cy={-90} rx={5} ry={2.2} transform='rotate(30 -1 -90)' fill='#3E3A44' />
                    <Circle cx={6} cy={-88} r={8} fill='url(#sheepWool)' />
                    <Path
                        d='M5 -95 Q20 -97 30 -89 Q34 -84 30 -79 Q18 -76 5 -80 Z'
                        fill='url(#sheepSnout)'
                        stroke='#1E1B22'
                        strokeWidth={0.6}
                    />
                    <Ellipse cx={28.5} cy={-84.5} rx={4.6} ry={4} fill='#4E4956' />
                    <Ellipse cx={31} cy={-86.4} rx={1.1} ry={0.7} fill='#1E1B22' />
                    <Ellipse cx={28.8} cy={-87.4} rx={0.9} ry={0.6} fill='#1E1B22' />
                    <Ellipse cx={22} cy={-82.6} rx={3} ry={1.5} fill='#E88A9A' opacity={0.55} />
                    <Ellipse cx={12} cy={-97} rx={5.4} ry={2.4} transform='rotate(-40 12 -97)' fill='#3E3A44' />
                    <Ellipse cx={12.2} cy={-97.2} rx={3.4} ry={1.3} transform='rotate(-40 12.2 -97.2)' fill='#E04A55' />
                    <G fill='#E8902C' stroke='#1E1B22' strokeWidth={0.7}>
                        <Circle cx={10} cy={-93} r={4.2} />
                        <Circle cx={17.5} cy={-94} r={3.6} />
                    </G>
                    <Circle cx={11.2} cy={-92.8} r={1.6} fill='#1E1B22' />
                    <Circle cx={18.6} cy={-93.8} r={1.4} fill='#1E1B22' />
                    <Circle cx={9.6} cy={-94} r={0.7} fill='#FFFFFF' />
                    <Circle cx={17} cy={-94.9} r={0.6} fill='#FFFFFF' />
                    <Path d='M5.8 -94.2 Q10 -96.4 14.2 -94.2 L14.2 -97.4 L5.8 -97.4 Z' fill='#46414C' />
                    <Path d='M13.9 -95 Q17.5 -97.2 21.1 -95 L21.1 -97.8 L13.9 -97.8 Z' fill='#46414C' />
                    <Path
                        d='M5.8 -94.2 Q10 -96.4 14.2 -94.2 M13.9 -95 Q17.5 -97.2 21.1 -95'
                        fill='none'
                        stroke='#1E1B22'
                        strokeWidth={0.8}
                    />
                    <Path
                        d='M20.6 -95.6 l1.6 -1.2 M19.6 -96.6 l1 -1.6 M13.2 -95 l1.2 -1.6'
                        stroke='#1E1B22'
                        strokeWidth={0.8}
                        strokeLinecap='round'
                    />
                    <Path
                        d='M17 -79.8 Q21.5 -77.6 26 -79.6'
                        fill='none'
                        stroke='#1E1B22'
                        strokeWidth={0.9}
                        strokeLinecap='round'
                    />
                    <Circle cx={4} cy={-97} r={4.2} fill='url(#sheepWool)' />
                    <Circle cx={8.5} cy={-99} r={3.4} fill='url(#sheepWool)' />
                    <Circle cx={0} cy={-95} r={3} fill='url(#sheepWool)' />
                    <G transform='translate(16, -101)'>
                        <G fill='#F2C12E' stroke='#D99A12' strokeWidth={0.4}>
                            <Circle cx={0} cy={-2.4} r={1.9} />
                            <Circle cx={2.3} cy={-0.7} r={1.9} />
                            <Circle cx={1.4} cy={2} r={1.9} />
                            <Circle cx={-1.4} cy={2} r={1.9} />
                            <Circle cx={-2.3} cy={-0.7} r={1.9} />
                        </G>
                        <Circle cx={0} cy={0} r={1.3} fill='#E07A20' />
                    </G>
                </G>
            </G>
        </Svg>
    );
}
