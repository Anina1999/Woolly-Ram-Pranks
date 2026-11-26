import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackHeader from '../common/BackHeader';
import Panel from '../common/Panel';

import { colors, fonts } from '../../styles/theme';

export default function AuthLayout({ title, subtitle, background, onBack, style, children }) {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            {background}
            <BackHeader onBack={onBack} />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardView}>
                <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps='handled'>
                    <Panel style={[styles.panel, style]}>
                        <View style={styles.titles}>
                            <Text accessibilityRole='header' style={styles.title}>{title}</Text>
                            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                        </View>
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
    titles: {
        gap: 2,
    },
    title: {
        fontFamily: fonts.display,
        fontSize: 28,
        lineHeight: 32,
        color: colors.text,
    },
    subtitle: {
        fontFamily: fonts.regular,
        fontSize: 14,
        lineHeight: 20,
        color: colors.muted,
    },
});
