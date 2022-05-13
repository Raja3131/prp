import {
  END_WITHDRAW_UPDATE_LOADING,
  GET_WITHDRAWS,
  START_WITHDRAW_UPDATE_LOADING,
} from "../actions/constants";

const withdraw = (
  state = {
    withdraws: null,
    isLoading: true,
    isWithdrawUpdateLoading: false,
  },
  action
) => {
  switch (action.type) {
    case GET_WITHDRAWS:
      return {
        ...state,
        withdraws: action.payload,
        isLoading: false,
      };
    case START_WITHDRAW_UPDATE_LOADING:
      return {
        ...state,
        isWithdrawUpdateLoading: true,
      };
    case END_WITHDRAW_UPDATE_LOADING:
      return {
        ...state,
        isWithdrawUpdateLoading: false,
      };
    default:
      return state;
  }
};

export default withdraw;
