import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
const HEIGHT = Dimensions.get("window").height;
const Footer = () => {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.text}>
        MyTinerary Proyect 2021 - All Rights Reserved
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: "#ffffff",
    padding: 15,
    textAlign: "center",
    fontSize: 15,
  },
});
