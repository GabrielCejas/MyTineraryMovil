import { createDrawerNavigator, CustomDrawerContent } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Cities from "../screens/Cities";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import CitiesNavStack from "./CitiesNav";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";

const CitiesNav = createDrawerNavigator();

const Navigator = (props) => {
  console.log(props);
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
        component={CitiesNavStack}
        options={{
          title: "MyTinerary",
          headerShown: false,
        }}
      />
      <CitiesNav.Screen name="Cities" component={Cities} />
      <CitiesNav.Screen name="SignIn" component={SignIn} />
      <CitiesNav.Screen name="SignUp" component={SignUp} />
    </CitiesNav.Navigator>
  );
};

const mapDispatchToProps = {
  logIn: userActions.logIn,
  signUp: userActions.signUp,
};

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
    firstName: state.userReducer.firstName,
    photo: state.userReducer.photo,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
