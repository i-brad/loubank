import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardsScreen from "../../../screens/Cards";
import HomeScreen from "../../../screens/Home";
import SearchScreen from "../../../screens/Search";
import { BrandColors } from "../../utils/BrandStyle";
import { BackButton } from "./Buttons";
import Header, { ProfileAvatar } from "./Header";

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerTitle: ({ navigation }) => <Header navigation={navigation} />,
        headerLeft: (props) => <ProfileAvatar {...props} />,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: BrandColors.background,
          elevation: 0,
        },
        tabBarInactiveTintColor: BrandColors.white,
        tabBarActiveTintColor: BrandColors.accent,
        tabBarStyle: {
          backgroundColor: BrandColors.dark,
          height: 82,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 2,
          borderTopColor: BrandColors.accent,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => <Octicons name="home" {...props} size={20} />,
        }}
      />
      <Tab.Screen
        name="Budget"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <SimpleLineIcons name="handbag" {...props} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={CardsScreen}
        options={({ navigation }) => ({
          tabBarIcon: (props) => (
            <Ionicons name="card-outline" {...props} size={20} />
          ),
          headerTitle: "Your Cards",
          headerTitleStyle: {
            color: BrandColors.white,
          },
          headerLeft: (props) => (
            <BackButton
              {...props}
              onPress={() => {
                navigation.goBack();
              }}
              style={{ paddingLeft: 20 }}
            />
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: BrandColors.accent,
            color: BrandColors.dark,
            fontSize: 10,
            top: 24,
          },
        })}
      />
      <Tab.Screen
        name="Message"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <AntDesign name="message1" {...props} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="palette-swatch-outline"
              {...props}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Index" component={BottomTabNavigator} />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: BrandColors.dark,
          },
          headerTitleAlign: "center",
          headerLeft: (props) => (
            <BackButton
              {...props}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
