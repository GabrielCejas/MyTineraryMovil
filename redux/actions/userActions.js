import axios from "axios";

const userActions = {
  logIn: (form) => {
    return async (dispatch, getState) => {
      try {
        let response = await axios.post(
          "https://mytinerary-cejasgabriel.herokuapp.com/api/user/signin",
          {
            ...form,
          }
        );
        if (response.data.success) {
          dispatch({ type: "LogIn", payload: response.data.response });
        }
        return response;
      } catch (error) {
        console.log(error);
      }
    };
  },
  signUp: (form) => {
    return async (dispatch, getState) => {
      try {
        let response = await axios.post(
          "https://mytinerary-cejasgabriel.herokuapp.com/api/user/signup",
          {
            ...form,
          }
        );
        if (response.data.success) {
          dispatch({ type: "SignUp", payload: response.data.response });
        }
        return response;
      } catch (error) {
        console.log(error);
      }
    };
  },
  logOut: () => {
    return (dispatch, getState) => {
      dispatch({ type: "logOut" });
    };
  },

  logInF5: (token) => {
    return async (dispatch, getState) => {
      try {
        let response = await axios.get(
          "https://mytinerary-cejasgabriel.herokuapp.com/api/user/verifyToken",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        dispatch({
          type: "SignUp",
          payload: {
            token,
            firstName: response.data.firstName,
            photo: response.data.photo,
            _id: response.data._id,
          },
        });
      } catch (error) {
        return dispatch({ type: "logOut" });
      }
    };
  },
};

export default userActions;
