import React from "react";
import { StyleSheet, Text, Pressable, ImageBackground } from "react-native";

const CityCard = (props) => {
  return (
    <Pressable
      onPress={() => props.navigation.navigate('City', { id: props.city._id })}
      style={styles.container}
    >
      <ImageBackground
        source={{ uri: props.city.photo }}
        style={styles.containerCity}
      >
        <Text style={styles.text}>{props.city.name}</Text>
      </ImageBackground>
    </Pressable>
  );
};

export default CityCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerCity: {
    width: 322,
    height: 350,
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: 10,
  },
  cityTitle: {
    padding: 10,
    color: "whitesmoke",
    fontSize: 38,
    textAlign: "center",
    fontFamily: "ZillaSlabHighlight_700Bold",
    textShadowColor: "#000",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 5,
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "#000000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
});
