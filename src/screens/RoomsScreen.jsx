import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import IconButton from '../components/IconButton';

export default function RoomsScreen({ navigation }) {
    const handlePressRoom = () => {
        navigation.navigate('WaitingRoom', { roomId: 1 });
    };

    const handlePressCreateRoom = () => {
        navigation.navigate('CreateRoom');
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <Text style={styles.title}>Rooms</Text>
                <IconButton icon='rotate-cw' />
            </View>
            <View style={styles.panel}>
                <View style={styles.panelInner}>
                    <View style={styles.chips}>
                        <Pressable style={[styles.chip, styles.chipSelected]}>
                            <Text style={[styles.chipText, styles.chipTextSelected]}>All · 6</Text>
                        </Pressable>
                        <Pressable style={styles.chip}>
                            <Text style={styles.chipText}>Waiting · 4</Text>
                        </Pressable>
                        <Pressable style={styles.chip}>
                            <Text style={styles.chipText}>Friends</Text>
                        </Pressable>
                    </View>
                    <Button title='Join my room' onPress={handlePressRoom}/>
                    <Button title='Create room' onPress={handlePressCreateRoom}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8FCDEE',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
        paddingHorizontal: 16,
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
    panel: {
        flex: 1,
        marginTop: 16,
        paddingTop: 4,
        paddingHorizontal: 4,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        backgroundColor: '#8A5A34',
    },
    panelInner: {
        flex: 1,
        overflow: 'hidden',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: '#FBF3E2',
    },
    chips: {
        flexDirection: 'row',
        gap: 8,
        paddingTop: 14,
        paddingHorizontal: 12,
        paddingBottom: 10,
    },
    chip: {
        justifyContent: 'center',
        height: 40,
        paddingHorizontal: 16,
        borderRadius: 999,
        borderWidth: 2,
        borderColor: '#D9C39A',
        backgroundColor: '#FFFBF2',
    },
    chipSelected: {
        borderColor: '#5E3A1E',
        backgroundColor: '#5E3A1E',
    },
    chipText: {
        fontFamily: 'NunitoSans_800ExtraBold',
        fontSize: 14,
        color: '#5E3A1E',
    },
    chipTextSelected: {
        color: '#FBF3E2',
    },
});
