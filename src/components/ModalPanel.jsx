import { Modal, StyleSheet, View } from 'react-native';

import Panel from './Panel';

import { colors } from '../styles/theme';

export default function ModalPanel({ visible, onClose, style, children }) {
    return (
        <Modal visible={visible} transparent animationType='fade' onRequestClose={onClose}>
            <View style={styles.overlay}>
                <Panel style={[styles.panel, style]}>{children}</Panel>
            </View>
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
});
