import { Text, View } from 'react-native';

import GameButton from '../common/GameButton';
import ModalPanel from '../common/ModalPanel';
import PhotoOption from './PhotoOption';

export default function ChangePhotoSheet({ visible, onClose }) {
    return (
        <ModalPanel visible={visible} variant='sheet' onClose={onClose}>
            <Text>Change photo</Text>
            <View>
                <PhotoOption title='Take a photo' subtitle='Use your camera' />
                <PhotoOption title='Choose from gallery' subtitle='Pick a photo from your phone' />
            </View>
            <GameButton title='Cancel' variant='danger' onPress={onClose} />
        </ModalPanel>
    );
}
