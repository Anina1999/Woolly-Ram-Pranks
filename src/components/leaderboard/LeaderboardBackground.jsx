import { Circle, Defs, Ellipse, G, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

import SceneCanvas from '../common/SceneCanvas';

const SCENE_COLORS = {
    skyTop: '#3E86AE',
    skyBottom: '#9ED0DE',
    cloud: '#FFFFFF',
    farHill: '#8CC152',
    nearHill: '#7DBB4C',
    groundTop: '#6DB34E',
    groundBottom: '#4E9440',
    grassPatch: '#5FA445',

    hayLight: '#F3D27A',
    hayMiddle: '#E2B44E',
    hayDark: '#B9852E',
    hayOutline: '#9A6B22',
    hayStraw: '#A87A26',
    hayShine: '#FBE8A8',

    woodOutline: '#5E3A1E',
    rail: '#8A5A34',
    post: '#A06B3E',
    archShine: '#B07A4A',
};

const FENCE_POSTS = [
    -562, -510, -458, -406, -354, -302, -250, -198, -146, -94, -42, 10, 62, 114,
    270, 322, 374, 426, 478, 530, 582, 634, 686, 738, 790, 842, 894, 946,
];

export default function LeaderboardBackground() {
    return (
        <SceneCanvas>
            <Defs>
                <LinearGradient id='sky' x1='0' y1='0' x2='0' y2='800' gradientUnits='userSpaceOnUse'>
                    <Stop offset='0' stopColor={SCENE_COLORS.skyTop} />
                    <Stop offset='1' stopColor={SCENE_COLORS.skyBottom} />
                </LinearGradient>
                <LinearGradient id='ground' x1='0' y1='185' x2='0' y2='820' gradientUnits='userSpaceOnUse'>
                    <Stop offset='0' stopColor={SCENE_COLORS.groundTop} />
                    <Stop offset='1' stopColor={SCENE_COLORS.groundBottom} />
                </LinearGradient>
                <LinearGradient id='hay' x1='0' y1='0' x2='0' y2='1'>
                    <Stop offset='0' stopColor={SCENE_COLORS.hayLight} />
                    <Stop offset='0.6' stopColor={SCENE_COLORS.hayMiddle} />
                    <Stop offset='1' stopColor={SCENE_COLORS.hayDark} />
                </LinearGradient>
            </Defs>

            <Rect x='-600' width='1560' height='1400' fill='url(#sky)' />

            <G fill={SCENE_COLORS.cloud} opacity='0.55'>
                <Ellipse cx='70' cy='90' rx='34' ry='10' />
                <Ellipse cx='92' cy='82' rx='22' ry='12' />
                <Ellipse cx='282' cy='68' rx='30' ry='9' />
                <Ellipse cx='300' cy='61' rx='18' ry='10' />
            </G>

            <Path
                d='M-600 150 L0 150 C60 122 120 132 180 144 C240 156 300 126 360 136 L960 136 V220 H-600 Z'
                fill={SCENE_COLORS.farHill}
            />
            <Path
                d='M-600 168 L0 168 C80 152 150 162 220 170 C280 176 320 162 360 164 L960 164 V230 H-600 Z'
                fill={SCENE_COLORS.nearHill}
            />

            <G transform='translate(250 126)'>
                <Path
                    d='M0 40 C0 14 14 0 34 0 C54 0 68 14 68 40 Z'
                    fill='url(#hay)'
                    stroke={SCENE_COLORS.hayOutline}
                    strokeWidth='1.5'
                />
                <Path
                    d='M14 34 l4 -7 M26 26 l3 -8 M40 26 l-2 -8 M54 33 l-4 -7'
                    stroke={SCENE_COLORS.hayStraw}
                    strokeWidth='1.4'
                    strokeLinecap='round'
                />
                <Path
                    d='M20 10 Q34 3 48 10'
                    fill='none'
                    stroke={SCENE_COLORS.hayShine}
                    strokeWidth='2'
                    strokeLinecap='round'
                />
            </G>

            <Path
                d='M-600 190 L0 190 C90 180 180 186 270 192 C310 195 340 192 360 190 L960 190 V1400 H-600 Z'
                fill='url(#ground)'
            />
            <G fill={SCENE_COLORS.grassPatch}>
                <Ellipse cx='60' cy='230' rx='40' ry='6' />
                <Ellipse cx='200' cy='245' rx='52' ry='7' />
                <Ellipse cx='310' cy='226' rx='34' ry='5' />
            </G>

            <G transform='translate(-24 116)'>
                <Path
                    d='M0 78 C0 28 24 0 58 0 C92 0 116 28 116 78 Z'
                    fill='url(#hay)'
                    stroke={SCENE_COLORS.hayOutline}
                    strokeWidth='2'
                />
                <Path
                    d='M18 66 l6 -10 M34 52 l4 -11 M52 44 l1 -12 M70 46 l-3 -11 M88 56 l-5 -10 M100 68 l-6 -9 M44 72 l3 -9 M64 70 l-2 -9'
                    stroke={SCENE_COLORS.hayStraw}
                    strokeWidth='1.8'
                    strokeLinecap='round'
                />
                <Path
                    d='M32 18 Q58 4 84 18'
                    fill='none'
                    stroke={SCENE_COLORS.hayShine}
                    strokeWidth='2.6'
                    strokeLinecap='round'
                />
            </G>
            <G transform='translate(286 130)'>
                <Path
                    d='M0 64 C0 22 20 0 46 0 C74 0 94 22 94 64 Z'
                    fill='url(#hay)'
                    stroke={SCENE_COLORS.hayOutline}
                    strokeWidth='2'
                />
                <Path
                    d='M14 54 l5 -9 M28 42 l3 -10 M44 36 l1 -10 M60 40 l-3 -10 M76 52 l-5 -9 M38 58 l2 -8 M56 58 l-2 -8'
                    stroke={SCENE_COLORS.hayStraw}
                    strokeWidth='1.8'
                    strokeLinecap='round'
                />
                <Path
                    d='M26 14 Q46 3 68 14'
                    fill='none'
                    stroke={SCENE_COLORS.hayShine}
                    strokeWidth='2.4'
                    strokeLinecap='round'
                />
            </G>

            <G stroke={SCENE_COLORS.woodOutline} strokeWidth='2' strokeLinejoin='round'>
                <Rect x='-600' y='162' width='734' height='7' rx='2' fill={SCENE_COLORS.rail} />
                <Rect x='-600' y='180' width='734' height='7' rx='2' fill={SCENE_COLORS.rail} />
                <Rect x='226' y='162' width='734' height='7' rx='2' fill={SCENE_COLORS.rail} />
                <Rect x='226' y='180' width='734' height='7' rx='2' fill={SCENE_COLORS.rail} />
                <G fill={SCENE_COLORS.post}>
                    {FENCE_POSTS.map((x) => (
                        <Path key={x} d={`M${x} 152 l5 -5 l5 5 V200 H${x} Z`} />
                    ))}
                </G>
            </G>

            <G strokeLinecap='round' fill='none'>
                <Path d='M134 160 Q180 120 226 160' stroke={SCENE_COLORS.woodOutline} strokeWidth='14' />
                <Path d='M134 160 Q180 120 226 160' stroke={SCENE_COLORS.rail} strokeWidth='9' />
                <Path d='M146 152 Q180 130 214 152' stroke={SCENE_COLORS.archShine} strokeWidth='2' opacity='0.8' />
            </G>
            <G stroke={SCENE_COLORS.woodOutline} strokeWidth='2'>
                <Rect x='127' y='154' width='14' height='48' rx='2' fill={SCENE_COLORS.post} />
                <Rect x='219' y='154' width='14' height='48' rx='2' fill={SCENE_COLORS.post} />
                <Circle cx='134' cy='151' r='6' fill={SCENE_COLORS.rail} />
                <Circle cx='226' cy='151' r='6' fill={SCENE_COLORS.rail} />
            </G>
        </SceneCanvas>
    );
}
