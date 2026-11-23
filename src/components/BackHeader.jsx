import { StyleSheet, View } from 'react-native';

import BackIcon from './icons/BackIcon';
import IconButton from './IconButton';

export default function BackHeader({ onBack, children }) {
    return (
        <View style={styles.header}>
            <IconButton onPress={onBack}>
                <BackIcon />
            </IconButton>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginTop: 8,
        paddingHorizontal: 16,
    },
});
