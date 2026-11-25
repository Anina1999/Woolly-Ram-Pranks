import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Svg from 'react-native-svg';

export default function SceneCanvas({ children }) {
    const { width, height } = useWindowDimensions();
    const left = (360 - width) / 2;

    return (
        <View style={styles.background} pointerEvents='none'>
            <Svg
                width='100%'
                height='100%'
                viewBox={`${left} 0 ${width} ${height}`}
                preserveAspectRatio='xMidYMin slice'
            >
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
        bottom: 0,
        overflow: 'hidden',
    },
});
