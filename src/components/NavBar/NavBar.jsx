import React from "react";
import { Link } from "react-router-dom";
import { userData } from "../../utils/config";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import TransferWithinAStationOutlinedIcon from "@mui/icons-material/TransferWithinAStationOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

import { CreditCard } from "@material-ui/icons";

const NavBar = () => {
  if (!userData) return null;

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <Link to="/invoices" className="nav-link">
              <span className="link-text logo-text">
                <p style={{ width: "160px" }}> PRP Invoice </p>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-right"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </li>

          {(userData.user.role === "admin" ||
            userData.user.role === "superAdmin" ||
            userData.user.role === "vendor") && (
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                <AccountBalanceWalletOutlinedIcon />
                <span className="link-text">Wallet</span>
              </Link>
            </li>
          )}

          {(userData.user.role === "vendor" ||
            userData.user.role === "admin" ||
            userData.user.role === "superAdmin") && (
            <li className="nav-item">
              <Link to="/add/invoice" className="nav-link">
                <AddBoxOutlinedIcon />
                <span className="link-text">Create</span>
              </Link>
            </li>
          )}

          <li className="nav-item">
            <Link to="/invoices" className="nav-link">
              <ListAltOutlinedIcon />
              <span className="link-text">Invoices</span>
            </Link>
          </li>

          {userData.user.role === "superAdmin" ||
          userData.user.role === "admin" ? (
            <li className="nav-item">
              <Link to="/deleted-invoices" className="nav-link">
                <DeleteSweepOutlinedIcon />
                <span className="link-text">Deleted Invoices</span>
              </Link>
            </li>
          ) : (
            <></>
          )}

          {userData.user.role === "superAdmin" ||
          userData.user.role === "admin" ? (
            <li className="nav-item">
              <Link to="/custom_line_item" className="nav-link">
                <CategoryOutlinedIcon />
                <span className="link-text">custom line item</span>
              </Link>
            </li>
          ) : (
            <></>
          )}
          {userData.user.role === "superAdmin" ||
          userData.user.role === "admin" ? (
            <>
              {/* <li className="nav-item">
                <Link to="/create-vendor" className="nav-link">
                  <ContactPageOutlinedIcon fontSize="large" />
                  <span className="link-text">Create Vendor</span>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/Vendordue-paid-report" className="nav-link">
                  <AssessmentOutlinedIcon fontSize="large" />
                  <span className="link-text">Vendor Due Report</span>
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}

          {userData.user.role === "superAdmin" ||
          userData.user.role === "admin" ? (
            <li className="nav-item">
              <Link to="/Dcid-paid-report" className="nav-link">
                <AssessmentOutlinedIcon fontSize="large" />
                <span className="link-text">DC id Paid report</span>
              </Link>
            </li>
          ) : (
            <></>
          )}
          {userData.user.role === "superAdmin" ? (
            <li className="nav-item">
              <Link to="/create-user" className="nav-link">
                <PersonAddIcon fontSize="large" />
                <span className="link-text">Create User</span>
              </Link>
            </li>
          ) : (
            <></>
          )}

          {userData.user.role === "vendor" ? (
            <li className="nav-item">
              <Link to="/accounts" className="nav-link">
                <CreditCard fontSize="large" />
                <span className="link-text">Accounts</span>
              </Link>
            </li>
          ) : (
            <></>
          )}

          <li className="nav-item">
            <Link to="/withdraw" className="nav-link">
              <TransferWithinAStationOutlinedIcon />
              <span className="link-text">Withdraw</span>
            </Link>
          </li>

          {(userData.user.role === "vendor" ||
            userData.user.role === "admin" ||
            userData.user.role === "superAdmin") && (
            <li className="nav-item">
              <Link to="/transaction-history" className="nav-link">
                <ReceiptIcon fontSize="large" />
                <span className="link-text">Transaction History</span>
              </Link>
            </li>
          )}

          <li className="nav-item" id="themeButton"></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
