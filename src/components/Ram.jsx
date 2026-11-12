import Svg, { Circle, Defs, Ellipse, G, LinearGradient, Path, RadialGradient, Stop } from 'react-native-svg';

const WOOL_COLORS = {
    '#E04436': { light: '#5E5868', middle: '#27232C', dark: '#0D0B0F', sheen: '#9A94A8' },
    '#3B7DDD': { light: '#F0C48E', middle: '#C98A48', dark: '#7E4B1E', sheen: '#FBE0BC' },
    '#F2C12E': { light: '#A6765A', middle: '#6E432A', dark: '#3A2014', sheen: '#D0A688' },
};

const LEG_OFFSETS = {
    idle: { frontLeft: 0, backLeft: 0, backRight: 0, frontRight: 0 },
    walk1: { frontLeft: -3, backLeft: 2, backRight: 2, frontRight: -3 },
    walk3: { frontLeft: 2, backLeft: -3, backRight: -3, frontRight: 2 },
};

export default function Ram({ color, pose, size }) {
    const wool = WOOL_COLORS[color];
    const legs = LEG_OFFSETS[pose];
    const woolId = 'ramWool' + color.slice(1);
    const woolFill = `url(#${woolId})`;

    return (
        <Svg width={size} height={size} viewBox='0 0 120 120'>
            <Defs>
                <RadialGradient id={woolId} cx='0.35' cy='0.25' r='0.85'>
                    <Stop offset='0' stopColor={wool.light} />
                    <Stop offset='0.55' stopColor={wool.middle} />
                    <Stop offset='1' stopColor={wool.dark} />
                </RadialGradient>
                <LinearGradient id='ramSnout' x1='0' y1='0' x2='0' y2='1'>
                    <Stop offset='0' stopColor='#4A4550' />
                    <Stop offset='1' stopColor='#1C1A20' />
                </LinearGradient>
                <LinearGradient id='ramHorn' x1='0' y1='0' x2='1' y2='1'>
                    <Stop offset='0' stopColor='#EAD8AC' />
                    <Stop offset='0.55' stopColor='#BCA274' />
                    <Stop offset='1' stopColor='#8A7350' />
                </LinearGradient>
                <RadialGradient id='ramShadow' cx='0.5' cy='0.5' r='0.5'>
                    <Stop offset='0' stopColor='#2E4A3A' stopOpacity='0.5' />
                    <Stop offset='1' stopColor='#2E4A3A' stopOpacity='0' />
                </RadialGradient>
            </Defs>
            <Ellipse cx={54} cy={103} rx={42} ry={7} fill='url(#ramShadow)' />
            <G transform='translate(46, 102)'>
                <G transform={`translate(0, ${legs.backLeft})`}>
                    <Path d='M-9 -26 L-9 -3' stroke='#221E21' strokeWidth={5.5} strokeLinecap='round' />
                    <Ellipse cx={-9} cy={-2} rx={3.6} ry={2.4} fill='#4A3828' />
                </G>
                <G transform={`translate(0, ${legs.backRight})`}>
                    <Path d='M12 -26 L13 -3' stroke='#221E21' strokeWidth={5.5} strokeLinecap='round' />
                    <Ellipse cx={13} cy={-2} rx={3.6} ry={2.4} fill='#4A3828' />
                </G>
                <Circle cx={-27} cy={-44} r={5.5} fill={woolFill} />
                <Ellipse cx={0} cy={-38} rx={25} ry={15} fill={woolFill} />
                <G fill={woolFill}>
                    <Circle cx={-22} cy={-40} r={8} />
                    <Circle cx={-13} cy={-50} r={9} />
                    <Circle cx={1} cy={-53} r={9} />
                    <Circle cx={14} cy={-50} r={8.5} />
                    <Circle cx={23} cy={-40} r={8} />
                    <Circle cx={-16} cy={-28} r={8} />
                    <Circle cx={0} cy={-25} r={8.5} />
                    <Circle cx={15} cy={-28} r={8} />
                </G>
                <G fill='none' stroke={wool.sheen} strokeWidth={1.3} strokeLinecap='round' opacity={0.85}>
                    <Path d='M-17 -53 a4 4 0 0 1 6 -2' />
                    <Path d='M-3 -57 a4 4 0 0 1 6 -1.5' />
                </G>
                <G fill='none' stroke='#000000' strokeWidth={1.1} strokeLinecap='round' opacity={0.35}>
                    <Path d='M-10 -36 a3.5 3.5 0 0 0 5 1.6' />
                    <Path d='M6 -34 a3.5 3.5 0 0 0 5 1.6' />
                    <Path d='M-4 -26 a3.5 3.5 0 0 0 5 1' />
                </G>
                <G transform={`translate(0, ${legs.frontLeft})`}>
                    <Path d='M-17 -26 L-18 -3' stroke='#2A2426' strokeWidth={5.5} strokeLinecap='round' />
                    <Ellipse cx={-18} cy={-2} rx={3.6} ry={2.4} fill='#4A3828' />
                </G>
                <G transform={`translate(0, ${legs.frontRight})`}>
                    <Path d='M19 -26 L20 -3' stroke='#2A2426' strokeWidth={5.5} strokeLinecap='round' />
                    <Ellipse cx={20} cy={-2} rx={3.6} ry={2.4} fill='#4A3828' />
                </G>
                <Path d='M24 -44 Q30 -50 32 -56' fill='none' stroke='#2A2426' strokeWidth={7} strokeLinecap='round' />
                <G fill={woolFill}>
                    <Circle cx={23} cy={-52} r={7.5} />
                    <Circle cx={28} cy={-57} r={7} />
                    <Circle cx={22} cy={-60} r={5.5} />
                </G>
                <Path d='M21 -52 Q28 -45 37 -54 L38 -49 Q29 -40 21.5 -47 Z' fill={color} />
                <Path d='M21.5 -47 Q29 -40 38 -49 L38 -47.4 Q29 -38.4 21.5 -45.4 Z' fill='#000000' opacity={0.22} />
                <Path d='M26 -45.6 L30 -35.6 L35 -47 Q30 -43.4 26 -45.6 Z' fill={color} />
                <Path d='M30 -43.8 L30 -35.6 L35 -47 Q32.4 -44.6 30 -43.8 Z' fill='#000000' opacity={0.2} />
                <G fill='#FFFFFF' opacity={0.75}>
                    <Circle cx={25} cy={-48} r={0.7} />
                    <Circle cx={31} cy={-47} r={0.7} />
                    <Circle cx={30.4} cy={-40} r={0.7} />
                </G>
                <Circle cx={21} cy={-49.6} r={2.3} fill={color} />
                <Path d='M20.2 -48.6 L16.4 -44.6 L19.6 -44 Z' fill={color} />
                <G transform='translate(26, 34)'>
                    <Circle cx={6} cy={-88} r={8} fill={woolFill} />
                    <G transform='translate(12, -98) scale(1.25) translate(-12, 98)'>
                        <Path
                            d='M8 -97.6 C11 -104.6 21 -105 23 -98.6 C24.2 -93.8 20.4 -91 17.6 -92.8 C15.8 -94.2 17 -96.8 19.2 -96.2'
                            fill='none'
                            stroke='url(#ramHorn)'
                            strokeWidth={4.2}
                            strokeLinecap='round'
                        />
                        <Path
                            d='M8 -97.6 C11 -104.6 21 -105 23 -98.6 C24.2 -93.8 20.4 -91 17.6 -92.8'
                            fill='none'
                            stroke='#7A6448'
                            strokeWidth={4.2}
                            strokeLinecap='round'
                            strokeDasharray='0.8 2.4'
                            opacity={0.5}
                        />
                        <Path
                            d='M10.4 -101.4 C13.4 -103.6 18 -103.6 20.6 -101.2'
                            fill='none'
                            stroke='#F6E9C8'
                            strokeWidth={1.1}
                            strokeLinecap='round'
                            opacity={0.8}
                        />
                    </G>
                    <Ellipse cx={-1} cy={-94} rx={6} ry={2.4} transform='rotate(18 -1 -94)' fill='#2A262C' />
                    <Ellipse cx={-1.4} cy={-94.2} rx={3.8} ry={1.2} transform='rotate(18 -1.4 -94.2)' fill='#7A4A50' />
                    <Path
                        d='M2 -91 Q2.6 -99.4 11 -99 Q17.6 -98.6 22.2 -93 L26 -88.4 Q29.4 -84.6 28.2 -81.4 Q26.6 -78 21.6 -78.4 Q14 -79.4 8.6 -81.8 Q2 -85 2 -91 Z'
                        fill='url(#ramSnout)'
                        stroke='#000000'
                        strokeWidth={0.6}
                    />
                    <Path
                        d='M7 -97 Q14 -98.6 20.4 -93.6 L24.6 -88.6'
                        fill='none'
                        stroke='#FFFFFF'
                        strokeWidth={1.4}
                        strokeLinecap='round'
                        opacity={0.14}
                    />
                    <Path
                        d='M8.6 -85.6 Q12 -83 16.4 -83.6'
                        fill='none'
                        stroke='#000000'
                        strokeWidth={0.8}
                        strokeLinecap='round'
                        opacity={0.45}
                    />
                    <Path
                        d='M24.8 -85.8 Q27.8 -87 28.6 -84.4 Q28.4 -82.6 26.6 -82.8 Q24.4 -83.4 24.8 -85.8 Z'
                        fill='#6E4650'
                        stroke='#000000'
                        strokeWidth={0.5}
                    />
                    <Ellipse cx={26.9} cy={-84.9} rx={0.9} ry={0.5} transform='rotate(-20 26.9 -84.9)' fill='#000000' />
                    <Ellipse
                        cx={21.2}
                        cy={-93.6}
                        rx={2.7}
                        ry={3.4}
                        transform='rotate(-10 21.2 -93.6)'
                        fill='#FFFFFF'
                        stroke='#000000'
                        strokeWidth={0.7}
                    />
                    <Circle cx={22.2} cy={-93.2} r={1.6} fill='#000000' />
                    <Circle cx={22.7} cy={-94} r={0.55} fill='#FFFFFF' />
                    <Path
                        d='M18.8 -95.6 Q21.4 -98.4 23.8 -95.8'
                        fill='none'
                        stroke='#000000'
                        strokeWidth={1}
                        strokeLinecap='round'
                    />
                    <Ellipse
                        cx={14.6}
                        cy={-92.6}
                        rx={3.5}
                        ry={4}
                        transform='rotate(-10 14.6 -92.6)'
                        fill='#FFFFFF'
                        stroke='#000000'
                        strokeWidth={0.7}
                    />
                    <Circle cx={16} cy={-92.2} r={2} fill='#000000' />
                    <Circle cx={16.7} cy={-93.1} r={0.7} fill='#FFFFFF' />
                    <Path
                        d='M10.8 -94.4 Q14.2 -98.2 18.4 -95.2'
                        fill='none'
                        stroke='#000000'
                        strokeWidth={1.1}
                        strokeLinecap='round'
                    />
                    <Path
                        d='M26.6 -82.8 L26.5 -81.4 M22.2 -81.6 Q24.6 -79.2 26.5 -81.4 M21.7 -82.4 Q21.6 -81.4 22.5 -81.1'
                        fill='none'
                        stroke='#000000'
                        strokeWidth={1}
                        strokeLinecap='round'
                    />
                    <Circle cx={3} cy={-97.4} r={3} fill={woolFill} />
                    <Circle cx={6.4} cy={-99.6} r={3.4} fill={woolFill} />
                    <Circle cx={10.6} cy={-100.4} r={2.6} fill={woolFill} />
                    <G transform='translate(-2, -96) scale(1.3) translate(2, 96)'>
                        <Path
                            d='M5 -99 C2 -104.6 -6.4 -104 -7.8 -97.4 C-8.8 -92 -4.4 -89.4 -1.6 -91.4 C0.4 -93 -0.6 -95.8 -3 -95.4'
                            fill='none'
                            stroke='url(#ramHorn)'
                            strokeWidth={4.2}
                            strokeLinecap='round'
                        />
                        <Path
                            d='M5 -99 C2 -104.6 -6.4 -104 -7.8 -97.4 C-8.8 -92 -4.4 -89.4 -1.6 -91.4'
                            fill='none'
                            stroke='#7A6448'
                            strokeWidth={4.2}
                            strokeLinecap='round'
                            strokeDasharray='0.8 2.4'
                            opacity={0.5}
                        />
                        <Path
                            d='M3 -101.8 C0 -103.6 -4.4 -102.8 -6 -99.6'
                            fill='none'
                            stroke='#F6E9C8'
                            strokeWidth={1.1}
                            strokeLinecap='round'
                            opacity={0.9}
                        />
                    </G>
                </G>
            </G>
        </Svg>
    );
}
