import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CameraIcon from '../components/icons/CameraIcon';
import RamAvatar from '../components/characters/RamAvatar';
import ScreenPanel from '../components/common/ScreenPanel';
import StatCard from '../components/profile/StatCard';

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
                <View>
                    <StatCard value={profile.gamesPlayed} label='Games played' />
                    <StatCard value={profile.wins} label='Wins' />
                    <StatCard value={formatTime(profile.bestTimeSeconds)} label='Best time' />
                </View>
                <View>
                    <View>
                        <Text>Win rate</Text>
                        <Text>{winRate}%</Text>
                    </View>
                    <View>
                        <Text>Favourite bandana</Text>
                        <Text>{getBandanaName(profile.bandana)}</Text>
                    </View>
                </View>
                <Pressable onPress={handlePressLogOut}>
                    <Text style={styles.logOutText}>Log out</Text>
                </Pressable>
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
    logOutText: {
        color: colors.danger,
    },
});
