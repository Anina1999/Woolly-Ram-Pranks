import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SegmentTab from '../components/common/SegmentTab';

export default function LeaderboardScreen() {
    return (
        <SafeAreaView>
            <View>
                <Text>Leaderboard</Text>
                <Text>Meadow Farm</Text>
            </View>
            <View>
                <SegmentTab label='Best time' selected={true} />
                <SegmentTab label='Most wins' selected={false} />
            </View>
        </SafeAreaView>
    );
}
