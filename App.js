import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
  AnnieUseYourTelescope_400Regular,
} from "@expo-google-fonts/dev";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { ContainerWithBackground } from "./src/components/ContainerWithBackground";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
    AnnieUseYourTelescope_400Regular,
  });

  return (
    <ContainerWithBackground>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        {fontsLoaded ? <Routes /> : <Loading />}
      </SafeAreaView>
    </ContainerWithBackground>
  );
}
