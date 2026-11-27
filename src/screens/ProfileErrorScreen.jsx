import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FormError from '../components/common/FormError';
import GameButton from '../components/common/GameButton';
import LogOutIcon from '../components/icons/LogOutIcon';
import Ram from '../components/characters/Ram';
import RefreshIcon from '../components/icons/RefreshIcon';
import SceneBackground from '../components/common/SceneBackground';
import ScreenPanel from '../components/common/ScreenPanel';

import useProfileContext from '../contexts/profile-context/useProfileContext';

import useLogOut from '../hooks/useLogOut';

import { colors, fonts } from '../styles/theme';

export default function ProfileErrorScreen() {
    const { isLoading, error, reloadProfile } = useProfileContext();
    const { isLoggingOut, logOutError, handlePressLogOut } = useLogOut();

    const isMissing = error.code === 'PGRST116';
    const title = isMissing ? 'Player not found' : "Couldn't load your player";
    const text = isMissing
        ? 'Your player profile is missing. Log out and try another account.'
        : 'Check your connection and try again.';

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <SceneBackground />
            <ScreenPanel style={styles.panel}>
                <View style={styles.content}>
                    <Ram wool='black' bandana='#E04436' pose='dizzy' size={150} />
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{text}</Text>
                    <View style={styles.buttons}>
                        {!isMissing && (
                            <GameButton
                                title='Try again'
                                isLoading={isLoading}
                                loadingTitle='Trying…'
                                onPress={reloadProfile}
                            >
                                <RefreshIcon />
                            </GameButton>
                        )}
                        <GameButton
                            title='Log out'
                            variant='dangerSecondary'
                            isLoading={isLoggingOut}
                            loadingTitle='Logging out…'
                            onPress={handlePressLogOut}
                        >
                            <LogOutIcon />
                        </GameButton>
                    </View>
                    {logOutError !== '' && <FormError message={logOutError} />}
                </View>
            </ScreenPanel>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sky,
    },
    panel: {
        marginTop: 96,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 28,
        paddingBottom: 20,
    },
    title: {
        textAlign: 'center',
        fontFamily: fonts.display,
        fontSize: 26,
        lineHeight: 30,
        color: colors.errorTitle,
    },
    text: {
        textAlign: 'center',
        fontFamily: fonts.regular,
        fontSize: 15,
        lineHeight: 22,
        color: colors.muted,
    },
    buttons: {
        gap: 10,
        width: 200,
        marginTop: 6,
    },
});
