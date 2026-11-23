import { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import ClipboardIcon from '../icons/ClipboardIcon';
import FormError from '../common/FormError';
import GameButton from '../common/GameButton';
import LockIcon from '../icons/LockIcon';

import formatRoomCode, { ROOM_CODE_LENGTH } from '../../utils/formatRoomCode';

import { colors, fonts } from '../../styles/theme';

export default function RoomCodeEntry({ codeError, isJoining, onJoin, onClearCodeError }) {
    const [code, setCode] = useState('');
    const inputRef = useRef(null);

    const hasCodeError = codeError !== '';

    const handleChangeCode = (text) => {
        setCode(formatRoomCode(text));
        onClearCodeError();
    };

    const handlePressPaste = async () => {
        try {
            const text = await Clipboard.getStringAsync();

            if (text === '') {
                inputRef.current.focus();
                return;
            }

            handleChangeCode(text);
        } catch {
            inputRef.current.focus();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.label}>
                <LockIcon size={14} color={colors.privateLock} />
                <Text style={styles.labelText}>ENTER OR</Text>
                <Pressable
                    style={({ pressed }) => [styles.pasteButton, pressed && styles.pasteButtonPressed]}
                    accessibilityRole='button'
                    accessibilityLabel='Paste code from clipboard'
                    onPress={handlePressPaste}
                >
                    <ClipboardIcon />
                    <Text style={styles.pasteText}>PASTE</Text>
                </Pressable>
                <Text style={styles.labelText}>CODE</Text>
            </View>
            <TextInput
                ref={inputRef}
                placeholder='ABC-1234'
                placeholderTextColor={colors.placeholder}
                accessibilityLabel='Enter or paste room code'
                autoCapitalize='characters'
                autoComplete='off'
                autoCorrect={false}
                spellCheck={false}
                maxLength={ROOM_CODE_LENGTH}
                value={code}
                onChangeText={handleChangeCode}
                style={[styles.input, hasCodeError && styles.inputError]}
            />
            {hasCodeError && <FormError message={codeError} />}
            <GameButton
                title='Join room'
                isDisabled={code.length < ROOM_CODE_LENGTH}
                isLoading={isJoining}
                loadingTitle='Joining…'
                onPress={() => onJoin(code)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
        paddingTop: 10,
        borderTopWidth: 2,
        borderTopColor: colors.codeDivider,
    },
    label: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
    },
    labelText: {
        fontFamily: fonts.extraBold,
        fontSize: 13,
        letterSpacing: 0.6,
        color: colors.privateLock,
    },
    pasteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        height: 44,
        paddingHorizontal: 10,
        borderRadius: 12,
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: colors.privateBorder,
        backgroundColor: colors.privateSurface,
    },
    pasteButtonPressed: {
        backgroundColor: colors.privateSurfacePressed,
    },
    pasteText: {
        fontFamily: fonts.extraBold,
        fontSize: 13,
        letterSpacing: 0.6,
        color: colors.pasteText,
    },
    input: {
        height: 60,
        paddingVertical: 0,
        paddingHorizontal: 12,
        borderRadius: 14,
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: colors.privateLock,
        backgroundColor: colors.card,
        textAlign: 'center',
        fontFamily: fonts.display,
        fontSize: 28,
        letterSpacing: 4,
        color: colors.text,
    },
    inputError: {
        borderColor: colors.errorBorder,
        backgroundColor: colors.errorSurface,
    },
});
