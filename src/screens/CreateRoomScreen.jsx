import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackHeader from '../components/BackHeader';
import BarnIcon from '../components/BarnIcon';
import DifficultySetting from '../components/DifficultySetting';
import GameButton from '../components/GameButton';
import MaxPlayersSetting from '../components/MaxPlayersSetting';
import Panel from '../components/Panel';

import newRoom from '../data/newRoom';

import { colors, fonts } from '../styles/theme';

const MAX_NAME_LENGTH = 24;

export default function CreateRoomScreen({ navigation }) {
    const [maxPlayers, setMaxPlayers] = useState(5);
    const [difficulty, setDifficulty] = useState('normal');

    const handlePressBack = () => {
        navigation.goBack();
    };

    const handlePressCreate = () => {
        navigation.replace('WaitingRoom', { roomId: '2' });
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <BackHeader onBack={handlePressBack}>
                <Text style={styles.title}>Create room</Text>
            </BackHeader>
            <Panel style={styles.panel}>
                <View style={styles.levelCard}>
                    <View style={styles.levelIcon}>
                        <BarnIcon />
                    </View>
                    <View>
                        <Text style={styles.levelLabel}>{newRoom.mode} · Level {newRoom.level}</Text>
                        <Text style={styles.levelName}>{newRoom.map}</Text>
                    </View>
                </View>
                <View>
                    <Text>Room name</Text>
                    <View>
                        <TextInput placeholder='e.g. Woolly Rebels' />
                        <Text>0/{MAX_NAME_LENGTH}</Text>
                    </View>
                </View>
                <MaxPlayersSetting maxPlayers={maxPlayers} onChange={setMaxPlayers} />
                <DifficultySetting difficulty={difficulty} onChange={setDifficulty} />
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
    levelCard: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: 10,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: colors.levelCardBorder,
        backgroundColor: colors.levelCard,
    },
    levelIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 52,
        height: 52,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: colors.meadow,
    },
    levelLabel: {
        fontFamily: fonts.extraBold,
        fontSize: 12,
        letterSpacing: 0.6,
        textTransform: 'uppercase',
        color: colors.levelLabel,
    },
    levelName: {
        fontFamily: fonts.display,
        fontSize: 20,
        color: colors.text,
    },
});
