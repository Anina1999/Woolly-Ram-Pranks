import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackHeader from '../components/BackHeader';
import BarnIcon from '../components/BarnIcon';
import DifficultySetting from '../components/DifficultySetting';
import ErrorIcon from '../components/ErrorIcon';
import GameButton from '../components/GameButton';
import MaxPlayersSetting from '../components/MaxPlayersSetting';
import Panel from '../components/Panel';

import newRoom from '../data/newRoom';

import { colors, fonts } from '../styles/theme';

const MIN_NAME_LENGTH = 3;
const MAX_NAME_LENGTH = 24;

export default function CreateRoomScreen({ navigation }) {
    const [roomName, setRoomName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [maxPlayers, setMaxPlayers] = useState(5);
    const [difficulty, setDifficulty] = useState('normal');

    const isNameValid = roomName.trim().length >= MIN_NAME_LENGTH;
    const isNameErrorVisible = isSubmitted && !isNameValid;

    const handlePressBack = () => {
        navigation.goBack();
    };

    const handlePressCreate = () => {
        setIsSubmitted(true);

        if (!isNameValid) {
            return;
        }

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
                <View style={styles.field}>
                    <Text style={[styles.fieldLabel, isNameErrorVisible && styles.fieldLabelError]}>Room name</Text>
                    <View style={[styles.fieldBox, isNameErrorVisible && styles.fieldBoxError]}>
                        <TextInput
                            value={roomName}
                            onChangeText={setRoomName}
                            maxLength={MAX_NAME_LENGTH}
                            placeholder='e.g. Woolly Rebels'
                            placeholderTextColor={colors.placeholder}
                            style={styles.fieldInput}
                        />
                        <Text style={styles.fieldCounter}>{roomName.length}/{MAX_NAME_LENGTH}</Text>
                    </View>
                    {isNameErrorVisible && (
                        <View style={styles.fieldError}>
                            <ErrorIcon />
                            <Text style={styles.fieldErrorText}>
                                Name must be {MIN_NAME_LENGTH}–{MAX_NAME_LENGTH} characters.
                            </Text>
                        </View>
                    )}
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
    field: {
        gap: 6,
    },
    fieldLabel: {
        fontFamily: fonts.bold,
        fontSize: 14,
        color: colors.text,
    },
    fieldLabelError: {
        color: colors.errorText,
    },
    fieldBox: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        paddingHorizontal: 14,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: colors.border,
        backgroundColor: colors.card,
    },
    fieldBoxError: {
        borderColor: colors.errorBorder,
        backgroundColor: colors.errorSurface,
    },
    fieldInput: {
        flex: 1,
        padding: 0,
        fontFamily: fonts.regular,
        fontSize: 16,
        color: colors.text,
    },
    fieldCounter: {
        fontFamily: fonts.bold,
        fontSize: 12,
        color: colors.muted,
    },
    fieldError: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    fieldErrorText: {
        fontFamily: fonts.bold,
        fontSize: 13,
        color: colors.errorText,
    },
});
