import {
  END_LOADING,
  SHOW_NOTIFICATION,
  SHOW_NOTIFICATION_BADGE,
  START_LOADING,
} from "../actions/constants";

const notification = (
  state = {
    isLoading: true,
    notificationDetails: {},
    showNotificationBadge: false,
  },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case SHOW_NOTIFICATION:
      return {
        ...state,
        notificationDetails: action.payload,
        isLoading: false,
      };
    case SHOW_NOTIFICATION_BADGE:
      return {
        ...state,
        showNotificationBadge: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default notification;
