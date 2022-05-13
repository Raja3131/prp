import { combineReducers } from "redux";

import invoices from "./invoices";
import auth from "./auth";
import notification from "./notification";
import walletPayment from "./wallet";
import reports from "./report";
import withdraw from "./withdraw";
import vendors from "./vendor";

export default combineReducers({
  invoices,
  auth,
  notification,
  walletPayment,
  reports,
  withdraw,
  vendors,
});
