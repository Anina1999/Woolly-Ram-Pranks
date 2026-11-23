import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

import { colors, fonts } from '../styles/theme';

export default function VolumeSetting({ icon, label, value, onChange }) {
    return (
        <View style={styles.setting}>
            <View style={styles.header}>
                {icon}
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{value}%</Text>
            </View>
            <Slider
                style={styles.slider}
                value={value}
                minimumValue={0}
                maximumValue={100}
                step={1}
                minimumTrackTintColor={colors.primary}
                maximumTrackTintColor={colors.sliderTrack}
                thumbTintColor={colors.primary}
                accessibilityLabel={label}
                onValueChange={onChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    setting: {
        gap: 6,
        paddingVertical: 12,
        paddingHorizontal: 14,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    label: {
        flex: 1,
        fontFamily: fonts.bold,
        fontSize: 15,
        color: colors.text,
    },
    value: {
        fontFamily: fonts.display,
        fontSize: 16,
        color: colors.text,
    },
    slider: {
        height: 28,
    },
});
