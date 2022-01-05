const itinerariesReducer = (state = { itinerariesCity: [] }, action) => {
  switch (action.type) {
    case "GetItineraries":
      return {
        ...state,
        itinerariesCity: action.payload,
      };
    default:
      return state;
  }
};

export default itinerariesReducer;
