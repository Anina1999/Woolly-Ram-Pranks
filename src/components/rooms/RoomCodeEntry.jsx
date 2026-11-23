import { useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import FormError from '../common/FormError';
import GameButton from '../common/GameButton';
import LockIcon from '../icons/LockIcon';

import formatRoomCode, { ROOM_CODE_LENGTH } from '../../utils/formatRoomCode';

import { colors } from '../../styles/theme';

export default function RoomCodeEntry({ codeError, isJoining, onJoin, onClearCodeError }) {
    const [code, setCode] = useState('');
    const inputRef = useRef(null);

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
        <View>
            <View>
                <LockIcon size={14} color={colors.privateLock} />
                <Text>ENTER OR</Text>
                <Pressable
                    accessibilityRole='button'
                    accessibilityLabel='Paste code from clipboard'
                    onPress={handlePressPaste}
                >
                    <Text>PASTE</Text>
                </Pressable>
                <Text>CODE</Text>
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
            />
            {codeError !== '' && <FormError message={codeError} />}
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
