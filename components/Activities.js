import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Carousel from "react-native-snap-carousel";

const Activities = (props) => {
  const renderItem = ({ item }) => {
    return (
      <ImageBackground style={styles.activities} source={{ uri: item.photo }}>
        <Text style={styles.cityName}>{item.title}</Text>
      </ImageBackground>
    );
  };
  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        data={props.activities}
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

export default Activities;

const styles = StyleSheet.create({
  activities: {
      height:200
  },
  cityName:{
      fontSize:20,
      color:"#ffffff",
      textAlign:"center",
      textShadowColor: "#020202",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 2,
  }
});
