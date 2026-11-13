import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

export default function RoomsScreen({ navigation }) {
    const handlePressRoom = () => {
        navigation.navigate('WaitingRoom', { roomId: 1 });
    };

    const handlePressCreateRoom = () => {
        navigation.navigate('CreateRoom');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Rooms</Text>
                <Pressable style={styles.refreshButton}>
                    <Feather name='refresh-cw' size={22} color='#5E3A1E' />
                </Pressable>
            </View>
            <View>
                <Pressable>
                    <Text>All · 6</Text>
                </Pressable>
                <Pressable>
                    <Text>Waiting · 4</Text>
                </Pressable>
            </View>
            <Button title='Join my room' onPress={handlePressRoom}/>
            <Button title='Create room' onPress={handlePressCreateRoom}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#8FCDEE',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    title: {
        fontFamily: 'LilitaOne_400Regular',
        fontSize: 32,
        lineHeight: 36,
        color: '#FFFFFF',
        textShadowColor: '#2E2117',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
    },
    refreshButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        borderRadius: 999,
        borderWidth: 3,
        borderColor: '#8A5A34',
        backgroundColor: '#FBF3E2',
    },
});
