import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import ChatIcon from '../icons/ChatIcon';
import Panel from '../common/Panel';
import SendIcon from '../icons/SendIcon';

import { colors, fonts } from '../../styles/theme';

export default function RoomChat({ style }) {
    return (
        <Panel style={[styles.chat, style]}>
            <View style={styles.header}>
                <ChatIcon />
                <Text style={styles.title}>Room chat</Text>
                <Text style={styles.subtitle}>· only players in this room</Text>
            </View>
            <View style={styles.log}>
                <Text style={styles.systemText}>No messages yet · friends who join can chat here</Text>
            </View>
            <View style={styles.inputRow}>
                <TextInput
                    style={styles.input}
                    placeholder='Message the room…'
                    placeholderTextColor={colors.placeholder}
                    editable={false}
                    accessibilityLabel='Message the room'
                />
                <Pressable
                    style={styles.sendButton}
                    disabled
                    accessibilityRole='button'
                    accessibilityLabel='Send message'
                >
                    <SendIcon />
                </Pressable>
            </View>
            <View style={styles.overlay}>
                <View style={styles.soonBadge}>
                    <ChatIcon size={18} color={colors.text} />
                    <Text style={styles.soonTitle}>Coming soon</Text>
                </View>
                <Text style={styles.soonText}>Room chat is on its way</Text>
            </View>
        </Panel>
    );
}

const styles = StyleSheet.create({
    chat: {
        gap: 6,
        padding: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 6,
    },
    title: {
        fontFamily: fonts.display,
        fontSize: 16,
        lineHeight: 20,
        color: colors.text,
    },
    subtitle: {
        fontFamily: fonts.bold,
        fontSize: 11,
        color: colors.muted,
    },
    log: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 2,
    },
    systemText: {
        alignSelf: 'center',
        fontFamily: fonts.bold,
        fontSize: 11,
        color: colors.muted,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    input: {
        flex: 1,
        height: 44,
        paddingHorizontal: 14,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: colors.border,
        backgroundColor: colors.card,
        fontFamily: fonts.bold,
        fontSize: 14,
        color: colors.text,
    },
    sendButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: colors.primary,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        padding: 12,
        borderRadius: 18,
        backgroundColor: colors.chatOverlay,
    },
    soonBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 999,
        borderWidth: 3,
        borderBottomWidth: 6,
        borderColor: colors.frame,
        backgroundColor: colors.accent,
    },
    soonTitle: {
        fontFamily: fonts.display,
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: 0.5,
        color: colors.text,
    },
    soonText: {
        fontFamily: fonts.extraBold,
        fontSize: 13,
        color: colors.actionText,
    },
});
