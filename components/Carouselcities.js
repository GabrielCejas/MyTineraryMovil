import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";
const dimensions = Dimensions.get("screen");

const Carouselcities = () => {
  const arrayCountries = [
    {
      name: "Berlin",
      country: "Germany",
      photo: require("../assets/berlin.jpg"),
    },
    {
      name: "London",
      country: "England",
      photo: require("../assets/londres.jpg"),
    },
    { name: "Paris", country: "France", photo: require("../assets/paris.jpg") },
    {
      name: "Moscow",
      country: "Russia",
      photo: require("../assets/moscu.jpg"),
    },
    {
      name: "Lisbon",
      country: "Portugal",
      photo: require("../assets/lisboa.jpg"),
    },
    { name: "Tokyo", country: "Japan", photo: require("../assets/tokio.jpg") },
    {
      name: "Vienna",
      country: "Austria",
      photo: require("../assets/viena.jpg"),
    },
    {
      name: "Washington",
      country: "EEUU",
      photo: require("../assets/washinton.jpg"),
    },
    {
      name: "Nueva York",
      country: "EEUU",
      photo: require("../assets/nuevaYork.jpg"),
    },
    {
      name: "Athens",
      country: "Greece",
      photo: require("../assets/grecia.jpg"),
    },
    {
      name: "Madrid",
      country: "Spain",
      photo: require("../assets/madrid.jpg"),
    },
    {
      name: "Zurich",
      country: "Switzerland ",
      photo: require("../assets/zurich.jpg"),
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <ImageBackground style={styles.cityImage} source={item.photo}>
        <Text style={styles.cityName}>{item.name}</Text>
      </ImageBackground>
    );
  };
  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        data={arrayCountries}
        loop={true}
        autoplay={true}
        layout={"default"}
        renderItem={renderItem}
        sliderWidth={900}
        itemWidth={450}
      />
    </View>
  );
};

export default Carouselcities;

const styles = StyleSheet.create({
  cityName: {
    backgroundColor: "rgba(0,0,0,0.3)",
    width: "100%",
    textAlign: "center",
    color: "white",
    fontSize: 20,
    paddingVertical: 10,
  },
  cityImage: {
    width: "100%",
    height: Dimensions.get("screen").height * 0.4,
    borderRadius: 7,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
});
