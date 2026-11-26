import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '../../styles/theme';

export default function AuthFooter({ question, linkTitle, onPress }) {
    return (
        <View style={styles.footer}>
            <Text style={styles.question}>{question}</Text>
            <Pressable hitSlop={10} accessibilityRole='link' onPress={onPress}>
                <Text style={styles.link}>{linkTitle}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
    },
    question: {
        fontFamily: fonts.regular,
        fontSize: 15,
        color: colors.muted,
    },
    link: {
        fontFamily: fonts.extraBold,
        fontSize: 15,
        color: colors.authLink,
        textDecorationLine: 'underline',
    },
});
