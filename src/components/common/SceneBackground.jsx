import { Circle, Defs, Ellipse, G, LinearGradient, Path, RadialGradient, Rect, Stop } from 'react-native-svg';

import SceneCanvas from './SceneCanvas';

const SCENE_COLORS = {
    skyTop: '#7FC4EA',
    skyMiddle: '#CDEAF0',
    skyBottom: '#EAF2D6',
    sunCenter: '#FFF7D6',
    sunGlow: '#FFF0C0',
    cloud: '#FFFFFF',
    hill: '#A9C95B',
    pine: '#2F5E3A',
    pineLight: '#3D7344',

    barnWall: '#A83A2C',
    barnShade: '#7A2A20',
    barnRoof: '#5B4636',
    roofMoss: '#6E8B3D',
    barnTrim: '#F3E4C3',
    doorSill: '#5E3A1E',

    meadowTop: '#93C656',
    meadowMiddle: '#6FB24A',
    meadowBottom: '#3F7E33',
    dryGrass: '#A9C95B',
    deepGrass: '#4E8F3A',
    sunlitGrass: '#8CC152',
    fenceRail: '#8E7457',
    fencePost: '#7D6B58',
    roadTop: '#D2AC7A',
    roadBottom: '#B98B58',
    wheelRut: '#A47C50',

    hay: '#E7C66A',
    hayLine: '#BC9A3E',
    shadow: '#2E4A3A',
    bushDark: '#3E7A35',
    bush: '#4E8F3A',
    bushLight: '#5FA445',
    bushShine: '#8CC152',

    yellowFlower: '#F7E26B',
    whiteFlower: '#FFFFFF',
    pinkFlower: '#E98BB4',
    purpleFlower: '#9B8AE0',
};

const FENCE_POSTS = [-564, -514, -464, -414, -364, -314, -264, -214, -164, -114, -64, -14, 10, 60, 110, 160];

export default function SceneBackground({ scrimColor, scrimTop = 0 }) {
    return (
        <SceneCanvas>
            <Defs>
                <LinearGradient id='sky' x1='0' y1='0' x2='0' y2='800' gradientUnits='userSpaceOnUse'>
                    <Stop offset='0' stopColor={SCENE_COLORS.skyTop} />
                    <Stop offset='0.75' stopColor={SCENE_COLORS.skyMiddle} />
                    <Stop offset='1' stopColor={SCENE_COLORS.skyBottom} />
                </LinearGradient>
                <RadialGradient id='sun' cx='29' cy='17' r='270' gradientUnits='userSpaceOnUse'>
                    <Stop offset='0' stopColor={SCENE_COLORS.sunCenter} />
                    <Stop offset='0.4' stopColor={SCENE_COLORS.sunGlow} stopOpacity='0.5' />
                    <Stop offset='1' stopColor={SCENE_COLORS.sunGlow} stopOpacity='0' />
                </RadialGradient>
                <LinearGradient id='meadow' x1='0' y1='360' x2='0' y2='800' gradientUnits='userSpaceOnUse'>
                    <Stop offset='0' stopColor={SCENE_COLORS.meadowTop} />
                    <Stop offset='0.5' stopColor={SCENE_COLORS.meadowMiddle} />
                    <Stop offset='1' stopColor={SCENE_COLORS.meadowBottom} />
                </LinearGradient>
                <LinearGradient id='road' x1='0' y1='372' x2='0' y2='800' gradientUnits='userSpaceOnUse'>
                    <Stop offset='0' stopColor={SCENE_COLORS.roadTop} />
                    <Stop offset='1' stopColor={SCENE_COLORS.roadBottom} />
                </LinearGradient>
            </Defs>

            <Rect x='-600' width='1560' height='1400' fill='url(#sky)' />
            <Rect x='-600' width='1560' height='420' fill='url(#sun)' />

            <G fill={SCENE_COLORS.cloud} opacity='0.9'>
                <Ellipse cx='250' cy='110' rx='60' ry='13' />
                <Ellipse cx='284' cy='99' rx='34' ry='15' />
                <Ellipse cx='70' cy='200' rx='50' ry='10' />
                <Ellipse cx='96' cy='191' rx='26' ry='12' />
            </G>

            <Path
                d='M-600 330 L0 330 Q90 286 180 312 T360 300 L960 300 V420 H-600 Z'
                fill={SCENE_COLORS.hill}
                opacity='0.8'
            />
            <Path
                d='M-72 340 l12 -42 l12 42 l12 -54 l12 54 l12 -38 l12 38 l12 -46 l12 46 l10 -58 l12 58 l12 -40 l12 40 l10 -52 l12 52 l12 -38 l10 38 l12 -56 l12 56 l10 -36 l10 36 V380 H-72 Z'
                fill={SCENE_COLORS.pine}
            />
            <Path
                d='M-52 350 l14 -40 l12 40 l14 -30 l12 30 l14 -36 l12 36 l12 -44 l12 44 l12 -30 l10 30 l14 -42 l12 42 V380 H-52 Z'
                fill={SCENE_COLORS.pineLight}
            />
            <Path
                d='M282 336 l12 -50 l12 50 l10 -40 l12 40 l12 -56 l12 56 l12 -50 l12 50 l12 -42 l12 42 l12 -54 l12 54 l12 -40 l12 40 V380 H282 Z'
                fill={SCENE_COLORS.pine}
            />

            <G>
                <Rect x='196' y='300' width='92' height='56' fill={SCENE_COLORS.barnWall} />
                <Rect x='276' y='300' width='12' height='56' fill={SCENE_COLORS.barnShade} />
                <Path d='M186 304 L242 262 L298 304 Z' fill={SCENE_COLORS.barnRoof} />
                <Path
                    d='M196 296 Q214 282 230 288 Q246 276 262 286 L286 296 L250 270 L232 270 Z'
                    fill={SCENE_COLORS.roofMoss}
                    opacity='0.9'
                />
                <Rect x='226' y='318' width='30' height='38' fill={SCENE_COLORS.barnShade} />
                <Path
                    d='M227.5 319.5 L254.5 354.5 M254.5 319.5 L227.5 354.5'
                    stroke={SCENE_COLORS.barnTrim}
                    strokeWidth='2.5'
                    strokeLinecap='butt'
                />
                <Rect
                    x='226'
                    y='318'
                    width='30'
                    height='38'
                    fill='none'
                    stroke={SCENE_COLORS.barnTrim}
                    strokeWidth='2.5'
                />
                <Path d='M236 284 h12 v8 h-12 z' fill={SCENE_COLORS.barnTrim} />
            </G>

            <Path
                d='M-600 380 L0 380 Q120 352 220 368 T360 360 L960 360 V1400 H-600 Z'
                fill='url(#meadow)'
            />

            <G stroke={SCENE_COLORS.fenceRail} strokeWidth='3' strokeLinecap='round'>
                <Path d='M-600 382 H180' />
                <Path d='M-600 394 H180' />
            </G>
            <G fill={SCENE_COLORS.fencePost}>
                {FENCE_POSTS.map((x) => (
                    <Rect key={x} x={x} y='374' width='5' height='28' rx='1' />
                ))}
            </G>

            <G opacity='0.55'>
                <Ellipse cx='80' cy='470' rx='110' ry='26' fill={SCENE_COLORS.dryGrass} />
                <Ellipse cx='300' cy='560' rx='120' ry='30' fill={SCENE_COLORS.deepGrass} />
                <Ellipse cx='60' cy='680' rx='130' ry='30' fill={SCENE_COLORS.deepGrass} />
                <Ellipse cx='290' cy='440' rx='80' ry='18' fill={SCENE_COLORS.sunlitGrass} />
            </G>

            <Path
                d='M170 1400 L170 800 Q145.4 640 209.5 520 Q242.2 440 226 356 L256 356 Q277.8 440 250.5 520 Q194.6 640 230 800 L230 1400 Z'
                fill='url(#road)'
            />
            <Rect x='221' y='355' width='40' height='5' rx='1' fill={SCENE_COLORS.doorSill} />
            <G fill='none' stroke={SCENE_COLORS.wheelRut} strokeWidth='2.5' opacity='0.5'>
                <Path d='M185 1400 L185 800 Q157.7 640 219.7 520 Q229.5 495.2 234.5 470' />
                <Path d='M215 1400 L215 800 Q182.3 640 240.3 520 Q249.2 495.2 253.3 470' />
            </G>

            <G>
                <Circle cx='320' cy='420' r='20' fill={SCENE_COLORS.hay} />
                <Path
                    d='M320 420 m-13 0 a13 13 0 1 1 26 0 a9 9 0 1 1 -18 0 a5 5 0 1 1 10 0'
                    fill='none'
                    stroke={SCENE_COLORS.hayLine}
                    strokeWidth='2.5'
                />
                <Ellipse cx='330' cy='442' rx='20' ry='5' fill={SCENE_COLORS.shadow} opacity='0.3' />
            </G>

            <G>
                <Circle cx='40' cy='430' r='22' fill={SCENE_COLORS.bushDark} />
                <Circle cx='64' cy='424' r='20' fill={SCENE_COLORS.bush} />
                <Circle cx='52' cy='408' r='16' fill={SCENE_COLORS.bushLight} />
                <Circle cx='46' cy='402' r='6' fill={SCENE_COLORS.bushShine} opacity='0.8' />
            </G>

            <G fill={SCENE_COLORS.yellowFlower}>
                <Circle cx='30' cy='520' r='3' />
                <Circle cx='120' cy='560' r='3' />
                <Circle cx='300' cy='640' r='3' />
                <Circle cx='90' cy='740' r='3' />
                <Circle cx='330' cy='720' r='3' />
                <Circle cx='140' cy='470' r='3' />
            </G>
            <G fill={SCENE_COLORS.whiteFlower}>
                <Circle cx='60' cy='600' r='3' />
                <Circle cx='290' cy='500' r='3' />
                <Circle cx='20' cy='770' r='3' />
                <Circle cx='340' cy='780' r='3' />
            </G>
            <G fill={SCENE_COLORS.pinkFlower}>
                <Circle cx='110' cy='640' r='3' />
                <Circle cx='320' cy='590' r='3' />
                <Circle cx='150' cy='780' r='3' />
            </G>
            <G fill={SCENE_COLORS.purpleFlower}>
                <Circle cx='40' cy='650' r='3' />
                <Circle cx='280' cy='760' r='3' />
            </G>

            {scrimColor && (
                <Rect x='-600' y={scrimTop} width='1560' height={1400 - scrimTop} fill={scrimColor} />
            )}
        </SceneCanvas>
    );
}
