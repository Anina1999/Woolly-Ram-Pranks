import { Text, TextInput, View } from 'react-native';

import IconButton from './IconButton';
import SearchIcon from './SearchIcon';
import SearchTab from './SearchTab';

export default function FindRoom({ onClose }) {
    return (
        <>
            <View>
                <Text>Find a room</Text>
                <IconButton icon='x' size='small' accessibilityLabel='Close' onPress={onClose} />
            </View>
            <View>
                <SearchTab label='By name' selected />
                <SearchTab label='Code' />
            </View>
            <View>
                <SearchIcon />
                <TextInput placeholder='Room name' accessibilityLabel='Room name' />
            </View>
        </>
    );
}
