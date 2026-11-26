import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackHeader from '../common/BackHeader';

export default function AuthLayout({ title, subtitle, onBack, children }) {
    return (
        <SafeAreaView>
            <BackHeader onBack={onBack}>
                <Text>Woolly Ram Pranks</Text>
            </BackHeader>
            <View>
                <View>
                    <Text>{title}</Text>
                    <Text>{subtitle}</Text>
                </View>
                {children}
            </View>
        </SafeAreaView>
    );
}
