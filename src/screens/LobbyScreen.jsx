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
            <View style={styles.modeCard}>
                <View style={styles.modeCardInner}>
                    <View style={styles.modeArt}>
                        <View style={styles.modeArtTop} />
                        <View style={styles.modeArtBottom} />
                        <View style={styles.selectedBadge}>
                            <Feather name='check' size={12} color='#2E2117' />
                            <Text style={styles.selectedText}>SELECTED</Text>
                        </View>
                    </View>
                    <View style={styles.modeInfo}>
                        <View style={styles.modeTitleRow}>
                            <Text style={styles.modeTitle}>Co-op</Text>
                            <Text style={styles.modePlayers}>1–5 players</Text>
                        </View>
                        <Text style={styles.modeDescription}>
                            Charm every sheep, pull off the pranks, don’t get caught.
                        </Text>
                    </View>
                </View>
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
        fontFamily: 'NunitoSans_800ExtraBold',
        fontSize: 15,
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
        fontFamily: 'LilitaOne_400Regular',
        fontSize: 28,
        lineHeight: 32,
        color: '#FFFFFF',
        textShadowColor: '#2E2117',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
    },
    modeCard: {
        marginTop: 12,
        padding: 4,
        paddingBottom: 8,
        borderRadius: 24,
        backgroundColor: '#5E3A1E',
        boxShadow: '0px 6px 12px rgba(46, 33, 23, 0.35)',
    },
    modeCardInner: {
        overflow: 'hidden',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#F2B33D',
        backgroundColor: '#FBF3E2',
    },
    modeArt: {
        height: 140,
        backgroundColor: '#7DBB4C',
    },
    modeArtTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 30,
        backgroundColor: '#A9C95B',
    },
    modeArtBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 46,
        backgroundColor: '#5FA445',
    },
    selectedBadge: {
        position: 'absolute',
        top: 10,
        left: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 999,
        backgroundColor: '#F2B33D',
    },
    selectedText: {
        fontFamily: 'NunitoSans_800ExtraBold',
        fontSize: 12,
        letterSpacing: 0.6,
        color: '#2E2117',
    },
    modeInfo: {
        gap: 4,
        paddingTop: 12,
        paddingHorizontal: 14,
        paddingBottom: 14,
    },
    modeTitleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    modeTitle: {
        fontFamily: 'LilitaOne_400Regular',
        fontSize: 26,
        color: '#2E2117',
    },
    modePlayers: {
        fontFamily: 'NunitoSans_800ExtraBold',
        fontSize: 13,
        color: '#6E5D49',
    },
    modeDescription: {
        fontFamily: 'NunitoSans_400Regular',
        fontSize: 14,
        lineHeight: 20,
        color: '#6E5D49',
    },
});
