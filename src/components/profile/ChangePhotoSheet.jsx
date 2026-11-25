import { Pressable, StyleSheet, Text, View } from 'react-native';

import CameraIcon from '../icons/CameraIcon';
import FormError from '../common/FormError';
import GalleryIcon from '../icons/GalleryIcon';
import GameButton from '../common/GameButton';
import ModalPanel from '../common/ModalPanel';
import PhotoOption from './PhotoOption';

import { colors, fonts } from '../../styles/theme';

export default function ChangePhotoSheet({
    visible,
    error,
    canOpenSettings,
    isCameraInfoVisible,
    onTakePhoto,
    onChooseFromGallery,
    onOpenSettings,
    onContinue,
    onNotNow,
    onClose,
}) {
    return (
        <ModalPanel visible={visible} variant='sheet' onClose={onClose} style={styles.sheet}>
            <View style={styles.handle} />
            {isCameraInfoVisible ? (
                <>
                    <Text style={styles.title}>Camera access</Text>
                    <Text style={styles.cameraInfo}>
                        Woolly Ram Pranks needs access to your camera to take your profile photo. Allow access?
                    </Text>
                    <GameButton title='Continue' onPress={onContinue} />
                    <GameButton title='Not now' variant='secondary' onPress={onNotNow} />
                </>
            ) : (
                <>
                    <Text style={styles.title}>Change photo</Text>
                    <View style={styles.options}>
                        <PhotoOption
                            icon={<CameraIcon />}
                            title='Take a photo'
                            subtitle='Use your camera'
                            onPress={onTakePhoto}
                        />
                        <View style={styles.divider} />
                        <PhotoOption
                            icon={<GalleryIcon />}
                            variant='accent'
                            title='Choose from gallery'
                            subtitle='Pick a photo from your phone'
                            onPress={onChooseFromGallery}
                        />
                    </View>
                    {error !== '' && (
                        <View>
                            <FormError message={error} />
                            {canOpenSettings && (
                                <Pressable
                                    style={({ pressed }) => [
                                        styles.settingsLink,
                                        pressed && styles.settingsLinkPressed,
                                    ]}
                                    accessibilityRole='button'
                                    onPress={onOpenSettings}
                                >
                                    <Text style={styles.settingsLinkText}>Open settings</Text>
                                </Pressable>
                            )}
                        </View>
                    )}
                    <GameButton title='Cancel' variant='danger' onPress={onClose} />
                </>
            )}
        </ModalPanel>
    );
}

const styles = StyleSheet.create({
    sheet: {
        gap: 14,
        paddingTop: 10,
        paddingBottom: 24,
    },
    handle: {
        alignSelf: 'center',
        width: 44,
        height: 5,
        borderRadius: 3,
        backgroundColor: colors.sheetHandle,
    },
    title: {
        fontFamily: fonts.display,
        fontSize: 24,
        lineHeight: 28,
        color: colors.text,
    },
    cameraInfo: {
        fontFamily: fonts.regular,
        fontSize: 15,
        lineHeight: 22,
        color: colors.modalText,
    },
    settingsLink: {
        alignSelf: 'flex-start',
        justifyContent: 'center',
        minHeight: 44,
        marginLeft: 22,
    },
    settingsLinkPressed: {
        opacity: 0.6,
    },
    settingsLinkText: {
        fontFamily: fonts.extraBold,
        fontSize: 14,
        color: colors.linkText,
        textDecorationLine: 'underline',
    },
    options: {
        overflow: 'hidden',
        borderRadius: 18,
        borderWidth: 2,
        borderColor: colors.cardBorder,
        backgroundColor: colors.card,
    },
    divider: {
        height: 2,
        marginHorizontal: 14,
        backgroundColor: colors.cardDivider,
    },
});
