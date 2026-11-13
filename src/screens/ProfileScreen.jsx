import { Pressable, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../styles/theme';

export default function ProfileScreen({ navigation }) {
    const handlePressLogOut = () => {
        // simulates log out by leading to lobby cause we don't have auth screens and logic yet
        //TODO auth screens and logic
        navigation.navigate('Lobby');
    };

    return (
        <SafeAreaView>
            <Text>Profile</Text>
            <Pressable onPress={handlePressLogOut}>
                <Text style={styles.logOutText}>Log out</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    logOutText: {
        color: colors.danger,
    },
});
