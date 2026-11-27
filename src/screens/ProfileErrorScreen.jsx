import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FormError from '../components/common/FormError';
import GameButton from '../components/common/GameButton';
import Ram from '../components/characters/Ram';

import useProfileContext from '../contexts/profile-context/useProfileContext';

import useLogOut from '../hooks/useLogOut';

export default function ProfileErrorScreen() {
    const { isLoading, error, reloadProfile } = useProfileContext();
    const { isLoggingOut, logOutError, handlePressLogOut } = useLogOut();

    const isMissing = error.code === 'PGRST116';
    const title = isMissing ? 'Player not found' : "Couldn't load your player";
    const text = isMissing
        ? 'Your player profile is missing. Log out and try another account.'
        : 'Check your connection and try again.';

    return (
        <SafeAreaView>
            <Ram wool='black' bandana='#E04436' pose='dizzy' size={150} />
            <Text>{title}</Text>
            <Text>{text}</Text>
            {!isMissing && (
                <GameButton
                    title='Try again'
                    isLoading={isLoading}
                    loadingTitle='Trying…'
                    onPress={reloadProfile}
                />
            )}
            <GameButton
                title='Log out'
                isLoading={isLoggingOut}
                loadingTitle='Logging out…'
                onPress={handlePressLogOut}
            />
            {logOutError !== '' && <FormError message={logOutError} />}
        </SafeAreaView>
    );
}
