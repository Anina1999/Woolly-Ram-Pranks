import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

import IconButton from '../components/IconButton';
import LockedModeCard from '../components/LockedModeCard';
import PlayIcon from '../components/PlayIcon';
import Ram from '../components/Ram';
import Sheep from '../components/Sheep';

import useCardPulse from '../hooks/useCardPulse';

export default function LobbyScreen({ navigation }) {
    const { borderColor, scale } = useCardPulse();

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
                    <View style={styles.avatar}>
                        <Ram wool='black' bandana='#E04436' pose='idle' size={48} />
                    </View>
                    <Text style={styles.playerName}>Bramble</Text>
                </Pressable>
                <IconButton icon='settings' onPress={handlePressSettings} />
            </View>
            <Text style={styles.title}>Choose a mode</Text>
            <Animated.View style={[styles.modeCard, { transform: [{ scale }] }]}>
                <Animated.View style={[styles.modeCardInner, { borderColor }]}>
                    <View style={styles.modeArt}>
                        <View style={styles.modeArtTop} />
                        <View style={styles.modeArtBottom} />
                        <View style={styles.sheep}>
                            <Sheep size={92} />
                        </View>
                        <View style={styles.beigeRam}>
                            <Ram wool='beige' bandana='#3B7DDD' pose='walk1' size={104} />
                        </View>
                        <View style={styles.blackRam}>
                            <Ram wool='black' bandana='#E04436' pose='idle' size={122} />
                        </View>
                        <View style={styles.brownRam}>
                            <Ram wool='brown' bandana='#F2C12E' pose='walk3' size={90} />
                        </View>
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
                </Animated.View>
            </Animated.View>
            <View style={styles.lockedModes}>
                <LockedModeCard title='Competitive' description='Ram vs ram' />
                <LockedModeCard title='Hybrid' description='Team up, then betray' />
            </View>
            <View style={styles.buttons}>
                <Pressable style={styles.playButton} onPress={handlePressPlayCoop}>
                    <View style={styles.playButtonInner}>
                        <View style={styles.playButtonShine} />
                        <PlayIcon />
                        <Text style={styles.playButtonText}>Play Co-op</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.createButton} onPress={handlePressCreateRoom}>
                    <View style={styles.createButtonInner}>
                        <Text style={styles.createButtonText}>Create a room</Text>
                    </View>
                </Pressable>
            </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        width: 38,
        height: 38,
        overflow: 'hidden',
        borderRadius: 999,
        backgroundColor: '#8CC152',
    },
    playerName: {
        fontFamily: 'NunitoSans_800ExtraBold',
        fontSize: 15,
        color: '#2E2117',
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
        marginTop: 16,
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
    sheep: {
        position: 'absolute',
        top: 34,
        left: 6,
    },
    beigeRam: {
        position: 'absolute',
        top: 22,
        left: 76,
    },
    blackRam: {
        position: 'absolute',
        top: 12,
        left: 156,
    },
    brownRam: {
        position: 'absolute',
        top: 36,
        left: 246,
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
    lockedModes: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 40,
    },
    buttons: {
        gap: 12,
        marginTop: 28,
    },
    playButton: {
        paddingBottom: 4,
        borderRadius: 16,
        backgroundColor: '#24601F',
    },
    playButtonInner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        height: 56,
        overflow: 'hidden',
        borderRadius: 16,
        backgroundColor: '#3C8C35',
    },
    playButtonShine: {
        position: 'absolute',
        top: 4,
        left: 8,
        right: 8,
        height: 20,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.18)',
    },
    playButtonText: {
        fontFamily: 'LilitaOne_400Regular',
        fontSize: 22,
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
    },
    createButton: {
        paddingBottom: 4,
        borderRadius: 16,
        backgroundColor: '#8A5A34',
    },
    createButtonInner: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 52,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#8A5A34',
        backgroundColor: '#FBF3E2',
    },
    createButtonText: {
        fontFamily: 'LilitaOne_400Regular',
        fontSize: 20,
        color: '#5E3A1E',
    },
});
