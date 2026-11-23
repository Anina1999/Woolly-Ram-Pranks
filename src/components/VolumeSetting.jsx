import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

import { colors, fonts } from '../styles/theme';

export default function VolumeSetting({ icon, label, value, onChange }) {
    const [lastVolume, setLastVolume] = useState(value);

    const isMuted = value === 0;

    const handlePressMute = () => {
        if (isMuted) {
            onChange(lastVolume > 0 ? lastVolume : 50);
            return;
        }

        setLastVolume(value);
        onChange(0);
    };

    return (
        <View style={styles.setting}>
            <View style={styles.header}>
                <Pressable
                    style={styles.muteButton}
                    accessibilityRole='button'
                    accessibilityLabel={`${isMuted ? 'Unmute' : 'Mute'} ${label.toLowerCase()}`}
                    onPress={handlePressMute}
                >
                    {icon}
                </Pressable>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{isMuted ? 'OFF' : `${value}%`}</Text>
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
    muteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 44,
        height: 44,
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
