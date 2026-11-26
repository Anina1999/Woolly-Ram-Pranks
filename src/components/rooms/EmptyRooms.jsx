import { StyleSheet, Text, View } from 'react-native';

import Dog from '../characters/Dog';

import { colors, fonts } from '../../styles/theme';

export default function EmptyRooms({ title, text, children }) {
    return (
        <View style={styles.container}>
            <Dog pose='stunned' size={180} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
            {children && <View style={styles.action}>{children}</View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 28,
        paddingBottom: 40,
    },
    title: {
        textAlign: 'center',
        fontFamily: fonts.display,
        fontSize: 26,
        lineHeight: 30,
        color: colors.text,
    },
    text: {
        textAlign: 'center',
        fontFamily: fonts.regular,
        fontSize: 15,
        lineHeight: 22,
        color: colors.muted,
    },
    action: {
        width: 200,
        marginTop: 6,
    },
});
