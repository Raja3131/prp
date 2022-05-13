import { AUTH, LOGOUT, REFRESHTOKEN, CREATE_USER } from "../actions/constants";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      return { ...state, authData: null };
    case CREATE_USER:
      return { ...state, authData: action?.data };
    case REFRESHTOKEN:
      localStorage.setItem("profile", JSON.stringify({ ...action?.userData }));
      return { ...state, authData: action?.userData };
    default:
      return state;
  }
};

export default authReducer;
