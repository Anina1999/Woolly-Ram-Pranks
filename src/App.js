import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import RootNavigator from './navigation/RootNavigator';

import AuthProvider from './contexts/auth-context/AuthProvider';
import ProfileProvider from './contexts/profile-context/ProfileProvider';
import RoomsProvider from './contexts/rooms-context/RoomsProvider';

import useGameFonts from './hooks/useGameFonts';


export default function App() {
	const fontsLoaded = useGameFonts();

	if (!fontsLoaded) {
		return null;
	}

	return (
		<>
			<StatusBar style='dark' />
			<AuthProvider>
				<ProfileProvider>
					<RoomsProvider>
						<NavigationContainer>
							<RootNavigator />
						</NavigationContainer>
					</RoomsProvider>
				</ProfileProvider>
			</AuthProvider>
		</>
	);
}