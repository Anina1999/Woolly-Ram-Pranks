import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PodiumPlace from '../components/leaderboard/PodiumPlace';
import SegmentTab from '../components/common/SegmentTab';

import leaderboard from '../data/leaderboard';

import formatTime from '../utils/formatTime';

export default function LeaderboardScreen() {
    const [first, second, third] = leaderboard.players;

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
            <View>
                <PodiumPlace player={second} place={2} value={formatTime(second.bestTimeSeconds)} />
                <PodiumPlace player={first} place={1} value={formatTime(first.bestTimeSeconds)} />
                <PodiumPlace player={third} place={3} value={formatTime(third.bestTimeSeconds)} />
            </View>
        </SafeAreaView>
    );
}
