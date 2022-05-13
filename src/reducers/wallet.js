import {
  START_LOADING,
  END_LOADING,
  LIST_API,
  FETCH_TRANSACTION_DETAILS,
} from "../actions/constants";

const walletPayment = (
  state = {
    transaction: null,
    wallet: [],
    vendordue: [],
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case LIST_API:
      return {
        ...state,
        wallet: action.payload,
        isLoading: false,
      };
    case FETCH_TRANSACTION_DETAILS:
      return {
        ...state,
        transaction: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default walletPayment;
