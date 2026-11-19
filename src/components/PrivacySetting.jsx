import { Pressable, StyleSheet, Text, View } from 'react-native';

import GlobeIcon from './GlobeIcon';
import LockIcon from './LockIcon';

import { colors, fonts } from '../styles/theme';

export default function PrivacySetting({ isPrivate, isDisabled, onChange }) {
    const handlePress = () => {
        onChange(!isPrivate);
    };

    return (
        <View style={styles.row}>
            <View style={styles.labels}>
                <Text style={styles.title}>{isPrivate ? 'Private room' : 'Public room'}</Text>
                <Text style={styles.hint}>
                    {isPrivate ? 'Hidden from the list · join by code' : 'Listed in Rooms · anyone can join'}
                </Text>
            </View>
            <Pressable
                style={[styles.switch, isDisabled && styles.switchDisabled]}
                disabled={isDisabled}
                accessibilityRole='switch'
                accessibilityLabel='Private room'
                accessibilityState={{ checked: isPrivate, disabled: isDisabled }}
                onPress={handlePress}
            >
                <GlobeIcon size={20} color={colors.privacyIcon} />
                <LockIcon size={20} color={colors.privacyIcon} />
                <View style={[styles.knob, isPrivate && styles.knobPrivate]}>
                    {isPrivate ? (
                        <LockIcon size={20} color={colors.privacyKnobLock} />
                    ) : (
                        <GlobeIcon size={20} color={colors.privacyKnobGlobe} />
                    )}
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        minHeight: 44,
    },
    labels: {
        flex: 1,
    },
    title: {
        fontFamily: fonts.extraBold,
        fontSize: 15,
        color: colors.text,
    },
    hint: {
        fontFamily: fonts.bold,
        fontSize: 11,
        color: colors.muted,
    },
    switch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,
        height: 44,
        paddingHorizontal: 14,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: colors.border,
        backgroundColor: colors.card,
    },
    switchDisabled: {
        opacity: 0.6,
    },
    knob: {
        position: 'absolute',
        top: 3,
        left: 3,
        justifyContent: 'center',
        alignItems: 'center',
        width: 46,
        height: 34,
        borderRadius: 17,
        borderWidth: 2,
        borderColor: colors.primaryEdge,
        backgroundColor: colors.primary,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 2,
    },
    knobPrivate: {
        left: 47,
        borderColor: colors.privacyKnobEdge,
        backgroundColor: colors.privacyKnob,
    },
});
