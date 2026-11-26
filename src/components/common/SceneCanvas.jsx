import { Dimensions, StyleSheet, useWindowDimensions, View } from 'react-native';
import Svg from 'react-native-svg';

export default function SceneCanvas({ children }) {
    const { width } = useWindowDimensions();
    const height = Dimensions.get('screen').height;
    const left = (360 - width) / 2;

    return (
        <View style={[styles.background, { height: height }]} pointerEvents='none'>
            <Svg width={width} height={height} viewBox={`${left} 0 ${width} ${height}`}>
                {children}
            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
    },
});
