import { Text, View } from 'react-native';

export default function SettingsSection({ title, children }) {
    return (
        <View>
            <Text>{title}</Text>
            <View>
                {children}
            </View>
        </View>
    );
}
