import { Pressable, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function IconButton({ icon, onPress }) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Feather name={icon} size={22} color='#5E3A1E' />
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
        borderColor: '#8A5A34',
        backgroundColor: '#FBF3E2',
    },
});
