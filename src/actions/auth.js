import * as api from "../api/index";
import { userData } from "../utils/config";
import { AUTH, CREATE_USER, REFRESHTOKEN } from "./constants";

export const signin =
  (formData, openSnackbar, setLoading, resetForm) => async (dispatch) => {
    try {
      //login the user
      setLoading(true);
      const { data } = await api.signIn(formData);
      dispatch({ type: AUTH, data });
      resetForm();
      setLoading(false);
      openSnackbar("Login successful");
      window.location.href = "/invoices";
    } catch (error) {
      openSnackbar(error?.response?.data?.message);
      setLoading(false);
    }
  };

export const logout = (token) => async (dispatch) => {
  try {
    //logout the user
    const { data } = await api.logout(token);
    dispatch({ type: AUTH, data });
    localStorage.removeItem("profile");
    window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
};

export const refreshToken = (token) => async (dispatch) => {
  try {
    const { data } = await api.refreshToken(token);
    delete userData.tokens;

    userData.tokens = data;
    dispatch({ type: REFRESHTOKEN, userData });
  } catch (error) {
    if (error.response.data.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error);
  }
};

export const createUsers =
  (user, openSnackbar, setLoading, setCreated, formik) => async (dispatch) => {
    try {
      //Sign up the user
      const { data } = await api.createUser(user);
      dispatch({ type: CREATE_USER, payload: data });
      openSnackbar("User Created");
      setLoading(false);
      setCreated(true);
      formik.resetForm();
      // window.location.reload();
    } catch (error) {
      if (error.response.data.code === 401) {
        localStorage.removeItem("profile");
        window.location.reload();
      }
      console.log(error?.response?.data?.message);
      setLoading(false);
    }
  };

export const forgot = (formData, openSnackbar) => async (dispatch) => {
  try {
    await api.forgot(formData);
  } catch (error) {
    openSnackbar(error?.response?.data?.message);
  }
};

export const reset = (formData, openSnackbar, history) => async (dispatch) => {
  try {
    await api.reset(formData.token, formData.password);
    history.push("/invoices");
    openSnackbar("Password Changed");
  } catch (error) {
    openSnackbar(error?.response?.data?.message);
  }
};
