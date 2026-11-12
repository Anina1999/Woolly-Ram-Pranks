import { useFonts } from 'expo-font';
import { LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';
import { NunitoSans_400Regular, NunitoSans_800ExtraBold } from '@expo-google-fonts/nunito-sans';

export default function useGameFonts() {
    const [fontsLoaded] = useFonts({
        LilitaOne_400Regular,
        NunitoSans_400Regular,
        NunitoSans_800ExtraBold,
    });

    return fontsLoaded;
}
