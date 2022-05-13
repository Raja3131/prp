import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import SnackbarProvider from "react-simple-snackbar";
import Invoice from "./components/Invoice/Invoice";
import Invoices from "./components/Invoice/Invoices";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Forgot from "./components/Password/Forgot";
import Reset from "./components/Password/Reset";
import DeletedInvoice from "./components/Invoice/DeletedInvoice";
import Notifications from "./components/Notification/Notifications";
import { userData } from "./utils/config";
import PrivateRoute from "./utils/PrivateRoute";
import store from "./store";
import { Provider } from "react-redux";
import CreateUser from "./components/Login/CreateUser";
import Account from "./components/Accounts/Account";
import PaymentHistory from "./components/wallet/PaymentHistory";
import AddWallet from "./components/wallet/AddWallet";
import PaymentVerification from "./components/wallet/PaymentVerification";
import PaymentFailed from "./components/wallet/payementFailed";
import TransactionHistory from "./components/wallet/TransactionHistory";
import Custom_lineitem from "./components/Custom_Line_Item/Custom_lineitem";
import Add_custom_lineitem from "./components/Custom_Line_Item/Add_custom_lineitem";
import VendorDuePaidReport from "./components/Report/Vendordue";
import DcIdReports from "./components/Report/DcIdReport";
import CreateUserStep from "./components/createUser";
import Withdraw from "./components/Withdrawal/Withdraw";

const App = () => {
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    let pathname = window.location.pathname;
    if (pathname === "/payment-verification") {
      setShowNav(false);
    } else if (pathname === "/payment-failed") {
      setShowNav(false);
    }
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SnackbarProvider>
          {userData !== null && showNav ? (
            <>
              <NavBar />
              <Header />
            </>
          ) : (
            <></>
          )}
          <Switch>
            <PrivateRoute path="/" restricted={false} component={Login} exact />
            <PrivateRoute
              path="/invoices"
              restricted={true}
              component={Invoices}
              exact
            />

            <PrivateRoute
              path="/add/invoice"
              restricted={true}
              component={Invoice}
              exact
            />

            <PrivateRoute
              path="/accounts"
              restricted={true}
              component={Account}
              exact
            />

            <PrivateRoute
              path="/custom_line_item"
              restricted={true}
              component={Custom_lineitem}
              exact
            />

            <PrivateRoute
              path="/edit/invoice/:id"
              restricted={true}
              component={Invoice}
              exact
            />

            <PrivateRoute
              path="/view/invoice/:id"
              restricted={true}
              component={Invoice}
              exact
            />

            <PrivateRoute
              path="/deleted-invoices"
              restricted={true}
              component={DeletedInvoice}
              exact
            />

            <PrivateRoute
              path="/notifications"
              restricted={true}
              component={Notifications}
              exact
            />

            <PrivateRoute
              path="/forgot"
              restricted={true}
              component={Forgot}
              exact
            />

            <PrivateRoute
              path="/reset"
              restricted={true}
              component={Reset}
              exact
            />

            <PrivateRoute
              path="/create-user"
              restricted={true}
              component={CreateUser}
              exact
            />
            <PrivateRoute
              path="/dashboard"
              restricted={true}
              component={PaymentHistory}
              exact
            />
            <PrivateRoute
              path="/add-wallet-payment"
              restricted={true}
              component={AddWallet}
              exact
            />
            <PrivateRoute
              path="/payment-verification"
              restricted={true}
              component={PaymentVerification}
              exact
            />
            <PrivateRoute
              path="/add-custom-lineitem"
              restricted={true}
              component={Add_custom_lineitem}
              exact
            />
            <PrivateRoute
              path="/edit-custom-lineitem/:id"
              restricted={true}
              component={Add_custom_lineitem}
              exact
            />
            <PrivateRoute
              path="/payment-failed"
              restricted={true}
              component={PaymentFailed}
              exact
            />
            <PrivateRoute
              path="/transaction-history"
              restricted={true}
              component={TransactionHistory}
              exact
            />
            <PrivateRoute
              path="/Vendordue-paid-report"
              restricted={true}
              component={VendorDuePaidReport}
              exact
            />
            <PrivateRoute
              path="/Dcid-paid-report"
              restricted={true}
              component={DcIdReports}
              exact
            />

            <PrivateRoute
              path="/create-vendor"
              restricted={true}
              component={CreateUserStep}
              exact
            />
            <PrivateRoute
              path="/withdraw"
              restricted={true}
              component={Withdraw}
              exact
            />
          </Switch>
        </SnackbarProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
