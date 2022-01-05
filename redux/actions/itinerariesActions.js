import axios from "axios";
const itinerariesActions = {
  getItinerariesCity: (id) => {
    return async (dispatch, getState) => {
      let res = await axios.get(
        `https://mytinerary-cejasgabriel.herokuapp.com/api/itineraries/${id}`
      );
      if (!res.data.success) {
        throw new Error("Database problems");
      }
      dispatch({ type: "GetItineraries", payload: res.data.response });
    };
  },

  getActivitiesItinerary: (id) => {
    return async () => {
      try {
        let res = await axios.get(
          `https://mytinerary-cejasgabriel.herokuapp.com/api/activities/${id}`
        );
        if (res.data.success) {
          return res.data.response;
        }
      } catch (error) {
        console.log(error);
      }
    };
  },
  addCommentItinerary: (id, comment, token) => {
    return async () => {
      try {
        let response = await axios.put(
          `https://mytinerary-cejasgabriel.herokuapp.com/api/itinerary/comments/${id}`,
          { comment, type: "addComment" },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        return response.data.response;
      } catch (error) {
        console.log(error);
      }
    };
  },
  editComment: (id, comment, token) => {
    return async () => {
      try {
        let response = await axios.put(
          `https://mytinerary-cejasgabriel.herokuapp.com/api/itinerary/comments/${id}`,
          { comment, type: "editComment" },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(response);
        if (response.data.success)
          return { success: true, res: response.data.response };
      } catch (error) {
        console.log(error);
      }
    };
  },
  deleteComment: (id, token, idComment) => {
    return async () => {
      try {
        let response = await axios.put(
          `https://mytinerary-cejasgabriel.herokuapp.com/api/itinerary/comments/${id}`,
          { idComment, type: "deleteComment" },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.data.success) {
          return response.data;
        }
      } catch (error) {
        console.log(error);
      }
    };
  },

  likeItinerary: (id, token) => {
    return async () => {
      try {
        let response = await axios.put(
          `https://mytinerary-cejasgabriel.herokuapp.com/api/itinerary/like/${id}`,
          {},
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        return response;
      } catch (error) {
        console.log(error);
      }
    };
  },
};

export default itinerariesActions;
