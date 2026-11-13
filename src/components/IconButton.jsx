import { Pressable, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors } from '../styles/theme';

export default function IconButton({ icon, onPress }) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Feather name={icon} size={22} color={colors.woodDark} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        borderRadius: 999,
        borderWidth: 3,
        borderColor: colors.wood,
        backgroundColor: colors.surface,
    },
});
