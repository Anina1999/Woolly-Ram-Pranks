import { KeyboardAvoidingView, Modal, Platform, Pressable, StyleSheet } from 'react-native';

import Panel from './Panel';

import { colors } from '../../styles/theme';

export default function ModalPanel({ visible, variant, onClose, style, children }) {
    const isSheet = variant === 'sheet';

    return (
        <Modal visible={visible} transparent animationType='fade' onRequestClose={onClose}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={[styles.overlay, isSheet && styles.overlaySheet]}
            >
                <Pressable
                    style={StyleSheet.absoluteFill}
                    accessibilityRole='button'
                    accessibilityLabel='Close'
                    onPress={onClose}
                />
                <Panel style={[styles.panel, isSheet && styles.panelSheet, style]}>{children}</Panel>
            </KeyboardAvoidingView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 22,
        backgroundColor: colors.backdrop,
    },
    overlaySheet: {
        justifyContent: 'flex-end',
        paddingHorizontal: 0,
    },
    panel: {
        alignItems: 'center',
        gap: 10,
        padding: 18,
        borderRadius: 24,
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 0.4,
        shadowRadius: 16,
        elevation: 16,
    },
    panelSheet: {
        alignItems: 'stretch',
        gap: 12,
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 22,
        borderRadius: 0,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        borderBottomWidth: 0,
        shadowOffset: { width: 0, height: -12 },
    },
});
