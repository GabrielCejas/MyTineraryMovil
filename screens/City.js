import React, { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Itinerary from "../components/Itinerary";
import Footer from "../components/Footer";
const City = (props) => {
  useEffect(() => {
    let myListener = props.navigation.addListener("focus", () => {
      props.fetchCitiesID(props.route.params.id);
    });
    return () => {
      props.navigation.removeListener(myListener);
    };
  }, []);
  return (
    <ScrollView>
      <View style={styles.conteiner}>
        <Text style={styles.titulo}>
          Available Itineraries for{" "}
          {props.itinerary.length && props.itinerary[0].country}
        </Text>
      </View>
      {props.itinerary.length > 0 ? (
        props.itinerary.map((itinerary) => {
          return <Itinerary itinerary={itinerary} key={itinerary._id} />;
        })
      ) : (
        <View style={styles.Containererror}>
          <Text style={styles.TextoError}>
            There are no Itineraries yet for this city.
          </Text>
        </View>
      )}
      <Footer/>
    </ScrollView>
  );
};

const mapDispatchToProps = {
  fetchCitiesID: citiesActions.fetchCitiesID,
  likeItinerary: itinerariesActions.likeItinerary,
};

const mapStateToProps = (state) => {
  return {
    itinerary: state.citiesReducer.itinerary,
    token: state.userReducer.token,
    _id: state.userReducer._id,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(City);

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: "#141414",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    color: "#ffffff",
    padding: 15,
    fontSize: 20,
  },
  Containererror: {
    backgroundColor: "#dcdf50",
    padding: 30,
    margin: 5,
    borderRadius: 10,
  },
  TextoError: {
    textAlign: "center",
    fontSize: 18,
  },
});
