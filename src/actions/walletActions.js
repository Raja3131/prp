import * as api from "../api/index";

import {
  ADD_NEW,
  LIST_API,
  FETCH_TRANSACTION_DETAILS,
  START_LOADING,
  END_LOADING,
} from "./constants";

export const AddWalletPayment = (params) => async (dispatch) => {
  try {
    const { data } = await api.AddWalletPayment(params);
    window.location.replace(data.url);
    dispatch({ type: ADD_NEW, payload: data });
  } catch (error) {
    if (error.response.data.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error);
  }
};

export const listWallet = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.listWallet();
    dispatch({ type: LIST_API, payload: data });
  } catch (error) {
    if (error.response.data.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error);
  }
};

export const getTransactionHistoryList = (params) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getTransactionHistoryList(params);
    dispatch({ type: FETCH_TRANSACTION_DETAILS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    if (error.response.data.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error);
  }
};
