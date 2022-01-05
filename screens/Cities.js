import React from "react";
import Footer from "../components/Footer";
import CityCard from "../components/CityCard";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import { useEffect, useState } from "react";

const Cities = (props) => {
  const [filter, setFilter] = useState("");
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    props.fetchCities();
    setLoader(false);
  }, []);

  const filterChanges = (filterInput) => {
    setFilter({ filterInput });
    props.filterCities(filterInput);
  };

  if (loader) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#1d5ccf" />
      </View>
    );
  }else{ 
  return (
    <ScrollView>
      <View style={styles.cities}>
        <Text style={styles.citiesTitle}>Cities</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search your destination..."
          onChange={(e) => {
            filterChanges(e.nativeEvent.text);
          }}
        />
      </View>
      <View>
        {props.filteredCities.length > 0 ? (
          props.filteredCities.map((city) => {
            return (
              <CityCard
                style={styles.cards}
                city={city}
                key={city._id}
                navigation={props.navigation}
              />
            );
          })
        ) : (
          <View>
            <Text>The city was not found</Text>
          </View>
        )}
      </View>
      <Footer />
    </ScrollView>
  );}
};

const styles = StyleSheet.create({
  cities: {
    backgroundColor: "#212529",
  },
  citiesTitle: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    padding: 5,
  },
  input: {
    alignSelf: "center",
    height: 40,
    width: 330,
    margin: 9,
    padding: 10,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "#4d4646",
    borderStyle: "solid",
  },
});

const mapDispatchToProps = {
  fetchCities: citiesActions.fetchCities,
  filterCities: citiesActions.filterCities,
};

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    filteredCities: state.citiesReducer.filteredCities,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
