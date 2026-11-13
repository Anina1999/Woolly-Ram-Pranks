import { Pressable, StyleSheet, Text } from 'react-native';

export default function FilterChip({ label, selected, onPress }) {
    return (
        <Pressable style={[styles.chip, selected && styles.chipSelected]} onPress={onPress}>
            <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    chip: {
        justifyContent: 'center',
        height: 40,
        paddingHorizontal: 16,
        borderRadius: 999,
        borderWidth: 2,
        borderColor: '#D9C39A',
        backgroundColor: '#FFFBF2',
    },
    chipSelected: {
        borderColor: '#5E3A1E',
        backgroundColor: '#5E3A1E',
    },
    label: {
        fontFamily: 'NunitoSans_800ExtraBold',
        fontSize: 14,
        color: '#5E3A1E',
    },
    labelSelected: {
        color: '#FBF3E2',
    },
});
