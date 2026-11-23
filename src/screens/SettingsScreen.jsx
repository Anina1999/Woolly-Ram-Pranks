import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';

import BackHeader from '../components/BackHeader';
import BellIcon from '../components/BellIcon';
import ForwardIcon from '../components/ForwardIcon';
import GlobeIcon from '../components/GlobeIcon';
import HelpIcon from '../components/HelpIcon';
import MusicIcon from '../components/MusicIcon';
import MusicOffIcon from '../components/MusicOffIcon';
import ScreenPanel from '../components/ScreenPanel';
import SettingRow from '../components/SettingRow';
import SettingsSection from '../components/SettingsSection';
import ShieldIcon from '../components/ShieldIcon';
import SoundIcon from '../components/SoundIcon';
import SoundOffIcon from '../components/SoundOffIcon';
import ToggleSwitch from '../components/ToggleSwitch';
import VibrationIcon from '../components/VibrationIcon';
import VolumeSetting from '../components/VolumeSetting';

import { colors, fonts } from '../styles/theme';

export default function SettingsScreen({ navigation }) {
    const [musicVolume, setMusicVolume] = useState(70);
    const [soundEffectsVolume, setSoundEffectsVolume] = useState(85);
    const [isVibrationOn, setIsVibrationOn] = useState(true);
    const [isNotificationsOn, setIsNotificationsOn] = useState(false);

    const handlePressBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <BackHeader onBack={handlePressBack}>
                <Text style={styles.title}>Settings</Text>
            </BackHeader>
            <ScreenPanel style={styles.panel}>
                <ScrollView contentContainerStyle={styles.content}>
                    <SettingsSection title='SOUND'>
                        <VolumeSetting
                            icon={<MusicIcon />}
                            mutedIcon={<MusicOffIcon />}
                            label='Music'
                            value={musicVolume}
                            onChange={setMusicVolume}
                        />
                        <View style={styles.divider} />
                        <VolumeSetting
                            icon={<SoundIcon />}
                            mutedIcon={<SoundOffIcon />}
                            label='Sound effects'
                            value={soundEffectsVolume}
                            onChange={setSoundEffectsVolume}
                        />
                    </SettingsSection>
                    <SettingsSection title='GAMEPLAY'>
                        <SettingRow icon={<VibrationIcon />} label='Vibration' style={styles.switchRow}>
                            <ToggleSwitch
                                value={isVibrationOn}
                                size='small'
                                accessibilityLabel='Vibration'
                                onValueChange={setIsVibrationOn}
                            />
                        </SettingRow>
                        <View style={styles.divider} />
                        <SettingRow icon={<BellIcon />} label='Notifications' style={styles.switchRow}>
                            <ToggleSwitch
                                value={isNotificationsOn}
                                size='small'
                                accessibilityLabel='Notifications'
                                onValueChange={setIsNotificationsOn}
                            />
                        </SettingRow>
                    </SettingsSection>
                    <SettingsSection title='GENERAL'>
                        <SettingRow icon={<GlobeIcon size={22} color={colors.actionText} />} label='Language'>
                            <Text style={styles.language}>English</Text>
                            <ForwardIcon size={18} color={colors.muted} />
                        </SettingRow>
                        <View style={styles.divider} />
                        <SettingRow icon={<HelpIcon />} label='Help & support'>
                            <ForwardIcon size={18} color={colors.muted} />
                        </SettingRow>
                        <View style={styles.divider} />
                        <SettingRow icon={<ShieldIcon />} label='Privacy & terms'>
                            <ForwardIcon size={18} color={colors.muted} />
                        </SettingRow>
                    </SettingsSection>
                    <Text style={styles.version}>Version {Constants.expoConfig.version}</Text>
                </ScrollView>
            </ScreenPanel>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sky,
    },
    title: {
        fontFamily: fonts.display,
        fontSize: 32,
        lineHeight: 36,
        color: colors.textOnScene,
        textShadowColor: colors.text,
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
    },
    panel: {
        marginTop: 24,
    },
    content: {
        gap: 16,
        paddingTop: 20,
        paddingHorizontal: 12,
        paddingBottom: 16,
    },
    divider: {
        height: 2,
        marginHorizontal: 14,
        backgroundColor: colors.settingsDivider,
    },
    switchRow: {
        minHeight: 56,
    },
    language: {
        fontFamily: fonts.bold,
        fontSize: 14,
        color: colors.muted,
    },
    version: {
        textAlign: 'center',
        fontFamily: fonts.bold,
        fontSize: 12,
        color: colors.muted,
    },
});
