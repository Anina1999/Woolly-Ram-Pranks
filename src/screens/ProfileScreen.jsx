import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CameraIcon from '../components/icons/CameraIcon';
import ClockIcon from '../components/icons/ClockIcon';
import GameButton from '../components/common/GameButton';
import GamepadIcon from '../components/icons/GamepadIcon';
import LogOutIcon from '../components/icons/LogOutIcon';
import RamAvatar from '../components/characters/RamAvatar';
import ScreenPanel from '../components/common/ScreenPanel';
import StatCard from '../components/profile/StatCard';
import TrophyIcon from '../components/icons/TrophyIcon';

import profile from '../data/profile';

import formatTime from '../utils/formatTime';
import getBandanaName from '../utils/getBandanaName';

import { colors, fonts } from '../styles/theme';

export default function ProfileScreen({ navigation }) {
    const winRate = profile.gamesPlayed > 0 ? Math.round((profile.wins / profile.gamesPlayed) * 100) : 0;

    const handlePressLogOut = () => {
        // simulates log out by leading to lobby cause we don't have auth screens and logic yet
        //TODO auth screens and logic
        navigation.navigate('Lobby');
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView contentContainerStyle={styles.content}>
                <ScreenPanel style={styles.panel} />
                <Text style={styles.title}>Profile</Text>
                <View style={styles.hero}>
                    <Pressable style={styles.avatarButton} accessibilityRole='button' accessibilityLabel='Change photo'>
                        <RamAvatar
                            wool={profile.wool}
                            bandana={profile.bandana}
                            size={136}
                            style={styles.avatar}
                        />
                        <View style={styles.cameraBadge}>
                            <CameraIcon />
                        </View>
                    </Pressable>
                    <View style={styles.nameBlock}>
                        <Text style={styles.name}>{profile.name}</Text>
                        <Text style={styles.email}>{profile.email}</Text>
                    </View>
                </View>
                <View style={styles.stats}>
                    <StatCard icon={<GamepadIcon />} value={profile.gamesPlayed} label='Games played' />
                    <StatCard icon={<TrophyIcon />} value={profile.wins} label='Wins' />
                    <StatCard icon={<ClockIcon />} value={formatTime(profile.bestTimeSeconds)} label='Best time' />
                </View>
                <View style={styles.infoCard}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Win rate</Text>
                        <View style={styles.winRateTrack}>
                            <View style={[styles.winRateFill, { width: `${winRate}%` }]} />
                        </View>
                        <Text style={styles.winRate}>{winRate}%</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Favourite bandana</Text>
                        <View style={[styles.bandanaDot, { backgroundColor: profile.bandana }]} />
                        <Text style={styles.bandanaName}>{getBandanaName(profile.bandana)}</Text>
                    </View>
                </View>
                <View style={styles.logOut}>
                    <GameButton title='Log out' variant='dangerSecondary' onPress={handlePressLogOut}>
                        <LogOutIcon />
                    </GameButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sky,
    },
    content: {
        flexGrow: 1,
    },
    panel: {
        position: 'absolute',
        top: 166,
        left: 0,
        right: 0,
        bottom: 0,
    },
    title: {
        marginTop: 8,
        marginHorizontal: 16,
        fontFamily: fonts.display,
        fontSize: 32,
        lineHeight: 36,
        color: colors.textOnScene,
        textShadowColor: colors.text,
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
    },
    hero: {
        alignItems: 'center',
        gap: 8,
        marginTop: 28,
    },
    avatarButton: {
        width: 136,
        height: 136,
        borderRadius: 68,
        backgroundColor: colors.grass,
        shadowColor: colors.avatarShadow,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 12,
        elevation: 6,
    },
    avatar: {
        borderWidth: 5,
        borderColor: colors.avatarRing,
    },
    cameraBadge: {
        position: 'absolute',
        right: -2,
        bottom: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 3,
        borderColor: colors.cameraBadgeBorder,
        backgroundColor: colors.primary,
    },
    nameBlock: {
        alignItems: 'center',
        gap: 2,
    },
    name: {
        fontFamily: fonts.display,
        fontSize: 28,
        lineHeight: 32,
        color: colors.text,
    },
    email: {
        fontFamily: fonts.regular,
        fontSize: 14,
        color: colors.muted,
    },
    stats: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 58,
        marginHorizontal: 16,
    },
    infoCard: {
        marginTop: 40,
        marginHorizontal: 16,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: colors.cardBorder,
        backgroundColor: colors.card,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        minHeight: 52,
        paddingHorizontal: 14,
    },
    infoLabel: {
        flex: 1,
        fontFamily: fonts.bold,
        fontSize: 15,
        color: colors.text,
    },
    winRateTrack: {
        width: 90,
        height: 10,
        overflow: 'hidden',
        borderRadius: 5,
        backgroundColor: colors.winRateTrack,
    },
    winRateFill: {
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.primary,
    },
    winRate: {
        fontFamily: fonts.display,
        fontSize: 18,
        color: colors.text,
    },
    divider: {
        height: 2,
        marginHorizontal: 14,
        backgroundColor: colors.cardDivider,
    },
    bandanaDot: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.3)',
    },
    bandanaName: {
        fontFamily: fonts.extraBold,
        fontSize: 14,
        color: colors.text,
    },
    logOut: {
        marginTop: 'auto',
        paddingTop: 24,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});
