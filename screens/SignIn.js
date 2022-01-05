import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";

const SignIn = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = async () => {
    if (form.email === "" || form.password === "") {
      ToastAndroid.showWithGravityAndOffset(
        "⚠️ All fields must be completed",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        60
      );
    } else {
      try {
        let res = await props.logIn(form);
        console.log(form);
        if (!res.data.success) {
          ToastAndroid.showWithGravityAndOffset(
            "⚠️ Invalid password or email",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            60
          );
        } else {
          ToastAndroid.showWithGravityAndOffset(
            "Welcome a MyTinerary 👋! ",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            60
          );
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  };
  return (
    <ScrollView>
      <ImageBackground
        style={styles.signInBack}
        source={require("../assets/signin.jpg")}
        resizeMode="cover"
      >
        <Text style={styles.signInTitle}>Sign up!</Text>
        <View style={styles.inputConteiner}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.nativeEvent.text })}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.nativeEvent.text })}
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleChange}
          >
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.tituloSignIn}>Don't have an account?</Text>
          <TouchableOpacity
            style={styles.buttonSignIn}
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate("SignUp")}
          >
            <Text style={styles.textSignIn}>Sign up here</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const mapDispatchToProps = {
  logIn: userActions.logIn,
};

export default connect(null, mapDispatchToProps)(SignIn);

const styles = StyleSheet.create({
  signInBack: {
    width: "100%",
    height: 695,
    alignItems: "center",
  },
  input: {
    height: 45,
    width: 260,
    margin: 8,
    padding: 10,
    borderRadius: 2,
    borderColor: "#504747",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
  },
  signInTitle: {
    marginTop: 60,
    padding: 10,
    alignSelf: "center",
    color: "#1d1b1b",
    fontSize: 35,
    textAlign: "center",
  },

  inputConteiner: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    marginTop: 15,
    backgroundColor: "black",
    width: 150,
    height: 50,
    zIndex: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  signInText: {
    padding: 8,
    fontSize: 17,
    color: "gray",
    textAlign: "center",
  },
  tituloSignIn: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.3,
    color: "#ffffff",
    textShadowColor: "#020202",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  textCont: {
    marginVertical: 10,
  },
  buttonSignIn: {
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    height: 40,
    zIndex: 1,
  },
  textSignIn: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.3,
    color: "#ffffff",
    borderBottomWidth: 2,
    textShadowColor: "#020202",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
});
