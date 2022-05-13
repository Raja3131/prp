import * as api from "../api/index";
import {
  END_LOADING,
  VENDOR_CREATED,
  START_LOADING,
  SET_VENDOR_USER,
} from "./constants";

export const createVendor =
  (vendorName, openSnackbar, cb) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.createVendor(vendorName);
      openSnackbar("Vendor created, now assign primary/secondary contact");
      cb();
      dispatch({ type: VENDOR_CREATED, payload: data });
    } catch (error) {
      if (error.response.data.code === 401) {
        localStorage.removeItem("profile");
        window.location.reload();
      }
      openSnackbar(error?.response?.data?.message);
      console.log(error);
    } finally {
      dispatch({ type: END_LOADING });
    }
  };

export const updateVendor =
  (updateVendor, openSnackbar, cb) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      await api.updateVendor(updateVendor);
      openSnackbar("Vendor updated successfully.");
      cb();
      // dispatch({ type: SET_VENDOR_USER, payload: {} });
    } catch (error) {
      if (error.response.data.code === 401) {
        localStorage.removeItem("profile");
        window.location.reload();
      }
      openSnackbar(error?.response?.data?.message);
      console.log(error);
    } finally {
      dispatch({ type: END_LOADING });
    }
  };
