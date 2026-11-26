import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackHeader from '../common/BackHeader';
import Panel from '../common/Panel';

import { colors } from '../../styles/theme';

export default function AuthLayout({ title, background, onBack, style, children }) {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            {background}
            <BackHeader onBack={onBack} />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardView}>
                <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps='handled'>
                    <Panel style={[styles.panel, style]}>
                        <Text accessibilityRole='header' style={styles.hiddenTitle}>{title}</Text>
                        {children}
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
    keyboardView: {
        flex: 1,
    },
    content: {
        paddingBottom: 16,
    },
    panel: {
        gap: 14,
        marginTop: 152,
        marginHorizontal: 16,
        paddingTop: 20,
        paddingHorizontal: 16,
        paddingBottom: 18,
        borderRadius: 24,
    },
    hiddenTitle: {
        position: 'absolute',
        width: 1,
        height: 1,
        overflow: 'hidden',
    },
});
