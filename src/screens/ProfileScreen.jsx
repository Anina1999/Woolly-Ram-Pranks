import { useState } from 'react';
import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

import CameraIcon from '../components/icons/CameraIcon';
import ChangePhotoSheet from '../components/profile/ChangePhotoSheet';
import ClockIcon from '../components/icons/ClockIcon';
import FormError from '../components/common/FormError';
import GameButton from '../components/common/GameButton';
import GamepadIcon from '../components/icons/GamepadIcon';
import LogOutIcon from '../components/icons/LogOutIcon';
import RamAvatar from '../components/characters/RamAvatar';
import SceneBackground from '../components/common/SceneBackground';
import ScreenPanel from '../components/common/ScreenPanel';
import StatCard from '../components/profile/StatCard';
import TrophyIcon from '../components/icons/TrophyIcon';

import profile from '../data/profile';

import useLogOut from '../hooks/useLogOut';

import formatTime from '../utils/formatTime';
import getBandanaName from '../utils/getBandanaName';

import { colors, fonts } from '../styles/theme';

const PHOTO_OPTIONS = {
    mediaTypes: ['images'],
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.5,
};

export default function ProfileScreen() {
    const { isLoggingOut, logOutError, handlePressLogOut } = useLogOut();
    const [isPhotoSheetVisible, setIsPhotoSheetVisible] = useState(false);
    const [photoUri, setPhotoUri] = useState(null);
    const [photoError, setPhotoError] = useState('');
    const [canOpenSettings, setCanOpenSettings] = useState(false);
    const [isCameraInfoVisible, setIsCameraInfoVisible] = useState(false);

    const winRate = profile.gamesPlayed > 0 ? Math.round((profile.wins / profile.gamesPlayed) * 100) : 0;

    const handlePressChangePhoto = () => {
        setIsPhotoSheetVisible(true);
    };

    const handleClosePhotoSheet = () => {
        setIsPhotoSheetVisible(false);
        setIsCameraInfoVisible(false);
        setPhotoError('');
        setCanOpenSettings(false);
    };

    const savePickedPhoto = (result) => {
        if (result.canceled) {
            return;
        }

        setPhotoUri(result.assets[0].uri);
        setIsPhotoSheetVisible(false);
    };

    const showCameraDenied = (canAskAgain) => {
        if (canAskAgain) {
            setPhotoError('Camera access was denied. Tap Take a photo to try again.');
        } else {
            setPhotoError('Camera access is off. Allow it in your phone settings to take a photo.');
        }

        setCanOpenSettings(!canAskAgain);
    };

    const askForCameraAndOpen = async () => {
        try {
            const permission = await ImagePicker.requestCameraPermissionsAsync();

            if (!permission.granted) {
                showCameraDenied(permission.canAskAgain);
                return;
            }

            const result = await ImagePicker.launchCameraAsync(PHOTO_OPTIONS);
            savePickedPhoto(result);
        } catch {
            setPhotoError("Couldn't open the camera. Try again.");
        }
    };

    const handlePressTakePhoto = async () => {
        setPhotoError('');
        setCanOpenSettings(false);

        try {
            const permission = await ImagePicker.getCameraPermissionsAsync();

            if (!permission.granted && !permission.canAskAgain) {
                showCameraDenied(false);
                return;
            }

            if (permission.status === ImagePicker.PermissionStatus.DENIED) {
                setIsCameraInfoVisible(true);
                return;
            }

            await askForCameraAndOpen();
        } catch {
            setPhotoError("Couldn't open the camera. Try again.");
        }
    };

    const handlePressContinue = async () => {
        setIsCameraInfoVisible(false);
        await askForCameraAndOpen();
    };

    const handlePressNotNow = () => {
        setIsCameraInfoVisible(false);
    };

    const handlePressChooseFromGallery = async () => {
        setPhotoError('');
        setCanOpenSettings(false);

        try {
            const result = await ImagePicker.launchImageLibraryAsync(PHOTO_OPTIONS);
            savePickedPhoto(result);
        } catch {
            setPhotoError("Couldn't open the gallery. Try again.");
        }
    };

    const handlePressOpenSettings = () => {
        Linking.openSettings();
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <SceneBackground />
            <ScrollView contentContainerStyle={styles.content}>
                <ScreenPanel style={styles.panel} />
                <Text style={styles.title}>Profile</Text>
                <View style={styles.hero}>
                    <View style={styles.avatarWrap}>
                        <View style={styles.avatarFrame}>
                            {photoUri ? (
                                <Image source={{ uri: photoUri }} style={[styles.photo, styles.avatar]} />
                            ) : (
                                <RamAvatar
                                    wool={profile.wool}
                                    bandana={profile.bandana}
                                    size={136}
                                    style={styles.avatar}
                                />
                            )}
                        </View>
                        <Pressable
                            style={styles.cameraBadge}
                            accessibilityRole='button'
                            accessibilityLabel='Change photo'
                            onPress={handlePressChangePhoto}
                        >
                            <CameraIcon />
                        </Pressable>
                    </View>
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
                    <GameButton
                        title='Log out'
                        variant='dangerSecondary'
                        isLoading={isLoggingOut}
                        loadingTitle='Logging out…'
                        onPress={handlePressLogOut}
                    >
                        <LogOutIcon />
                    </GameButton>
                    {logOutError !== '' && <FormError message={logOutError} />}
                </View>
            </ScrollView>
            <ChangePhotoSheet
                visible={isPhotoSheetVisible}
                error={photoError}
                canOpenSettings={canOpenSettings}
                isCameraInfoVisible={isCameraInfoVisible}
                onTakePhoto={handlePressTakePhoto}
                onChooseFromGallery={handlePressChooseFromGallery}
                onOpenSettings={handlePressOpenSettings}
                onContinue={handlePressContinue}
                onNotNow={handlePressNotNow}
                onClose={handleClosePhotoSheet}
            />
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
    avatarWrap: {
        width: 136,
        height: 136,
    },
    avatarFrame: {
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
    photo: {
        width: 136,
        height: 136,
        borderRadius: 68,
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
        gap: 8,
        marginTop: 'auto',
        paddingTop: 24,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});
