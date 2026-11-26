import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';

import GameButton from '../components/common/GameButton';

export default function WelcomeScreen({ navigation }) {
    const handlePressLogIn = () => {
        navigation.navigate('Login');
    };

    const handlePressRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <SafeAreaView>
            <View>
                <Text>Woolly Ram Pranks</Text>
                <Text>Rams. Sheep. Mischief.</Text>
            </View>
            <View>
                <Text>Sneak, charm and prank with up to 4 friends.</Text>
                <GameButton title='Log in' onPress={handlePressLogIn} />
                <GameButton title='Register' variant='secondary' onPress={handlePressRegister} />
                <Text>v{Constants.expoConfig.version} · Terms · Privacy</Text>
            </View>
        </SafeAreaView>
    );
}
