import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './navigation/RootNavigator';
import RoomsProvider from './contexts/RoomsContext';
import useGameFonts from './hooks/useGameFonts';


export default function App() {
	const fontsLoaded = useGameFonts();

	if (!fontsLoaded) {
		return null;
	}

	return (
		<>
			<StatusBar style='dark' />
			<RoomsProvider>
				<NavigationContainer>
					<RootNavigator />
				</NavigationContainer>
			</RoomsProvider>
		</>
	);
}