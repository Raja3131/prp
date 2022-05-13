import {
  VENDOR_CREATED,
  START_LOADING,
  END_LOADING,
  SET_VENDOR_USER,
} from "../actions/constants";

const vendor = (
  state = {
    vendorCreatedData: {},
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case VENDOR_CREATED:
      return {
        ...state,
        vendorCreatedData: action.payload,
        isLoading: false,
      };
    case SET_VENDOR_USER:
      return {
        ...state,
        vendorCreatedData: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default vendor;
