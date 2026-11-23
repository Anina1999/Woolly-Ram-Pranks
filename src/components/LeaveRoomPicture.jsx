import { StyleSheet, Text, View } from 'react-native';
import Svg, { Ellipse, Path, Rect } from 'react-native-svg';

import Ram from './characters/Ram';

import { fonts } from '../styles/theme';

export default function LeaveRoomPicture({ wool, bandana }) {
    return (
        <View style={styles.picture}>
            <Svg width={230} height={118} viewBox='0 0 230 118' style={styles.scene}>
                <Ellipse cx={115} cy={110} rx={112} ry={9} fill='#8CC152' />
                <Path
                    d='M10 108 l3 -7 l2 7 M40 110 l2 -6 l3 6 M196 109 l3 -7 l2 7 M220 110 l2 -5 l2 5'
                    fill='none'
                    stroke='#4F8A2E'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <Rect x={140} y={52} width={84} height={11} rx={3} fill='#B97E4C' stroke='#5E3A1E' strokeWidth={2.5} />
                <Rect x={140} y={78} width={84} height={11} rx={3} fill='#B97E4C' stroke='#5E3A1E' strokeWidth={2.5} />
                <Path
                    d='M146 42 l6 -8 l6 8 v66 h-12 Z'
                    fill='#C98B57'
                    stroke='#5E3A1E'
                    strokeWidth={2.5}
                    strokeLinejoin='round'
                />
                <Path
                    d='M204 42 l6 -8 l6 8 v66 h-12 Z'
                    fill='#C98B57'
                    stroke='#5E3A1E'
                    strokeWidth={2.5}
                    strokeLinejoin='round'
                />
                <Path
                    d='M150 50 v52 M208 50 v52'
                    stroke='#E2B07E'
                    strokeWidth={1.6}
                    strokeLinecap='round'
                    opacity={0.8}
                />
                <Path d='M128 30 Q156 -2 192 16' fill='none' stroke='#5E3A1E' strokeWidth={8} strokeLinecap='round' />
                <Path d='M128 30 Q156 -2 192 16' fill='none' stroke='#F2B33D' strokeWidth={4.5} strokeLinecap='round' />
                <Path
                    d='M186 4 L203 21 L180 26 Z'
                    fill='#F2B33D'
                    stroke='#5E3A1E'
                    strokeWidth={2.5}
                    strokeLinejoin='round'
                />
            </Svg>
            <View style={styles.ram}>
                <Ram wool={wool} bandana={bandana} pose='readyToLeave' size={118} />
            </View>
            <View style={styles.bubble}>
                <Svg width={40} height={40} viewBox='0 0 40 40'>
                    <Path
                        d='M20 2 a17 16 0 1 1 -8 30 L5 38 L8 29 a17 16 0 0 1 12 -27 Z'
                        transform='translate(40, 0) scale(-1, 1)'
                        fill='#FFFFFF'
                        stroke='#8A5A34'
                        strokeWidth={3}
                        strokeLinejoin='round'
                    />
                </Svg>
                <Text style={styles.question}>?</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    picture: {
        width: 230,
        height: 156,
    },
    scene: {
        position: 'absolute',
        top: 38,
        left: 0,
    },
    ram: {
        position: 'absolute',
        bottom: 2,
        left: 20,
    },
    bubble: {
        position: 'absolute',
        top: 0,
        left: 44,
        width: 40,
        height: 40,
    },
    question: {
        position: 'absolute',
        top: 2,
        left: 0,
        width: 40,
        textAlign: 'center',
        fontFamily: fonts.display,
        fontSize: 24,
        lineHeight: 30,
        color: '#C2412D',
    },
});
