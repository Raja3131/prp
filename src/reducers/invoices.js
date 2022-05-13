import {
  ADD_NEW,
  UPDATE,
  CHANGE_REQUEST,
  GET_INVOICE,
  START_LOADING,
  END_LOADING,
  FETCH_INVOICE_BY_ID,
  GET_DC_ID,
  GET_ITEMS,
  GET_USER_LIST,
  FETCH_DC_DETAILS,
  CUSTOM_LINE_ITEM,
  GET_VENDOR_LIST,
} from "../actions/constants";

const invoices = (
  state = {
    isLoading: true,
    invoices: [],
    invoice: [],
    itemList: [],
    DCid: [],
    getVendorList: [],
    userList: [],
    dcids: [],
    customLineItem: null,
  },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_DC_ID:
      return { ...state, DCid: action?.payload };
    case FETCH_INVOICE_BY_ID:
      return { ...state, invoices: action.payload };
    case CHANGE_REQUEST:
      return { ...state, invoices: action.payload };
    case GET_INVOICE:
      return { ...state, invoice: action.payload, isLoading: false };
    case GET_ITEMS:
      return {
        ...state,
        itemList: action.payload,
      };
    case ADD_NEW:
      return { ...state, invoices: action.payload };
    case UPDATE:
      return {
        ...state,
        invoices: action.payload,
        isLoading: false,
      };
    case CUSTOM_LINE_ITEM: {
      return {
        ...state,
        customLineItem: action.payload,
      };
    }
    case GET_USER_LIST:
      return {
        ...state,
        userList: action?.payload,
        isLoading: false,
      };
    case FETCH_DC_DETAILS:
      return {
        ...state,
        dcids: action?.payload,
        isLoading: false,
      };
    case GET_VENDOR_LIST:
      return {
        ...state,
        getVendorList: action?.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default invoices;
