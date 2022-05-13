import { END_LOADING, SHOW_NOTIFICATION, START_LOADING } from "./constants";
import * as api from "../api/index.js";

export const getNotification = (limit, offset) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getNotification(limit, offset);
    dispatch({ type: SHOW_NOTIFICATION, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    if (error.response.data.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error);
  }
};
