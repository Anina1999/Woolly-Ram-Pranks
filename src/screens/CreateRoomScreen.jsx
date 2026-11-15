import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import DifficultySetting from '../components/DifficultySetting';
import GameButton from '../components/GameButton';
import MaxPlayersSetting from '../components/MaxPlayersSetting';
import Panel from '../components/Panel';

import { colors, fonts } from '../styles/theme';

export default function CreateRoomScreen({ navigation}) {
    const [maxPlayers, setMaxPlayers] = useState(5);

    const handlePressCreate = () => {
        navigation.replace('WaitingRoom', { roomId: '2' });
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Text style={styles.title}>Create room</Text>
            <Panel style={styles.panel}>
                <MaxPlayersSetting maxPlayers={maxPlayers} onChange={setMaxPlayers} />
                <DifficultySetting difficulty='normal' />
                <GameButton title='Create' onPress={handlePressCreate} />
            </Panel>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sky,
    },
    title: {
        marginTop: 8,
        paddingHorizontal: 16,
        fontFamily: fonts.display,
        fontSize: 28,
        lineHeight: 32,
        color: colors.textOnScene,
        textShadowColor: colors.text,
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
    },
    panel: {
        gap: 16,
        marginTop: 20,
        marginHorizontal: 16,
        paddingTop: 18,
        paddingHorizontal: 16,
        paddingBottom: 16,
        borderRadius: 24,
    },
});
