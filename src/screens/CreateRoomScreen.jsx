import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackHeader from '../components/common/BackHeader';
import BarnIcon from '../components/icons/BarnIcon';
import DifficultySetting from '../components/room-settings/DifficultySetting';
import FormError from '../components/common/FormError';
import GameButton from '../components/common/GameButton';
import MaxPlayersSetting from '../components/room-settings/MaxPlayersSetting';
import Panel from '../components/common/Panel';
import SceneBackground from '../components/common/SceneBackground';
import ToggleSwitch from '../components/common/ToggleSwitch';

import newRoom from '../data/newRoom';
import profile from '../data/profile';

import useRoomsContext from '../contexts/rooms-context/useRoomsContext';

import { createRoom, getProfileByUsername } from '../services';

import { colors, fonts } from '../styles/theme';

const MIN_NAME_LENGTH = 3;
const MAX_NAME_LENGTH = 24;
const LEAVE_ROOM_MESSAGE = 'Leave your room first';

export default function CreateRoomScreen({ navigation }) {
    const { players, reloadData } = useRoomsContext();
    const [roomName, setRoomName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isPrivate, setIsPrivate] = useState(false);
    const [maxPlayers, setMaxPlayers] = useState(5);
    const [difficulty, setDifficulty] = useState('normal');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const me = players.find((player) => player.you);
    const isInRoom = me !== undefined;
    const isNameValid = roomName.trim().length >= MIN_NAME_LENGTH;
    const isNameErrorVisible = isSubmitted && !isNameValid;

    const handlePressBack = () => {
        navigation.goBack();
    };

    const handlePressCreate = async () => {
        Keyboard.dismiss();
        setIsSubmitted(true);
        setSubmitError('');

        if (!isNameValid) {
            return;
        }

        if (isInRoom) {
            setSubmitError(LEAVE_ROOM_MESSAGE);
            return;
        }

        setIsSubmitting(true);

        try {
            const host = await getProfileByUsername(profile.name);
            const createdRoom = await createRoom({
                name: roomName.trim(),
                maxPlayers: maxPlayers,
                difficulty: difficulty,
                isPrivate: isPrivate,
                hostId: host.id,
            });

            await reloadData();
            navigation.replace('WaitingRoom', { roomId: createdRoom.id });
        } catch (createError) {
            if (createError.code === '23505') {
                setSubmitError(LEAVE_ROOM_MESSAGE);
            } else {
                setSubmitError("Couldn't create the room. Try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <SceneBackground scrimColor={colors.createRoomScrim} />
            <BackHeader onBack={handlePressBack}>
                <Text style={styles.title}>Create room</Text>
            </BackHeader>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardView}>
                <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps='handled'>
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
                                <FormError message={`Name must be ${MIN_NAME_LENGTH}–${MAX_NAME_LENGTH} characters.`} />
                            )}
                        </View>
                        <View style={styles.privateRow}>
                            <View style={styles.privateTexts}>
                                <Text style={styles.privateTitle}>Private room</Text>
                                <Text style={styles.privateSubtitle}>Hidden from the list. Friends join with a room code.</Text>
                            </View>
                            <ToggleSwitch value={isPrivate} accessibilityLabel='Private room' onValueChange={setIsPrivate} />
                        </View>
                        <MaxPlayersSetting maxPlayers={maxPlayers} onChange={setMaxPlayers} />
                        <DifficultySetting difficulty={difficulty} onChange={setDifficulty} />
                        <GameButton
                            title='Create'
                            isLoading={isSubmitting}
                            loadingTitle='Creating…'
                            onPress={handlePressCreate}
                        />
                        {submitError !== '' && <FormError message={submitError} />}
                    </Panel>
                </ScrollView>
            </KeyboardAvoidingView>
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
    keyboardView: {
        flex: 1,
    },
    content: {
        paddingBottom: 16,
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
    privateRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        minHeight: 52,
    },
    privateTexts: {
        flex: 1,
        gap: 2,
    },
    privateTitle: {
        fontFamily: fonts.extraBold,
        fontSize: 16,
        color: colors.text,
    },
    privateSubtitle: {
        fontFamily: fonts.regular,
        fontSize: 13,
        lineHeight: 18,
        color: colors.muted,
    },
});
