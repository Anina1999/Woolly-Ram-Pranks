import { StyleSheet, Text, View } from 'react-native';

import CameraIcon from '../icons/CameraIcon';
import FormError from '../common/FormError';
import GalleryIcon from '../icons/GalleryIcon';
import GameButton from '../common/GameButton';
import ModalPanel from '../common/ModalPanel';
import PhotoOption from './PhotoOption';

import { colors, fonts } from '../../styles/theme';

export default function ChangePhotoSheet({ visible, error, onChooseFromGallery, onClose }) {
    return (
        <ModalPanel visible={visible} variant='sheet' onClose={onClose} style={styles.sheet}>
            <View style={styles.handle} />
            <Text style={styles.title}>Change photo</Text>
            <View style={styles.options}>
                <PhotoOption icon={<CameraIcon />} title='Take a photo' subtitle='Use your camera' />
                <View style={styles.divider} />
                <PhotoOption
                    icon={<GalleryIcon />}
                    variant='accent'
                    title='Choose from gallery'
                    subtitle='Pick a photo from your phone'
                    onPress={onChooseFromGallery}
                />
            </View>
            {error !== '' && <FormError message={error} />}
            <GameButton title='Cancel' variant='danger' onPress={onClose} />
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
