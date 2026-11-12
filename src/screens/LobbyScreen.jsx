import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

export default function LobbyScreen({ navigation }) {
    const handlePressProfile = () => {
        navigation.navigate('Profile');
    };

    const handlePressSettings = () => {
        navigation.navigate('Settings');
    };

    const handlePressPlayCoop = () => {
        navigation.navigate('Rooms');
    };

    const handlePressCreateRoom = () => {
        navigation.navigate('CreateRoom');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.profileChip} onPress={handlePressProfile}>
                    <View style={styles.avatar} />
                    <Text style={styles.playerName}>Bramble</Text>
                </Pressable>
                <Pressable style={styles.settingsButton} onPress={handlePressSettings}>
                    <Feather name='settings' size={22} color='#5E3A1E' />
                </Pressable>
            </View>
            <Text style={styles.title}>Choose a mode</Text>
            <View>
                <Text>SELECTED</Text>
                <Text>Co-op</Text>
                <Text>1–5 players</Text>
                <Text>Charm every sheep, pull off the pranks, don’t get caught.</Text>
            </View>
            <Button title='Play Co-op' onPress={handlePressPlayCoop} />
            <Button title='Create a room' onPress={handlePressCreateRoom} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#8FCDEE',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    profileChip: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        height: 48,
        paddingLeft: 4,
        paddingRight: 14,
        borderRadius: 999,
        borderWidth: 3,
        borderColor: '#8A5A34',
        backgroundColor: '#FBF3E2',
    },
    avatar: {
        width: 38,
        height: 38,
        borderRadius: 999,
        backgroundColor: '#8CC152',
    },
    playerName: {
        fontSize: 15,
        fontWeight: '800',
        color: '#2E2117',
    },
    settingsButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        borderRadius: 999,
        borderWidth: 3,
        borderColor: '#8A5A34',
        backgroundColor: '#FBF3E2',
    },
    title: {
        marginTop: 16,
        fontSize: 28,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textShadowColor: '#2E2117',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
    },
});
