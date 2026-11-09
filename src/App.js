import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<View>
					<Text>Woolly Ram Pranks</Text>
				</View>
			</NavigationContainer>
		</>
	);
}