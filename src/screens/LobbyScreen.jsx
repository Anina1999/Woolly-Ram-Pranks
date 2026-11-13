import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

import Badge from '../components/Badge';
import GameButton from '../components/GameButton';
import IconButton from '../components/IconButton';
import LockedModeCard from '../components/LockedModeCard';
import PlayIcon from '../components/PlayIcon';
import Ram from '../components/Ram';
import RamAvatar from '../components/RamAvatar';
import Sheep from '../components/Sheep';

import useCardPulse from '../hooks/useCardPulse';

import { colors, fonts } from '../styles/theme';

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
                    <RamAvatar wool='black' bandana='#E04436' size={38} />
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
                        <Badge
                            label='SELECTED'
                            backgroundColor={colors.highlight}
                            color={colors.text}
                            style={styles.selectedBadge}
                            labelStyle={styles.selectedText}
                        >
                            <Feather name='check' size={12} color={colors.text} />
                        </Badge>
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
                <GameButton title='Play Co-op' size='large' onPress={handlePressPlayCoop}>
                    <PlayIcon />
                </GameButton>
                <GameButton title='Create a room' variant='secondary' onPress={handlePressCreateRoom} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: colors.sky,
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
        borderColor: colors.wood,
        backgroundColor: colors.surface,
    },
    playerName: {
        fontFamily: fonts.extraBold,
        fontSize: 15,
        color: colors.text,
    },
    title: {
        marginTop: 16,
        fontFamily: fonts.display,
        fontSize: 28,
        lineHeight: 32,
        color: colors.white,
        textShadowColor: colors.text,
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
    },
    modeCard: {
        marginTop: 16,
        padding: 4,
        paddingBottom: 8,
        borderRadius: 24,
        backgroundColor: colors.woodDark,
        boxShadow: '0px 6px 12px rgba(46, 33, 23, 0.35)',
    },
    modeCardInner: {
        overflow: 'hidden',
        borderRadius: 20,
        borderWidth: 3,
        backgroundColor: colors.surface,
    },
    modeArt: {
        height: 140,
        backgroundColor: colors.meadow,
    },
    modeArtTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 30,
        backgroundColor: colors.dryGrass,
    },
    modeArtBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 46,
        backgroundColor: colors.meadowDark,
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
        gap: 4,
        paddingVertical: 4,
        paddingHorizontal: 10,
    },
    selectedText: {
        fontSize: 12,
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
        fontFamily: fonts.display,
        fontSize: 26,
        color: colors.text,
    },
    modePlayers: {
        fontFamily: fonts.extraBold,
        fontSize: 13,
        color: colors.muted,
    },
    modeDescription: {
        fontFamily: fonts.regular,
        fontSize: 14,
        lineHeight: 20,
        color: colors.muted,
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
});
