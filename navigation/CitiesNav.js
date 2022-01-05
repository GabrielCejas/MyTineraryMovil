import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import Home from "../screens/Home";
import Cities from "../screens/Cities";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import City from "../screens/City";

const CitiesNav = createNativeStackNavigator();

const Navigator = (props) => {
  return (
    <CitiesNav.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#212529",
        },
        headerTintColor: "#ffffff",
      }}
    >
      <CitiesNav.Screen
        name="Home"
        component={Home}
        options={{
          title: "MyTinerary",
          headerRight: () => (
            <Button
              onPress={() => props.navigation.openDrawer()}
              title="Menu"
              color="#000000"
            />
          ),
        }}
      />
      <CitiesNav.Screen name="Cities" component={Cities} />
      <CitiesNav.Screen name="City" component={City} />
      <CitiesNav.Screen name="SignIn" component={SignIn} />
      <CitiesNav.Screen name="SignUp" component={SignUp} />
    </CitiesNav.Navigator>
  );
};

export default Navigator;
