import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carouselcities from "../components/Carouselcities";
import Footer from "../components/Footer";

const Home = (props) => {
  let imgHero = require("../assets/Hero.jpg");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={imgHero}
            resizeMode="cover"
            style={styles.image}
          >
            <Text style={styles.text}>Find your perfect trip</Text>
            <Text style={styles.text}>
              designed by insiders who know and love their cities!!
            </Text>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("Cities", { screen: "cities" })
              }
            >
              <View style={styles.callToAction}>
                <Text style={styles.callToActionText}>Search Cities!!</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.tituloCarrucelCont}>
          <Text style={styles.tituloCarrucel}>Popular MyTineraries</Text>
        </View>
        <Carouselcities />
        <Footer />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 800,
  },
  text: {
    color: "white",
    fontSize: 22,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "#141414",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  callToAction: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 130,
    paddingVertical: 10,
    borderColor: "#138cd3",
    backgroundColor: "#6e7274",
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 5,
    marginVertical: 14,
    textAlign: "center",
    opacity: 0.6,
  },
  callToActionText: {
    color: "#212529",
    textShadowColor: "#ffffff",
    fontWeight: "700",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "#ffffff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  tituloCarrucelCont: {
    backgroundColor: "#141414",
    height: 50,
    justifyContent: "center",
  },
  tituloCarrucel: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
  },
});
