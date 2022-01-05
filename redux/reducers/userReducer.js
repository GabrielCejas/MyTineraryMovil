const userReducer = (
  state = { token: null, firstName: null, photo: null, _id: null },
  action
) => {
  switch (action.type) {
    case "SignUp":
      return {
        token: action.payload.token,
        _id: action.payload._id,
        firstName: action.payload.firstName,
        photo: action.payload.photo,
      };
    case "LogIn":

      return {
        token: action.payload.token,
        _id:action.payload._id,
        firstName: action.payload.firstName,
        photo: action.payload.photo,
      };
    case "logOut":
      return {
        token: null,
        _id:null,
        firstName: null,
        photo: null,
      };
    default:
      return state;
  }
};
export default userReducer;
