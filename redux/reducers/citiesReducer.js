const initialState = {
  cities: [],
  itinerary: [],
  filteredCities: [],
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetch":
      return {
        ...state,
        filteredCities: action.payload,
        cities: action.payload,
      };
    case "filterCities":
      const filterCities = state.cities.filter((city) =>
        city.name
          .toLowerCase()
          .startsWith(action.payload.toString().toLowerCase().trim())
      );
      return {
        ...state,
        filteredCities: filterCities,
      };
    case "fetchID":
      return {
        ...state,
        itinerary: action.payload,
      };
    default:
      return state;
  }
};
export default citiesReducer;