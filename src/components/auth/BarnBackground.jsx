import { StyleSheet, View } from 'react-native';
import {
    Circle,
    ClipPath,
    Defs,
    Ellipse,
    G,
    LinearGradient,
    Path,
    RadialGradient,
    Rect,
    Stop,
    Text,
} from 'react-native-svg';

import Dog from '../characters/Dog';
import Shepherd from '../characters/Shepherd';
import SceneCanvas from '../common/SceneCanvas';

import { fonts } from '../../styles/theme';

const SCENE_COLORS = {
    barnWall: '#A83A2C',
    barnShade: '#7A2A20',
    barnSeam: '#7A2A20',
    barnTrim: '#F3E4C3',
    barnBeam: '#5B4636',
    stoneBand: '#8E7457',

    insideTop: '#0B0704',
    insideMiddle: '#160E08',
    insideBottom: '#24180E',
    lampGlow: '#FFC96B',
    eyes: '#F2C12E',
    insideText: '#FFE3A0',
    openDoor: '#A83A2C',

    doorTop: '#9E3628',
    doorBottom: '#B8432F',
    doorSeam: '#7A2A20',
    latch: '#3E2F24',
    rivet: '#BCA274',
    doorText: '#FFF6E0',
    doorTextEdge: '#5E1F16',

    meadowTop: '#93C656',
    meadowMiddle: '#6FB24A',
    meadowBottom: '#3F7E33',
    dryGrass: '#A9C95B',
    deepGrass: '#4E8F3A',
    sunlitGrass: '#8CC152',
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

const WALL_SEAMS = [-144, -120, -96, -72, -48, -24, 24, 48, 72, 288, 312, 336, 384, 408, 432, 456, 480, 504];

export default function BarnBackground({ door }) {
    const isDoorOpen = door === 'open';

    return (
        <>
            <SceneCanvas>
                <Defs>
                    <LinearGradient id='barnWall' x1='0' y1='0' x2='0' y2='1'>
                        <Stop offset='0' stopColor={SCENE_COLORS.barnShade} />
                        <Stop offset='0.35' stopColor={SCENE_COLORS.barnWall} />
                        <Stop offset='1' stopColor={SCENE_COLORS.barnWall} />
                    </LinearGradient>
                    <LinearGradient id='barnInside' x1='0' y1='0' x2='0' y2='1'>
                        <Stop offset='0' stopColor={SCENE_COLORS.insideTop} />
                        <Stop offset='0.7' stopColor={SCENE_COLORS.insideMiddle} />
                        <Stop offset='1' stopColor={SCENE_COLORS.insideBottom} />
                    </LinearGradient>
                    <RadialGradient id='barnGlow' cx='0.5' cy='0.5' r='0.5'>
                        <Stop offset='0' stopColor={SCENE_COLORS.lampGlow} stopOpacity='0.28' />
                        <Stop offset='1' stopColor={SCENE_COLORS.lampGlow} stopOpacity='0' />
                    </RadialGradient>
                    <LinearGradient id='barnDoor' x1='0' y1='0' x2='0' y2='1'>
                        <Stop offset='0' stopColor={SCENE_COLORS.doorTop} />
                        <Stop offset='1' stopColor={SCENE_COLORS.doorBottom} />
                    </LinearGradient>
                    <LinearGradient id='barnMeadow' x1='0' y1='206' x2='0' y2='800' gradientUnits='userSpaceOnUse'>
                        <Stop offset='0' stopColor={SCENE_COLORS.meadowTop} />
                        <Stop offset='0.5' stopColor={SCENE_COLORS.meadowMiddle} />
                        <Stop offset='1' stopColor={SCENE_COLORS.meadowBottom} />
                    </LinearGradient>
                    <LinearGradient id='barnRoad' x1='0' y1='200' x2='0' y2='830' gradientUnits='userSpaceOnUse'>
                        <Stop offset='0' stopColor={SCENE_COLORS.roadTop} />
                        <Stop offset='1' stopColor={SCENE_COLORS.roadBottom} />
                    </LinearGradient>
                    <RadialGradient id='barnShadow' cx='0.5' cy='0.5' r='0.5'>
                        <Stop offset='0' stopColor={SCENE_COLORS.shadow} stopOpacity='0.45' />
                        <Stop offset='1' stopColor={SCENE_COLORS.shadow} stopOpacity='0' />
                    </RadialGradient>
                    <ClipPath id='barnGroundClip'>
                        <Rect x='-600' y='213' width='1560' height='1187' />
                    </ClipPath>
                </Defs>

                <Rect x='-600' width='1560' height='230' fill='url(#barnWall)' />
                <G stroke={SCENE_COLORS.barnSeam} strokeWidth='2' opacity='0.7'>
                    {WALL_SEAMS.map((x) => (
                        <Path key={x} d={`M${x} 0 V214`} />
                    ))}
                </G>

                {isDoorOpen ? (
                    <G>
                        <Rect x='88' y='24' width='184' height='190' fill='url(#barnInside)' />
                        <Ellipse cx='180' cy='118' rx='96' ry='56' fill='url(#barnGlow)' />
                        <G fill={SCENE_COLORS.eyes} opacity='0.75'>
                            <Circle cx='112' cy='176' r='2' />
                            <Circle cx='120' cy='176' r='2' />
                            <Circle cx='244' cy='168' r='2' />
                            <Circle cx='252' cy='168' r='2' />
                            <Circle cx='150' cy='186' r='1.6' />
                            <Circle cx='157' cy='186' r='1.6' />
                        </G>
                        <G
                            fontFamily={fonts.display}
                            fontSize='28'
                            fill={SCENE_COLORS.insideText}
                            letterSpacing='0.5'
                            textAnchor='middle'
                        >
                            <Text x='180' y='112'>Welcome</Text>
                            <Text x='180' y='142'>back</Text>
                        </G>
                        <Rect
                            x='88'
                            y='24'
                            width='184'
                            height='190'
                            fill='none'
                            stroke={SCENE_COLORS.barnTrim}
                            strokeWidth='6'
                        />

                        <Path
                            d='M88 24 L34 40 V226 L88 214 Z'
                            fill={SCENE_COLORS.openDoor}
                            stroke={SCENE_COLORS.barnTrim}
                            strokeWidth='5'
                            strokeLinejoin='round'
                        />
                        <Path d='M34 40 L88 214 M88 24 L34 226' stroke={SCENE_COLORS.barnTrim} strokeWidth='4' />
                        <Path d='M34 128 L88 120' stroke={SCENE_COLORS.barnTrim} strokeWidth='4' />
                        <Path
                            d='M272 24 L326 40 V226 L272 214 Z'
                            fill={SCENE_COLORS.openDoor}
                            stroke={SCENE_COLORS.barnTrim}
                            strokeWidth='5'
                            strokeLinejoin='round'
                        />
                        <Path d='M326 40 L272 214 M272 24 L326 226' stroke={SCENE_COLORS.barnTrim} strokeWidth='4' />
                        <Path d='M326 128 L272 120' stroke={SCENE_COLORS.barnTrim} strokeWidth='4' />
                    </G>
                ) : (
                    <G>
                        <Rect x='88' y='24' width='92' height='190' fill='url(#barnDoor)' />
                        <Rect x='180' y='24' width='92' height='190' fill='url(#barnDoor)' />
                        <G stroke={SCENE_COLORS.doorSeam} strokeWidth='2' opacity='0.6'>
                            <Path d='M111 24 V214' />
                            <Path d='M134 24 V214' />
                            <Path d='M157 24 V214' />
                            <Path d='M203 24 V214' />
                            <Path d='M226 24 V214' />
                            <Path d='M249 24 V214' />
                        </G>
                        <G fill='none' stroke={SCENE_COLORS.barnTrim} strokeWidth='5' strokeLinejoin='round'>
                            <Rect x='88' y='24' width='92' height='190' />
                            <Rect x='180' y='24' width='92' height='190' />
                            <Path d='M88 119 H272' />
                            <Path d='M88 119 L180 214 M180 119 L88 214' />
                            <Path d='M180 119 L272 214 M272 119 L180 214' />
                        </G>
                        <Rect
                            x='84'
                            y='20'
                            width='192'
                            height='198'
                            fill='none'
                            stroke={SCENE_COLORS.barnBeam}
                            strokeWidth='3'
                        />
                        <Rect x='164' y='160' width='32' height='10' rx='3' fill={SCENE_COLORS.latch} />
                        <Circle cx='170' cy='165' r='2' fill={SCENE_COLORS.rivet} />
                        <Circle cx='190' cy='165' r='2' fill={SCENE_COLORS.rivet} />

                        <G
                            fontFamily={fonts.display}
                            fontSize='25'
                            letterSpacing='1.5'
                            textAnchor='middle'
                            transform='rotate(-3 180 76)'
                        >
                            <Text
                                x='180'
                                y='84'
                                fill={SCENE_COLORS.doorTextEdge}
                                stroke={SCENE_COLORS.doorTextEdge}
                                strokeWidth='3'
                                strokeLinejoin='round'
                            >
                                Join the Flock
                            </Text>
                            <Text x='180' y='84' fill={SCENE_COLORS.doorText}>
                                Join the Flock
                            </Text>
                        </G>
                    </G>
                )}

                <Rect x='80' y='10' width='200' height='14' rx='2' fill={SCENE_COLORS.barnBeam} />
                <Path d='M80 10 H280' stroke={SCENE_COLORS.barnTrim} strokeWidth='3' />

                <Rect x='-600' y='206' width='1560' height='12' fill={SCENE_COLORS.stoneBand} />
                <Path
                    d='M-600 214 L0 214 Q90 206 180 212 T360 210 L960 210 V1400 H-600 Z'
                    fill='url(#barnMeadow)'
                />
                <G opacity='0.55'>
                    <Ellipse cx='290' cy='300' rx='110' ry='24' fill={SCENE_COLORS.dryGrass} />
                    <Ellipse cx='60' cy='420' rx='120' ry='28' fill={SCENE_COLORS.deepGrass} />
                    <Ellipse cx='300' cy='580' rx='120' ry='30' fill={SCENE_COLORS.deepGrass} />
                    <Ellipse cx='70' cy='700' rx='130' ry='30' fill={SCENE_COLORS.deepGrass} />
                    <Ellipse cx='300' cy='740' rx='80' ry='18' fill={SCENE_COLORS.sunlitGrass} />
                </G>

                <G clipPath='url(#barnGroundClip)'>
                    <Path
                        d='M180 200 Q206 330 170 470 Q140 600 196 830 L196 1400'
                        fill='none'
                        stroke='url(#barnRoad)'
                        strokeWidth='46'
                    />
                    <Path d='M162 213 L204 213 L206 236 L158 236 Z' fill={SCENE_COLORS.roadTop} />
                    <Path
                        d='M184 1400 L184 800 Q128 600 158 470'
                        fill='none'
                        stroke={SCENE_COLORS.wheelRut}
                        strokeWidth='3'
                        opacity='0.55'
                    />
                    <Path
                        d='M208 1400 L208 800 Q152 600 182 470'
                        fill='none'
                        stroke={SCENE_COLORS.wheelRut}
                        strokeWidth='3'
                        opacity='0.55'
                    />
                </G>

                <Ellipse cx='58' cy='230' rx='40' ry='7' fill='url(#barnShadow)' />
                <Ellipse cx='268' cy='230' rx='46' ry='7' fill='url(#barnShadow)' />

                <G>
                    <Circle cx='320' cy='694' r='22' fill={SCENE_COLORS.hay} />
                    <Path
                        d='M320 694 m-14 0 a14 14 0 1 1 28 0 a10 10 0 1 1 -20 0 a5 5 0 1 1 10 0'
                        fill='none'
                        stroke={SCENE_COLORS.hayLine}
                        strokeWidth='2.5'
                    />
                    <Ellipse cx='330' cy='718' rx='22' ry='5' fill={SCENE_COLORS.shadow} opacity='0.3' />
                </G>
                <G>
                    <Circle cx='30' cy='760' r='24' fill={SCENE_COLORS.bushDark} />
                    <Circle cx='58' cy='752' r='22' fill={SCENE_COLORS.bush} />
                    <Circle cx='44' cy='734' r='17' fill={SCENE_COLORS.bushLight} />
                    <Circle cx='38' cy='728' r='6' fill={SCENE_COLORS.bushShine} opacity='0.8' />
                </G>
                <G fill={SCENE_COLORS.yellowFlower}>
                    <Circle cx='20' cy='226' r='3' />
                    <Circle cx='340' cy='232' r='3' />
                    <Circle cx='110' cy='690' r='3' />
                    <Circle cx='260' cy='760' r='3' />
                    <Circle cx='90' cy='790' r='3' />
                </G>
                <G fill={SCENE_COLORS.whiteFlower}>
                    <Circle cx='146' cy='230' r='2.5' />
                    <Circle cx='250' cy='684' r='3' />
                    <Circle cx='340' cy='782' r='3' />
                    <Circle cx='120' cy='740' r='3' />
                </G>
                <G fill={SCENE_COLORS.pinkFlower}>
                    <Circle cx='232' cy='228' r='2.5' />
                    <Circle cx='276' cy='720' r='3' />
                    <Circle cx='96' cy='760' r='3' />
                </G>
                <G fill={SCENE_COLORS.purpleFlower}>
                    <Circle cx='60' cy='230' r='2.5' />
                    <Circle cx='290' cy='790' r='3' />
                    <Circle cx='130' cy='700' r='3' />
                </G>
            </SceneCanvas>
            <View style={styles.characters} pointerEvents='none'>
                <View style={styles.shepherd}>
                    <Shepherd size={92} />
                </View>
                <View style={styles.dog}>
                    <Dog pose='idle' size={110} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    characters: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '50%',
        width: 360,
        marginLeft: -180,
    },
    shepherd: {
        position: 'absolute',
        top: 86,
        left: 12,
    },
    dog: {
        position: 'absolute',
        top: 138,
        left: 214,
        transform: [{ scaleX: -1 }],
    },
});
