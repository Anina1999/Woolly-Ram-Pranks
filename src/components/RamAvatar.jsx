import { StyleSheet, View } from 'react-native';

import Ram from './Ram';

import { colors } from '../styles/theme';

export default function RamAvatar({ wool, bandana, size, style }) {
    return (
        <View style={[styles.avatar, { width: size, height: size }, style]}>
            <Ram wool={wool} bandana={bandana} pose='idle' size={size * 1.2} />
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 999,
        backgroundColor: colors.grass,
    },
});
