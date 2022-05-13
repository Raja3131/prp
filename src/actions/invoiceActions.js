import * as api from "../api/index";

import {
  ADD_NEW,
  UPDATE,
  DELETE,
  CHANGE_REQUEST,
  GET_INVOICE,
  START_LOADING,
  END_LOADING,
  FETCH_INVOICE_BY_ID,
  GET_ITEMS,
  GET_USER_LIST,
  GET_DC_ID,
  FETCH_DC_DETAILS,
  CUSTOM_LINE_ITEM,
  GET_VENDOR_LIST,
} from "./constants";

export const getInvoiceById = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchInvoiceById(id);
    dispatch({ type: FETCH_INVOICE_BY_ID, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error.response);
  }
};

export const customLineItem = (limit, offset) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.customLineItem(limit, offset);
    dispatch({ type: CUSTOM_LINE_ITEM, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error.response);
  }
};

export const getInvoices = (limit, offset) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchInvoice(limit, offset);
    dispatch({ type: GET_INVOICE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error.response);
  }
};

export const getDcId = () => async (dispatch) => {
  try {
    const { data } = await api.getDcId();
    dispatch({ type: GET_DC_ID, payload: data });
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error.response);
  }
};

export const createInvoice =
  (invoice, history, openSnackbar) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.addInvoice(invoice);
      dispatch({ type: ADD_NEW, payload: data });
      openSnackbar("Invoice Created");
      history.push(`/invoices`);
      dispatch({ type: END_LOADING });
    } catch (error) {
      if (error?.response?.data?.code === 401) {
        localStorage.removeItem("profile");
        window.location.reload();
      }
      openSnackbar(error?.response?.data?.message);
    }
  };

export const addCustomLineItem =
  (invoice, history, openSnackbar) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.addCustomLineItem(invoice);
      dispatch({ type: ADD_NEW, payload: data });
      openSnackbar("custom line item Created");
      history.push(`/custom_line_item`);
      dispatch({ type: END_LOADING });
    } catch (error) {
      if (error?.response?.data?.code === 401) {
        localStorage.removeItem("profile");
        window.location.reload();
      }
      openSnackbar(error?.response?.data?.message);
    }
  };

export const deleteCustomLineItem = (id, openSnackbar) => async (dispatch) => {
  try {
    await api.deleteCustomLineItem(id);
    dispatch({ type: DELETE, payload: id });
    openSnackbar("Line Item deleted successfully");
    window.location.reload();
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error.response);
  }
};

export const updateInvoice =
  (invoice, history, openSnackbar) => async (dispatch) => {
    try {
      const { data } = await api.updateInvoice(invoice);
      dispatch({ type: UPDATE, payload: data });
      history.push(`/invoices`);
    } catch (error) {
      if (error?.response?.data?.code === 401) {
        localStorage.removeItem("profile");
        window.location.reload();
      }
      // openSnackbar(error.response.data.message);
      console.log(error);
    }
  };

export const getUserLists = () => async (dispatch) => {
  try {
    const { data } = await api.getUserList();
    dispatch({ type: GET_USER_LIST, payload: data });
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    // openSnackbar(error.response.data.message);
    console.log(error);
  }
};

export const getVendorList = () => async (dispatch) => {
  try {
    const { data } = await api.getVendorList();
    dispatch({ type: GET_VENDOR_LIST, payload: data });
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    // openSnackbar(error.response.data.message);
    console.log(error);
  }
};

export const deleteInvoice = (id, openSnackbar) => async (dispatch) => {
  try {
    await api.deleteInvoice(id);
    openSnackbar("Invoice deleted successfully");
    dispatch(getInvoices(100, 1));
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error.response);
  }
};

export const listDeletedInvoice = (limit, offset) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.listDeletedInvoice(limit, offset);
    dispatch({ type: END_LOADING });

    dispatch({ type: GET_INVOICE, payload: data });
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error);
  }
};

export const changeInoviceStatus =
  (invoice, openSnackbar, history) => async (dispatch) => {
    try {
      const { data } = await api.changeInoviceStatus(
        invoice._id,
        invoice.status,
        invoice.reason
      );
      dispatch({ type: CHANGE_REQUEST, payload: data });
      history.push(`/invoices`);
      openSnackbar(`Invoice ${invoice.status}`);
    } catch (error) {
      if (error?.response?.data?.code === 401) {
        localStorage.removeItem("profile");
        window.location.reload();
      }
      openSnackbar(error.response.data.message);
    }
  };

export const getItemsList =
  (name = null, id = null) =>
  async (dispatch) => {
    try {
      const { data } = await api.getItemsList(name, id);
      dispatch({ type: GET_ITEMS, payload: data });
    } catch (error) {
      if (error?.response?.data?.code === 401) {
        localStorage.removeItem("profile");
        window.location.reload();
      }
      console.log(error);
    }
  };

export const fetchDetails = (dcids) => async (dispatch) => {
  try {
    const { data } = await api.fetchDetails(dcids);
    dispatch({ type: FETCH_DC_DETAILS, payload: data });
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error);
  }
};
