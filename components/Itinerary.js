import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Activities from "./Activities";

const Itinerary = (props) => {
  console.log(props.itinerary.photo3);
  const [activities, setactivities] = useState([]);
  const [button, setButton] = useState(false);

  async function getActivities() {
    try {
      let respuesta = await props.getActivitiesItinerary(props.itinerary._id);
      setactivities(respuesta);
    } catch (err) {
      console.log(err);
    }
  }
  const buttonHandler = () => {
    setButton(!button);
    if (!button && !activities.length) {
      getActivities();
    }
  };
  return (
    <ScrollView>
      <View style={styles.ContainerTitle}>
        <Text style={styles.Title}>{props.itinerary.nameItinerary}</Text>
      </View>
      <View style={styles.photoContainer}>
        <Image
          style={styles.photo}
          source={{ uri: `${props.itinerary.photo3}` }}
        />
        <Text>{props.itinerary.namePerson}</Text>
      </View>
      <View style={styles.varios}>
        <Text>Price: {"💵".repeat(props.itinerary.price)}</Text>
        <Text>Durattion: {props.itinerary.durattion}hs</Text>
      </View>
      <View style={styles.hashtag}>
        {props.itinerary.hashtags.map((hashtag, id) => {
          return (
            <Text className="hashtag" key={id}>
              {hashtag}
            </Text>
          );
        })}
      </View>
      <View>
        <View style={{ display: button ? "flex" : "none" }}>
          <View>
            <Text style={styles.activityTitle}>Activities</Text>
            <View style={styles.deco}></View>
          </View>
          <View>
            <Activities activities={activities} />
          </View>
        </View>
      </View>
      <View>
        <Button
          buttonStyle={styles.btnView}
          onPress={buttonHandler}
          title={button ? "View Less" : "View More"}
        />
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = {
  getActivitiesItinerary: itinerariesActions.getActivitiesItinerary,
};

export default connect(null, mapDispatchToProps)(Itinerary);

const styles = StyleSheet.create({
  ContainerTitle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4b636e",
    padding: 10,
  },
  Title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffffff",
  },
  photoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 80,
    padding: 15,
    backgroundColor: "#fbfbfb",
  },
  photo: {
    minWidth: 55,
    height: 57,
    borderRadius: 50,
  },
  varios: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#78909c",
    padding: 10,
  },
  hashtag: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 8,
    backgroundColor: "#a7c0cd",
  },
  btnView: {
    alignSelf: "center",
    width: 100,
    backgroundColor: "black",
    height: 40,
  },
  activityTitle: {
    textAlign: "center",
    backgroundColor: "#17171a",
    color: "#ffffff",
    fontSize: 15,
    padding: 5,
  },
});
