import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';

import BackHeader from '../components/BackHeader';
import SettingsSection from '../components/SettingsSection';
import ToggleSwitch from '../components/ToggleSwitch';

export default function SettingsScreen({ navigation }) {
    const [isVibrationOn, setIsVibrationOn] = useState(true);
    const [isNotificationsOn, setIsNotificationsOn] = useState(false);

    const handlePressBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <BackHeader onBack={handlePressBack}>
                <Text>Settings</Text>
            </BackHeader>
            <ScrollView>
                <SettingsSection title='SOUND'>
                    <Text>Music</Text>
                    <Text>Sound effects</Text>
                </SettingsSection>
                <SettingsSection title='GAMEPLAY'>
                    <View>
                        <Text>Vibration</Text>
                        <ToggleSwitch
                            value={isVibrationOn}
                            size='small'
                            accessibilityLabel='Vibration'
                            onValueChange={setIsVibrationOn}
                        />
                    </View>
                    <View>
                        <Text>Notifications</Text>
                        <ToggleSwitch
                            value={isNotificationsOn}
                            size='small'
                            accessibilityLabel='Notifications'
                            onValueChange={setIsNotificationsOn}
                        />
                    </View>
                </SettingsSection>
                <SettingsSection title='GENERAL'>
                    <View>
                        <Text>Language</Text>
                        <Text>English</Text>
                    </View>
                    <View>
                        <Text>Help & support</Text>
                    </View>
                    <View>
                        <Text>Privacy & terms</Text>
                    </View>
                </SettingsSection>
                <Text>Version {Constants.expoConfig.version}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
