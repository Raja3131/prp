import * as api from "../api/index";
import {
  END_LOADING,
  END_WITHDRAW_UPDATE_LOADING,
  GET_WITHDRAWS,
  START_LOADING,
  START_WITHDRAW_UPDATE_LOADING,
} from "./constants";

export const withdrawAmount =
  (params, history, openSnackbar, setSubmitting) => async (dispatch) => {
    try {
      const { data } = await api.withdrawAmount(params);
      openSnackbar("Withdraw");
      history.push("/dashboard");
    } catch (err) {
      if (err.response.data.code === 401) {
        localStorage.removeItem("profile");
        window.location.reload();
      } else {
        openSnackbar(err.response.data.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

export const withdraw = (limit, offset) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.withdraw(limit, offset);
    dispatch({ type: GET_WITHDRAWS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error.response);
  }
};

export const withdrawWithStatus =
  (status, limit, offset) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.withdrawStatus(status, limit, offset);
      dispatch({ type: GET_WITHDRAWS, payload: data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      if (error?.response?.data?.code === 401) {
        localStorage.removeItem("profile");
        window.location.reload();
      }
      console.log(error.response);
    }
  };

export const updateWithdraw =
  (withdraw, openSnackbar, history, withdrawList, setSelected) =>
  async (dispatch) => {
    try {
      dispatch({ type: START_WITHDRAW_UPDATE_LOADING });
      const { data } = await api.updatewithdraw(withdraw);
      openSnackbar("Withdraw successfully updated");
      dispatch(withdrawList);
      setSelected([]);
      dispatch({ type: END_WITHDRAW_UPDATE_LOADING });
      history.push("/withdraw");
    } catch (err) {
      if (err?.response?.data?.code === 401) {
        localStorage.removeItem("profile");
        window.location.reload();
      }
      openSnackbar(err.response.data.message);
    }
  };
