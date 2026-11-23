import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

import { colors, fonts } from '../../styles/theme';

export default function VolumeSetting({ icon, mutedIcon, label, value, onChange }) {
    const [lastVolume, setLastVolume] = useState(value);

    const isMuted = value === 0;
    const sliderColor = isMuted ? colors.sliderMuted : colors.primary;

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
                    style={[styles.muteButton, isMuted && styles.muteButtonMuted]}
                    accessibilityRole='togglebutton'
                    accessibilityLabel={`${isMuted ? 'Unmute' : 'Mute'} ${label.toLowerCase()}`}
                    accessibilityState={{ checked: isMuted }}
                    onPress={handlePressMute}
                >
                    {isMuted ? mutedIcon : icon}
                </Pressable>
                <Text style={[styles.label, isMuted && styles.labelMuted]}>{label}</Text>
                {isMuted ? (
                    <Text style={styles.offBadge}>OFF</Text>
                ) : (
                    <Text style={styles.value}>{value}%</Text>
                )}
            </View>
            <Slider
                style={styles.slider}
                value={value}
                minimumValue={0}
                maximumValue={100}
                step={1}
                minimumTrackTintColor={sliderColor}
                maximumTrackTintColor={colors.sliderTrack}
                thumbTintColor={sliderColor}
                accessibilityLabel={label}
                onValueChange={onChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    setting: {
        gap: 6,
        paddingTop: 8,
        paddingRight: 14,
        paddingBottom: 12,
        paddingLeft: 6,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    muteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 44,
        height: 44,
        borderRadius: 999,
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: colors.muteButtonBorder,
        backgroundColor: colors.muteButton,
    },
    muteButtonMuted: {
        borderColor: colors.muteButtonMutedBorder,
        backgroundColor: colors.muteButtonMuted,
    },
    label: {
        flex: 1,
        fontFamily: fonts.bold,
        fontSize: 15,
        color: colors.text,
    },
    labelMuted: {
        color: colors.muted,
    },
    value: {
        fontFamily: fonts.display,
        fontSize: 16,
        color: colors.text,
    },
    offBadge: {
        overflow: 'hidden',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 999,
        fontFamily: fonts.display,
        fontSize: 13,
        letterSpacing: 0.6,
        color: colors.offBadgeText,
        backgroundColor: colors.offBadge,
    },
    slider: {
        height: 28,
        // Android's slider has 16 dp of its own padding on each side, so the margins make up for it
        marginLeft: 32,
        marginRight: -8,
    },
});
