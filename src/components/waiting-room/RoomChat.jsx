import { Pressable, Text, TextInput, View } from 'react-native';

import { colors } from '../../styles/theme';

export default function RoomChat() {
    return (
        <View>
            <View>
                <Text>Room chat</Text>
                <Text>· only players in this room</Text>
            </View>
            <Text>No messages yet · friends who join can chat here</Text>
            <View>
                <TextInput
                    placeholder='Message the room…'
                    placeholderTextColor={colors.placeholder}
                    editable={false}
                    accessibilityLabel='Message the room'
                />
                <Pressable disabled accessibilityRole='button' accessibilityLabel='Send message'>
                    <Text>Send</Text>
                </Pressable>
            </View>
            <View>
                <Text>Coming soon</Text>
                <Text>Room chat is on its way</Text>
            </View>
        </View>
    );
}
