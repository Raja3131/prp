import {
  DC_ID_REPORT,
  VENDOR_DUE_REPORT,
  START_LOADING,
  END_LOADING,
  ALL_VENDORS,
} from "../actions/constants";

const reports = (
  state = {
    DcidReport: [],
    vendordueReport: [],
    allVendors: [],
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case DC_ID_REPORT:
      return {
        ...state,
        DcidReport: action.payload,
        isLoading: false,
      };
    case VENDOR_DUE_REPORT:
      return {
        ...state,
        vendordueReport: action.payload,
        isLoading: false,
      };
    case ALL_VENDORS:
      return {
        ...state,
        allVendors: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reports;
