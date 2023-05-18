import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import RootNavigator from "./lib/components/common/Navigators";
import { BrandColors } from "./lib/utils/BrandStyle";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: BrandColors.dark,
    background: "#2C2C2C",
    text: BrandColors.white,
  },
};

export default function App() {
  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <RootNavigator />
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}
