import * as api from "../api/index";

import {
  VENDOR_DUE_REPORT,
  DC_ID_REPORT,
  START_LOADING,
  ALL_VENDORS,
} from "./constants";

export const vendordueReport = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.vendordueReport();
    dispatch({ type: VENDOR_DUE_REPORT, payload: data });
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error?.response);
  }
};

export const getAllVendor = () => async (dispatch) => {
  try {
    const { data } = await api.getAllVendors();
    dispatch({ type: ALL_VENDORS, payload: data });
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error?.response);
  }
};

export const vendordueReportFilter = (params) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.vendordueReportFilter(params);
    dispatch({ type: VENDOR_DUE_REPORT, payload: data });
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error?.response);
  }
};

export const DcIdReport = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.DcIdReport();
    dispatch({ type: DC_ID_REPORT, payload: data });
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error?.response);
  }
};

export const DcIdReportFilter = (params) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.DcIdReportFilter(params);
    dispatch({ type: DC_ID_REPORT, payload: data });
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error);
  }
};
