import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();


const Layout = () => {
  const [fontsLoaded] = useFonts({
    'DMSans-Bold': require("../assets/fonts/DMSans-Bold.ttf"),
    'DMSans-Medium': require("../assets/fonts/DMSans-Medium.ttf"),
    'DMSans-Regular': require("../assets/fonts/DMSans-Regular.ttf"),
  });

  
  const onLayoutRootView = useCallback(async() => {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack onLayout={onLayoutRootView}>
    </Stack>
  );
};

export default Layout;
