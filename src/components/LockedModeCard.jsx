import { StyleSheet, Text, View } from 'react-native';

import Badge from './Badge';
import LockIcon from './LockIcon';

export default function LockedModeCard({ title, description }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardInner}>
                <View style={styles.topRow}>
                    <View style={styles.lockCircle}>
                        <LockIcon />
                    </View>
                    <Badge label='COMING SOON' backgroundColor='#3A2616' color='#F3E4C3' />
                </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 3,
        paddingBottom: 6,
        borderRadius: 20,
        backgroundColor: '#8F8676',
    },
    cardInner: {
        gap: 8,
        height: 112,
        padding: 12,
        borderRadius: 17,
        backgroundColor: '#EDE6D8',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lockCircle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 36,
        height: 36,
        borderRadius: 999,
        backgroundColor: '#3A2616',
    },
    title: {
        fontFamily: 'LilitaOne_400Regular',
        fontSize: 20,
        color: '#5E5242',
    },
    description: {
        fontFamily: 'NunitoSans_400Regular',
        fontSize: 12,
        color: '#5E5242',
    },
});
