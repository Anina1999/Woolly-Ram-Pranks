import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './navigation/RootNavigator';
import useGameFonts from './hooks/useGameFonts';


export default function App() {
	const fontsLoaded = useGameFonts();

	if (!fontsLoaded) {
		return null;
	}

	return (
		<>
			<StatusBar style='dark' />
			<NavigationContainer>
				<RootNavigator />
			</NavigationContainer>
		</>
	);
}