import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';

import GameButton from '../components/common/GameButton';
import Panel from '../components/common/Panel';
import Ram from '../components/characters/Ram';
import SceneBackground from '../components/common/SceneBackground';
import Sheep from '../components/characters/Sheep';

import { colors, fonts } from '../styles/theme';

export default function WelcomeScreen({ navigation }) {
    const handlePressLogIn = () => {
        navigation.navigate('Login');
    };

    const handlePressRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <SafeAreaView style={styles.container}>
            <SceneBackground />
            <View style={styles.titleGroup}>
                <View style={styles.sign}>
                    <Text style={styles.gameName}>Woolly Ram Pranks</Text>
                </View>
                <View style={styles.ribbon}>
                    <Text style={styles.ribbonText}>Team. Scheme. Baa-lieve.</Text>
                </View>
            </View>
            <View style={styles.stage}>
                <View style={styles.characters}>
                    <View style={styles.happySheep}>
                        <Sheep size={130} />
                    </View>
                    <View style={styles.idleSheep}>
                        <Sheep size={110} />
                    </View>
                    <View style={styles.blackRam}>
                        <Ram wool='black' bandana='#E04436' pose='idle' size={250} />
                    </View>
                </View>
            </View>
            <Panel style={styles.panel}>
                <Text style={styles.text}>Sneak, charm and prank with friends or players from around the world.</Text>
                <GameButton title='Log in' onPress={handlePressLogIn} />
                <GameButton title='Register' variant='secondary' onPress={handlePressRegister} />
                <Text style={styles.version}>v{Constants.expoConfig.version} · Terms · Privacy</Text>
            </Panel>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sky,
    },
    titleGroup: {
        alignItems: 'center',
        gap: 10,
        marginTop: 36,
        paddingHorizontal: 16,
    },
    sign: {
        paddingTop: 10,
        paddingHorizontal: 26,
        paddingBottom: 14,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: colors.frame,
        backgroundColor: colors.frameDark,
        boxShadow: '0px 6px 12px rgba(46, 33, 23, 0.35)',
        transform: [{ rotate: '-2deg' }],
    },
    gameName: {
        fontFamily: fonts.display,
        fontSize: 46,
        lineHeight: 50,
        letterSpacing: 1,
        textAlign: 'center',
        color: colors.signText,
        textShadowColor: colors.text,
        textShadowOffset: { width: 0, height: 3 },
        textShadowRadius: 1,
    },
    ribbon: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 6,
        borderBottomWidth: 3,
        borderBottomColor: colors.ribbonEdge,
        backgroundColor: colors.ribbon,
        transform: [{ rotate: '1deg' }],
    },
    ribbonText: {
        fontFamily: fonts.display,
        fontSize: 16,
        letterSpacing: 0.5,
        color: colors.ribbonText,
    },
    stage: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    characters: {
        width: 360,
    },
    happySheep: {
        position: 'absolute',
        bottom: 84,
        left: 196,
    },
    idleSheep: {
        position: 'absolute',
        bottom: 74,
        left: 10,
        transform: [{ scaleX: -1 }],
    },
    blackRam: {
        position: 'absolute',
        bottom: -86,
        left: 50,
    },
    panel: {
        gap: 12,
        marginHorizontal: 16,
        marginBottom: 16,
        paddingTop: 18,
        paddingHorizontal: 16,
        paddingBottom: 16,
        borderRadius: 24,
    },
    text: {
        fontFamily: fonts.regular,
        fontSize: 15,
        lineHeight: 21,
        textAlign: 'center',
        color: colors.muted,
    },
    version: {
        fontFamily: fonts.regular,
        fontSize: 12,
        textAlign: 'center',
        color: colors.muted,
    },
});
