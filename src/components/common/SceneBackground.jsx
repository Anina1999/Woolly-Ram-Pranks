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
    hillBush: '#8DBE63',

    treeTrunk: '#6B4A30',
    treeDark: '#3E7A35',
    tree: '#4E8F3A',
    treeLight: '#6FB24A',
    treeShine: '#B9DC7A',
    smallTreeDark: '#447F38',
    smallTree: '#559640',
    smallTreeLight: '#79BA52',
    smallTreeShine: '#C2E085',
    pine: '#3B7D45',
    pineDark: '#2F6B3A',
    pineShine: '#6BAA5C',

    barnWallTop: '#B8432F',
    barnWallBottom: '#A33828',
    barnPlank: '#8E3024',
    barnSide: '#7A2A20',
    barnSideLine: '#5E1F17',
    barnWindow: '#8FB9CF',
    barnTrim: '#F3E4C3',
    barnDoor: '#7A2A20',
    roofTop: '#6E5646',
    roofSide: '#58443A',
    roofLine: '#3E2F24',
    roofEdge: '#4A3A30',
    loftInside: '#4A1A12',
    loftHay: '#E7C66A',
    foundation: '#9C8E7C',
    foundationSide: '#7E7262',
    cupola: '#B8432F',
    vaneBall: '#F2C12E',
    doorSill: '#5E3A1E',

    meadowTop: '#93C656',
    meadowMiddle: '#6FB24A',
    meadowBottom: '#3F7E33',
    dryGrass: '#A9C95B',
    deepGrass: '#4E8F3A',
    sunlitGrass: '#8CC152',
    fenceRail: '#8E7457',
    fencePost: '#7D6B58',
    gatePost: '#6A5846',
    gateCap: '#8E7457',
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

const FENCE_POSTS = [
    -562, -510, -458, -406, -354, -302, -250, -198, -146, -94, -42, -11, 10, 62, 114, 166,
    314, 366, 418, 470, 522, 574, 626, 678, 730, 782, 834, 886, 938,
];

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
                <LinearGradient id='barn' x1='0' y1='258.5' x2='0' y2='356' gradientUnits='userSpaceOnUse'>
                    <Stop offset='0' stopColor={SCENE_COLORS.barnWallTop} />
                    <Stop offset='1' stopColor={SCENE_COLORS.barnWallBottom} />
                </LinearGradient>
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
            <G fill={SCENE_COLORS.hillBush} opacity='0.9'>
                <Circle cx='-6' cy='322' r='22' />
                <Circle cx='22' cy='314' r='20' />
                <Circle cx='48' cy='320' r='18' />
                <Circle cx='74' cy='312' r='22' />
                <Circle cx='104' cy='318' r='18' />
                <Circle cx='130' cy='322' r='16' />
                <Circle cx='160' cy='326' r='14' />
                <Circle cx='292' cy='318' r='16' />
                <Circle cx='316' cy='308' r='20' />
                <Circle cx='342' cy='312' r='22' />
                <Circle cx='366' cy='318' r='18' />
            </G>
            <G fill={SCENE_COLORS.hillBush} opacity='0.9'>
                <Rect x='-600' y='318' width='780' height='30' />
                <Rect x='284' y='312' width='676' height='36' />
            </G>

            <G>
                <Path d='M26 374 L27 340.2 L33 340.2 L34 374 Z' fill={SCENE_COLORS.treeTrunk} />
                <Path
                    d='M30 348 L20.9 336.3 M30 350.6 L37.8 338.9'
                    stroke={SCENE_COLORS.treeTrunk}
                    strokeWidth='3'
                    strokeLinecap='round'
                />
                <G fill={SCENE_COLORS.treeDark}>
                    <Circle cx='13.9' cy='331.1' r='16.1' />
                    <Circle cx='46.1' cy='330.3' r='16.6' />
                    <Circle cx='30' cy='334.5' r='18.2' />
                </G>
                <G fill={SCENE_COLORS.tree}>
                    <Circle cx='20.9' cy='320.7' r='17.7' />
                    <Circle cx='39.9' cy='321.5' r='17.2' />
                    <Circle cx='30' cy='312.9' r='16.1' />
                    <Circle cx='30' cy='325.9' r='19.5' />
                </G>
                <G fill={SCENE_COLORS.treeLight}>
                    <Circle cx='19.1' cy='316.8' r='8.8' />
                    <Circle cx='28.7' cy='308.5' r='7.8' />
                    <Circle cx='11.8' cy='325.9' r='5.7' />
                </G>
                <G fill={SCENE_COLORS.treeShine} opacity='0.8'>
                    <Circle cx='17' cy='313.7' r='2.6' />
                    <Circle cx='26.9' cy='304.3' r='2.1' />
                </G>
            </G>

            <G>
                <Rect x='83' y='364' width='6' height='16' rx='1.5' fill={SCENE_COLORS.treeTrunk} />
                <Path
                    d='M71.7 315 Q81 289.2 86 268 Q91 289.2 100.3 315 Q86 322 71.7 315 Z'
                    fill={SCENE_COLORS.pine}
                />
                <Path
                    d='M74.3 313 Q81.4 291.5 86 271 Q85.3 296.2 83.1 316 Q78.8 317 74.3 313 Z'
                    fill={SCENE_COLORS.pineShine}
                    opacity='0.55'
                />
                <Path
                    d='M65.8 340.5 Q78.9 315.7 86 295.4 Q93.1 315.7 106.2 340.5 Q86 347.5 65.8 340.5 Z'
                    fill={SCENE_COLORS.pine}
                />
                <Path
                    d='M69.5 338.5 Q79.6 318 86 298.4 Q85 322.5 82 341.5 Q75.9 342.5 69.5 338.5 Z'
                    fill={SCENE_COLORS.pineShine}
                    opacity='0.55'
                />
                <Path
                    d='M60 366 Q76.9 342.3 86 322.9 Q95.1 342.3 112 366 Q86 373 60 366 Z'
                    fill={SCENE_COLORS.pineDark}
                />
                <Path
                    d='M64.7 364 Q77.7 344.4 86 325.9 Q84.7 348.8 80.8 367 Q73 368 64.7 364 Z'
                    fill={SCENE_COLORS.pineShine}
                    opacity='0.55'
                />
            </G>

            <G>
                <Path d='M136 370 L137 344 L143 344 L144 370 Z' fill={SCENE_COLORS.treeTrunk} />
                <Path
                    d='M140 350 L133 341 M140 352 L146 343'
                    stroke={SCENE_COLORS.treeTrunk}
                    strokeWidth='3'
                    strokeLinecap='round'
                />
                <G fill={SCENE_COLORS.smallTreeDark}>
                    <Circle cx='127.6' cy='337' r='12.4' />
                    <Circle cx='152.4' cy='336.4' r='12.8' />
                    <Circle cx='140' cy='339.6' r='14' />
                </G>
                <G fill={SCENE_COLORS.smallTree}>
                    <Circle cx='133' cy='329' r='13.6' />
                    <Circle cx='147.6' cy='329.6' r='13.2' />
                    <Circle cx='140' cy='323' r='12.4' />
                    <Circle cx='140' cy='333' r='15' />
                </G>
                <G fill={SCENE_COLORS.smallTreeLight}>
                    <Circle cx='131.6' cy='326' r='6.8' />
                    <Circle cx='139' cy='319.6' r='6' />
                    <Circle cx='126' cy='333' r='4.4' />
                </G>
                <G fill={SCENE_COLORS.smallTreeShine} opacity='0.8'>
                    <Circle cx='130' cy='323.6' r='2' />
                    <Circle cx='137.6' cy='316.4' r='1.6' />
                </G>
            </G>

            <G>
                <Rect x='175' y='358' width='6' height='16' rx='1.5' fill={SCENE_COLORS.treeTrunk} />
                <Path
                    d='M169.8 328.8 Q175.1 313 178 300 Q180.9 313 186.2 328.8 Q178 335.8 169.8 328.8 Z'
                    fill={SCENE_COLORS.pine}
                />
                <Path
                    d='M171.2 326.8 Q175.4 314.4 178 303 Q177.6 317.3 176.3 329.8 Q173.9 330.8 171.2 326.8 Z'
                    fill={SCENE_COLORS.pineShine}
                    opacity='0.55'
                />
                <Path
                    d='M166.4 344.4 Q173.9 329.2 178 316.8 Q182.1 329.2 189.6 344.4 Q178 351.4 166.4 344.4 Z'
                    fill={SCENE_COLORS.pine}
                />
                <Path
                    d='M168.5 342.4 Q174.3 330.6 178 319.8 Q177.4 333.4 175.7 345.4 Q172.2 346.4 168.5 342.4 Z'
                    fill={SCENE_COLORS.pineShine}
                    opacity='0.55'
                />
                <Path
                    d='M163 360 Q172.8 345.5 178 333.6 Q183.2 345.5 193 360 Q178 367 163 360 Z'
                    fill={SCENE_COLORS.pineDark}
                />
                <Path
                    d='M165.7 358 Q173.2 346.8 178 336.6 Q177.2 349.4 175 361 Q170.5 362 165.7 358 Z'
                    fill={SCENE_COLORS.pineShine}
                    opacity='0.55'
                />
            </G>

            <G>
                <Rect x='303' y='364' width='6' height='16' rx='1.5' fill={SCENE_COLORS.treeTrunk} />
                <Path
                    d='M291.7 311.9 Q301 284.5 306 262 Q311 284.5 320.3 311.9 Q306 318.9 291.7 311.9 Z'
                    fill={SCENE_COLORS.pine}
                />
                <Path
                    d='M294.3 309.9 Q301.4 287 306 265 Q305.3 292 303.1 312.9 Q298.9 313.9 294.3 309.9 Z'
                    fill={SCENE_COLORS.pineShine}
                    opacity='0.55'
                />
                <Path
                    d='M285.9 339 Q298.9 312.6 306 291.1 Q313.1 312.6 326.1 339 Q306 346 285.9 339 Z'
                    fill={SCENE_COLORS.pine}
                />
                <Path
                    d='M289.5 337 Q299.6 315 306 294.1 Q305 319.8 302 340 Q295.9 341 289.5 337 Z'
                    fill={SCENE_COLORS.pineShine}
                    opacity='0.55'
                />
                <Path
                    d='M280 366 Q296.9 340.8 306 320.2 Q315.1 340.8 332 366 Q306 373 280 366 Z'
                    fill={SCENE_COLORS.pineDark}
                />
                <Path
                    d='M284.7 364 Q297.7 343.1 306 323.2 Q304.7 347.7 300.8 367 Q293 368 284.7 364 Z'
                    fill={SCENE_COLORS.pineShine}
                    opacity='0.55'
                />
            </G>

            <G>
                <Path d='M342 372 L343 340.8 L349 340.8 L350 372 Z' fill={SCENE_COLORS.treeTrunk} />
                <Path
                    d='M346 348 L337.6 337.2 M346 350.4 L353.2 339.6'
                    stroke={SCENE_COLORS.treeTrunk}
                    strokeWidth='3'
                    strokeLinecap='round'
                />
                <G fill={SCENE_COLORS.treeDark}>
                    <Circle cx='331.1' cy='332.4' r='14.9' />
                    <Circle cx='360.9' cy='331.7' r='15.4' />
                    <Circle cx='346' cy='335.5' r='16.8' />
                </G>
                <G fill={SCENE_COLORS.tree}>
                    <Circle cx='337.6' cy='322.8' r='16.3' />
                    <Circle cx='355.1' cy='323.5' r='15.8' />
                    <Circle cx='346' cy='315.6' r='14.9' />
                    <Circle cx='346' cy='327.6' r='18' />
                </G>
                <G fill={SCENE_COLORS.treeLight}>
                    <Circle cx='335.9' cy='319.2' r='8.2' />
                    <Circle cx='344.8' cy='311.5' r='7.2' />
                    <Circle cx='329.2' cy='327.6' r='5.3' />
                </G>
                <G fill={SCENE_COLORS.treeShine} opacity='0.8'>
                    <Circle cx='334' cy='316.3' r='2.4' />
                    <Circle cx='343.1' cy='307.7' r='1.9' />
                </G>
            </G>

            <G>
                <Path d='M277 302 L299 295 L299 349 L277 356 Z' fill={SCENE_COLORS.barnSide} />
                <Path
                    d='M283 300.1 L283 354.1 M289 298.2 L289 352.2 M295 296.3 L295 350.3'
                    stroke={SCENE_COLORS.barnSideLine}
                    strokeWidth='1.2'
                    opacity='0.6'
                />
                <Path
                    d='M283 318 L292 315 L292 327 L283 330 Z'
                    fill={SCENE_COLORS.barnWindow}
                    stroke={SCENE_COLORS.barnTrim}
                    strokeWidth='1.5'
                />
                <Path
                    d='M205 356 L205 304 L210.5 279 L241 258.5 L271.5 279 L277 304 L277 356 Z'
                    fill='url(#barn)'
                />
                <Path
                    d='M211 287.5 L211 356 M217 279.4 L217 356 M223 275.6 L223 356 M259 275.6 L259 356 M265 279.4 L265 356 M271 287.5 L271 356 M229 271.7 L229 316 M235 267.9 L235 316 M241 264 L241 316 M247 267.9 L247 316 M253 271.7 L253 316'
                    stroke={SCENE_COLORS.barnPlank}
                    strokeWidth='1.2'
                    opacity='0.45'
                />
                <Path d='M241 258 L272 278 L294 271 L263 251 Z' fill={SCENE_COLORS.roofTop} />
                <Path d='M272 278 L282 304 L304 297 L294 271 Z' fill={SCENE_COLORS.roofSide} />
                <Path
                    d='M248.8 263 L270.8 256 M256.5 268 L278.5 261 M264.2 273 L286.2 266 M274.5 284.5 L296.5 277.5 M277 291 L299 284 M279.5 297.5 L301.5 290.5'
                    stroke={SCENE_COLORS.roofLine}
                    strokeWidth='1'
                    opacity='0.55'
                />
                <Path d='M241 258 L263 251' stroke={SCENE_COLORS.roofLine} strokeWidth='4' strokeLinecap='round' />
                <Path
                    d='M200 305 L210 278 L241 257 L272 278 L282 305'
                    fill='none'
                    stroke={SCENE_COLORS.roofEdge}
                    strokeWidth='6'
                    strokeLinejoin='round'
                    strokeLinecap='round'
                />
                <Path
                    d='M206 302 L213.5 281 L241 263 L268.5 281 L276 302'
                    fill='none'
                    stroke={SCENE_COLORS.barnTrim}
                    strokeWidth='2.5'
                    strokeLinejoin='round'
                />
                <G fill={SCENE_COLORS.barnTrim}>
                    <Rect x='205' y='302' width='3' height='54' />
                    <Rect x='274' y='302' width='3' height='54' />
                </G>

                <Path d='M229 273 L241 265 L253 273 Z' fill={SCENE_COLORS.roofEdge} />
                <Rect x='233' y='274' width='16' height='17' fill={SCENE_COLORS.loftInside} />
                <Path d='M234 291 Q237 284 241 287 Q245 283 248 291 Z' fill={SCENE_COLORS.loftHay} />
                <Rect
                    x='233'
                    y='274'
                    width='16'
                    height='17'
                    fill='none'
                    stroke={SCENE_COLORS.barnTrim}
                    strokeWidth='2'
                />

                <Rect x='210' y='322' width='11' height='11' fill={SCENE_COLORS.barnWindow} />
                <Path d='M215.5 322 V333 M210 327.5 H221' stroke={SCENE_COLORS.barnTrim} strokeWidth='1.5' />
                <Rect
                    x='210'
                    y='322'
                    width='11'
                    height='11'
                    fill='none'
                    stroke={SCENE_COLORS.barnTrim}
                    strokeWidth='2'
                />
                <Rect x='209' y='333' width='13' height='2' fill={SCENE_COLORS.barnTrim} />

                <Rect x='261' y='322' width='11' height='11' fill={SCENE_COLORS.barnWindow} />
                <Path d='M266.5 322 V333 M261 327.5 H272' stroke={SCENE_COLORS.barnTrim} strokeWidth='1.5' />
                <Rect
                    x='261'
                    y='322'
                    width='11'
                    height='11'
                    fill='none'
                    stroke={SCENE_COLORS.barnTrim}
                    strokeWidth='2'
                />
                <Rect x='260' y='333' width='13' height='2' fill={SCENE_COLORS.barnTrim} />

                <Rect x='222' y='313' width='38' height='3' rx='1' fill={SCENE_COLORS.roofEdge} />
                <Rect x='226' y='318' width='30' height='38' fill={SCENE_COLORS.barnDoor} />
                <Path d='M241 318 V356' stroke={SCENE_COLORS.barnSideLine} strokeWidth='1.5' />
                <Path
                    d='M227.5 319.5 L254.5 354.5 M254.5 319.5 L227.5 354.5'
                    stroke={SCENE_COLORS.barnTrim}
                    strokeWidth='2.5'
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

                <Path d='M204 352 L278 352 L278 357 L204 357 Z' fill={SCENE_COLORS.foundation} />
                <Path d='M278 352 L299 345 L299 350 L278 357 Z' fill={SCENE_COLORS.foundationSide} />

                <Rect
                    x='246'
                    y='241.5'
                    width='12'
                    height='13'
                    fill={SCENE_COLORS.cupola}
                    stroke={SCENE_COLORS.barnTrim}
                    strokeWidth='1.5'
                />
                <Path
                    d='M248.5 244.5 H255.5 M248.5 247.5 H255.5 M248.5 250.5 H255.5'
                    stroke={SCENE_COLORS.barnSideLine}
                    strokeWidth='1.2'
                />
                <Path d='M243 242.5 L252 233.5 L261 242.5 Z' fill={SCENE_COLORS.roofEdge} />
                <Path
                    d='M252 233.5 V221.5 M245 225.5 H259 M255 222.5 L259 225.5 L255 228.5 M245 222.5 L247 225.5 L245 228.5'
                    fill='none'
                    stroke={SCENE_COLORS.roofLine}
                    strokeWidth='1.6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <Circle cx='252' cy='232.5' r='1.8' fill={SCENE_COLORS.vaneBall} />
            </G>

            <Path
                d='M-600 380 L0 380 Q120 352 220 368 T360 360 L960 360 V1400 H-600 Z'
                fill='url(#meadow)'
            />

            <G stroke={SCENE_COLORS.fenceRail} strokeWidth='3' strokeLinecap='round'>
                <Path d='M-600 382 H224' />
                <Path d='M-600 394 H224' />
                <Path d='M272 382 H960' />
                <Path d='M272 394 H960' />
            </G>
            <G fill={SCENE_COLORS.fencePost}>
                {FENCE_POSTS.map((x) => (
                    <Rect key={x} x={x} y='374' width='5' height='28' rx='1' />
                ))}
            </G>
            <G fill={SCENE_COLORS.gatePost}>
                <Rect x='220' y='366' width='7' height='38' rx='1.5' />
                <Rect x='269' y='366' width='7' height='38' rx='1.5' />
            </G>
            <G fill={SCENE_COLORS.gateCap}>
                <Rect x='218.5' y='364' width='10' height='4' rx='1.5' />
                <Rect x='267.5' y='364' width='10' height='4' rx='1.5' />
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
