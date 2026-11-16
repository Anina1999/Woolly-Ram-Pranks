import { StyleSheet, Text, TextInput, View } from 'react-native';

import IconButton from './IconButton';
import SearchIcon from './SearchIcon';
import SearchTab from './SearchTab';

import { colors, fonts } from '../styles/theme';

export default function FindRoom({ onClose }) {
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.title}>Find a room</Text>
                <IconButton icon='x' size='small' accessibilityLabel='Close' onPress={onClose} />
            </View>
            <View style={styles.tabs}>
                <SearchTab label='By name' selected />
                <SearchTab label='Code' />
            </View>
            <View style={styles.field}>
                <SearchIcon size={20} color={colors.searchIcon} />
                <TextInput
                    placeholder='Room name'
                    placeholderTextColor={colors.placeholder}
                    accessibilityLabel='Room name'
                    style={styles.input}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    title: {
        flex: 1,
        fontFamily: fonts.display,
        fontSize: 24,
        lineHeight: 28,
        color: colors.text,
    },
    tabs: {
        flexDirection: 'row',
        gap: 4,
        padding: 4,
        borderRadius: 16,
        backgroundColor: colors.searchTabs,
    },
    field: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        height: 52,
        paddingHorizontal: 14,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: colors.searchFieldBorder,
        backgroundColor: colors.card,
    },
    input: {
        flex: 1,
        padding: 0,
        fontFamily: fonts.bold,
        fontSize: 16,
        color: colors.text,
    },
});
