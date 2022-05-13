import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FieldArray, Form, Formik } from "formik";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Divider,
  InputBase,
  Dialog,
  Button,
  Typography,
  IconButton,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import * as yup from "yup";
import SaveIcon from "@material-ui/icons/Save";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DraftsIcon from "@material-ui/icons/Drafts";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import {
  createInvoice,
  getInvoiceById,
  getItemsList,
  getUserLists,
  updateInvoice,
  changeInoviceStatus,
  fetchDetails,
} from "../../actions/invoiceActions";
import XLSX from "xlsx";
import moment from "moment";
import styles from "./Invoice.module.css";
import { toCommas } from "../../utils/utils";
import { userData } from "../../utils/config";
import CloseIcon from "@material-ui/icons/Close";
import { useSnackbar } from "react-simple-snackbar";
import { capitalize } from "../../utils/utils";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  table: {
    minWidth: 650,
  },
  headerContainer: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(1),
  },
}));
const style = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: "#1976D2",
    marginLeft: 0,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "white",
  },
});
const initialValue = {
  status: "draft",
  invoiceNumber: "",
  id: "",
  date: new Date(),
  dueDate: new Date(new Date(moment(new Date(), "DD-MM-YYYY"))),
  subTotal: 0,
  taxAmount: 0,
  taxPercentage: "",
  discountAmount: 0,
  discountPercentage: 0,
  totalAmount: 0,
  finalAmount: 0,
  invoiceTo: "",
  distributionCenter: {
    dcId: "",
    dcName: "",
  },
  items: [
    {
      number: 0,
      name: "",
      type: "",
      detailType: "",
      amount: 0,
      dropdown: false,
    },
  ],
  vendorDetails: {
    id: "",
    email: "",
    role: "",
    firstName: " ",
    lastName: "",
    active: 0,
    restricted: 0,
  },
};
const DialogTitle = withStyles(style)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const Invoice = () => {
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const [dcids, setDcids] = useState(
    userData.user.role === "vendor" ? userData.user.externalData.dcIds : ""
  );
  const [openSnackbar] = useSnackbar();
  const { id } = useParams();
  const itemList = useSelector((state) => state.invoices.itemList);
  const userList = useSelector((state) => state.invoices.userList);
  const dcid = useSelector((state) => state.invoices.dcids);
  const invoice = useSelector((state) => state.invoices.invoices);
  const [file, setFile] = useState({});
  const [type, setType] = useState();
  const [invoiceData, setInvoiceData] = useState(initialValue);
  const [modalOpen, setModalOpen] = useState(false);
  const [reqType, setReqType] = useState("");
  const [reason, setReason] = useState("");
  const dueDate = [
    {
      name: "N15",
      dueDate: moment(invoice.date).add(15, "days").utc().format(),
    },
    {
      name: "N30",
      dueDate: moment(invoice.date).add(30, "days").utc().format(),
    },
  ];
  const vendorid = location.pathname.includes("edit")
    ? invoice.vendorId &&
      invoice.vendorId.externalData &&
      invoice.vendorId.externalData.id
    : userList.id;
  const vendorids = userList.filter((map) => {
    return vendorid === map.id;
  });
  useEffect(() => {
    if (!location.pathname.includes("add")) {
      dispatch(getInvoiceById(id));
    }
    dispatch(getItemsList());
    setInvoiceData(initialValue);
  }, [dispatch, id, location.pathname]);
  useEffect(() => {
    let DcIds = {
      dcIds: dcids,
    };
    if (DcIds.dcIds !== "") dispatch(fetchDetails(DcIds));
  }, [dcids, dispatch]);
  useEffect(() => {
    setType(
      location.pathname.includes("edit")
        ? "EDIT INVOICE"
        : location.pathname.includes("view")
        ? "VIEW INVOICE"
        : "ADD INVOICE"
    );
    if (!location.pathname.includes("add")) {
      invoice.items &&
        invoice.items.length &&
        invoice.items.map((values) => {
          values.dropdown = true;
          return 0;
        });
      setInvoiceData(invoice);
    }
  }, [invoice, id, location.pathname]);
  useEffect(() => {
    if (userData.user.role === "admin" || userData.user.role === "superAdmin")
      dispatch(getUserLists());
  }, [dispatch]);

  const defaultProps1 = {
    options: itemList,
    getOptionLabel: (option) =>
      option?.customName && userData?.user?.role === "vendor"
        ? option?.customName
        : option?.name,
  };

  const handleSubmit = (values, { setSubmitting }) => {
    let discountAmount = 0;
    let discountPercentage = 0;
    values.discountAmount = parseInt(discountAmount);
    values.discountPercentage = parseInt(discountPercentage);
    values.finalAmount = values.totalAmount;
    values.invoiceTo = "62038d6d2ea0da119bd32c77";
    let ar = {};
    values.items = values.items.map((e) => {
      delete e.id;
      delete e.dropdown;
      return { ...ar, ...e };
    });
    if (userData.user.role === "vendor") {
      values.vendorDetails = {
        id: userData.user.externalData.id,
        email: userData.user.email,
        role: userData.user.role,
        firstName: userData.user.externalData.firstName,
        lastName: userData.user.externalData.lastName,
        active: userData.user.externalData.active,
        restricted: userData.user.externalData.restricted,
        dcIds: userData.user.externalData.dcIds,
      };
    }
    delete values.invoiceNumber;
    delete values.managerStatus;
    delete values.adminStatus;
    delete values.superAdminStatus;
    delete values.accountantStatus;
    delete values.isInvoiceModified;
    delete values.createdBy;
    delete values.modifiedBy;
    if (location.pathname.includes("edit")) {
      delete values.activity;
      delete values.vendorId;
      dispatch(updateInvoice(values, history, openSnackbar));
    } else {
      delete values.id;
      dispatch(createInvoice(values, history, openSnackbar));
    }
    setSubmitting(false);
  };
  const calculatedFinalValues = (values, setFieldValue) => {
    let val = 0;
    values.items.map((e) => {
      if (e.amount) {
        val += parseFloat(e.amount);
      }
      return 0;
    });
    if (val !== undefined || val !== "NaN" || val !== isNaN) {
      setFieldValue("subTotal", val);
      setFieldValue(
        "totalAmount",
        parseFloat(val + ((val * parseFloat(values.taxPercentage)) / 100 || 0))
      );
      setFieldValue(
        "taxAmount",
        (val * parseFloat(values.taxPercentage)) / 100 || 0
      );
    }
  };
  const handleCapture = (e) => {
    const files = e.target.files;
    if (files && files[0]) setFile(files[0]);
  };
  const defaultProps = {
    options: userList,
    getOptionLabel: (option) =>
      location.pathname.includes("add")
        ? option.first_name + " " + option.last_name
        : option.firstName + " " + option.lastName,
  };
  const defaultProps2 = {
    options: dcid,
    getOptionLabel: (option) => option.dc_name || option.dcName,
  };
  const dueDateProps = {
    options: dueDate,
    getOptionLabel: (option) => moment(option.dueDate).format("MM-DD-YYYY"),
  };
  const handleFile = (setFieldValue, values) => {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true,
      });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      data.map((ele) => {
        ele.amount = parseFloat(ele.Amount);
        ele.name = ele.Name;
        ele.type = ele.Type;
        ele.detailType = ele["Detail Type"];
        ele.number = parseFloat(ele.Number);
        ele.dropdown = true;
        delete ele.Name;
        delete ele["Detail Type"];
        delete ele.Number;
        delete ele.Type;
        delete ele.Amount;
        return 0;
      });
      values.items = [...values.items, ...data];
      values.items.forEach((uele, index) => {
        if (uele.dropdown === false) {
          values.items.splice(index, 1);
        }
      });
      setFieldValue("items", values.items);
      calculatedFinalValues(values, setFieldValue);
    };
    if (rABS) {
      reader.readAsBinaryString(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  };
  const onChangeInoviceStatus = (type) => {
    setReqType(type);
    setModalOpen(true);
  };
  const modalSubmit = () => {
    setModalOpen(false);
    dispatch(
      changeInoviceStatus(
        { _id: invoiceData.id, status: reqType, reason: reason },
        openSnackbar,
        history
      )
    );
  };
  return (
    <div className={styles.invoiceLayout}>
      <Formik
        initialValues={{ ...invoiceData }}
        onSubmit={handleSubmit}
        validationSchema={invoiceSchema}
        enableReinitialize={true}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          handleChange,
          setFieldValue,
        }) => {
          return (
            <Form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
              className="mu-form"
            >
              <Grid container spacing={2}>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <h3>{type}</h3>
                  <br></br>
                  {!location.pathname.includes("add") && (
                    <span style={{ float: "right" }}>
                      Invoice #:
                      <div
                        style={{
                          margin: "15px 5px",
                          padding: "8px",
                          display: "inline-block",
                          backgroundColor: "#f4f4f4",
                          outline: "0px solid transparent",
                        }}
                      >
                        <span style={{ color: "black", padding: "15px" }}>
                          {values.invoiceNumber}
                        </span>
                        <br />
                      </div>
                    </span>
                  )}
                </Grid>
              </Grid>
              <Divider />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Grid
                    item
                    style={{ paddingTop: "25px", paddingBottom: "25px" }}
                  />
                  {!location.pathname.includes("view") ? (
                    <>
                      <Typography
                        variant="overline"
                        style={
                          errors.dueDate && touched.dueDate
                            ? { color: "#f44336" }
                            : { color: "gray" }
                        }
                        gutterBottom
                      >
                        Select Due Date
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        <Grid item style={{ width: 270, marginRight: 10 }}>
                          <Autocomplete
                            id="dueDate"
                            name="dueDate"
                            value={values}
                            {...dueDateProps}
                            onChange={(event, value) => {
                              setFieldValue("dueDate", value?.date);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Grid>
                      </Typography>
                    </>
                  ) : (
                    <></>
                  )}
                  {(userData.user.role === "admin" ||
                    userData.user.role === "superAdmin") &&
                  !location.pathname.includes("view") ? (
                    <>
                      <Typography
                        variant="overline"
                        style={{ color: "gray" }}
                        gutterBottom
                      >
                        Select Vendor
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        <Grid item style={{ width: 270, marginRight: 10 }}>
                          <Autocomplete
                            id="debug"
                            debug
                            placeholder="select vendor"
                            renderInput={(params) => <TextField {...params} />}
                            {...defaultProps}
                            value={
                              invoice?.vendorId?.externalData
                                ? invoice?.vendorId?.externalData
                                : null
                            }
                            onChange={(event, value) => {
                              setFieldValue("vendorDetails", {
                                id: value?.id,
                                email: value?.email,
                                role: value?.urole,
                                firstName: value?.first_name,
                                lastName: value?.last_name,
                                active: value?.active,
                                restricted: value?.restricted,
                                dcIds: value?.dc_ids,
                              });
                              setDcids(value?.dc_ids);
                            }}
                            disabled={location.pathname.includes("edit")}
                          />
                        </Grid>
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Grid>
                        <Typography
                          variant="overline"
                          style={{ color: "gray" }}
                          gutterBottom
                        >
                          Vendor Contact
                        </Typography>
                      </Grid>
                      {userData.user.role !== "vendor"
                        ? invoice?.vendorId?.externalData?.firstName +
                          " " +
                          invoice?.vendorId?.externalData?.lastName
                        : userData?.user?.externalData?.firstName +
                          " " +
                          userData?.user?.externalData?.lastName}
                      <br />
                    </>
                  )}
                  {!location.pathname.includes("view") ? (
                    <>
                      <Typography
                        variant="overline"
                        style={{ color: "gray" }}
                        gutterBottom
                      >
                        Select Dc id
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        <Grid item style={{ width: 270, marginRight: 10 }}>
                          <Autocomplete
                            id="debug"
                            debug
                            renderInput={(params) => <TextField {...params} />}
                            {...defaultProps2}
                            value={
                              values.distributionCenter &&
                              values.distributionCenter.dcId !== ""
                                ? values.distributionCenter
                                : dcid
                            }
                            onChange={(event, value) => {
                              setFieldValue(`distributionCenter`, {
                                dcId: value?.id,
                                dcName: value?.dc_name,
                              });
                            }}
                          />
                        </Grid>
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Grid>
                        <Typography
                          variant="overline"
                          style={{ color: "gray" }}
                          gutterBottom
                        >
                          Distribution Center
                        </Typography>
                      </Grid>
                      {values?.distributionCenter?.dcName}
                    </>
                  )}
                </Grid>
                <Grid item xs={6} style={{ textAlign: "right" }}>
                  <Typography
                    variant="overline"
                    style={{ color: "gray" }}
                    gutterBottom
                  >
                    Status
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ color: type === "Receipt" ? "green" : "red" }}
                  >
                    {values.status}
                  </Typography>
                  <Typography
                    variant="overline"
                    style={{ color: "gray" }}
                    gutterBottom
                  >
                    Date
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {moment(invoiceData.date).format("MMM Do YYYY")}
                  </Typography>
                  <Typography
                    variant="overline"
                    style={{ color: "gray" }}
                    gutterBottom
                  >
                    Due Date
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {values.dueDate === ""
                      ? "-"
                      : moment(values.dueDate).format("MMM Do YYYY")}
                  </Typography>
                  <Typography variant="overline" gutterBottom>
                    Amount
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {"$"}
                    {values.totalAmount
                      ? toCommas(values.totalAmount.toFixed(2))
                      : 0}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item style={{ paddingTop: "25px", paddingBottom: "25px" }}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TableContainer component={Paper} className="tb-container">
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Number</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Details Type</TableCell>
                        <TableCell>Amount</TableCell>
                        {location.pathname.includes("view") ? null : (
                          <TableCell colSpan={2} align="center">
                            Action
                          </TableCell>
                        )}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <FieldArray
                        name="items"
                        render={(arrayHelpers, push) => (
                          <>
                            {values.items && values.items.length > 0 ? (
                              values.items.map((item, i) => {
                                return (
                                  <TableRow key={i}>
                                    <TableCell scope="row" width="15%">
                                      <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        value={values?.items[i]?.number}
                                        onChange={handleChange}
                                        name={`items.${i}.number`}
                                        placeholder="0"
                                        disabled={values?.items[i]?.dropdown}
                                      />
                                    </TableCell>
                                    <TableCell width="35%">
                                      {!values?.items[i]?.dropdown ? (
                                        <>
                                          <Autocomplete
                                            {...defaultProps1}
                                            id="debug"
                                            debug
                                            renderInput={(params) => (
                                              <TextField
                                                {...params}
                                                label="Select Item Name"
                                              />
                                            )}
                                            name={`items.${i}.name`}
                                            onBlur={(e) => {
                                              setFieldValue(
                                                `items.${i}.name`,
                                                e.target.value
                                              );
                                            }}
                                            style={
                                              errors.items &&
                                              errors.items[i] &&
                                              errors.items[i].name &&
                                              touched.items &&
                                              touched.items[i] &&
                                              touched.items[i].name && {
                                                borderBottom: "1px solid red",
                                              }
                                            }
                                            onChange={(event, value) => {
                                              setFieldValue(`items.${i}`, {
                                                ...value,
                                                dropdown: true,
                                              });
                                            }}
                                          />
                                        </>
                                      ) : (
                                        <label style={{ float: "left" }}>
                                          {values?.items[i]?.customName &&
                                          userData.user.role === "vendor"
                                            ? values?.items[i]?.customName
                                            : values?.items[i]?.name}
                                        </label>
                                      )}
                                    </TableCell>
                                    <TableCell width="30%">
                                      <InputBase
                                        style={{ width: "max-content" }}
                                        onChange={handleChange}
                                        sx={{ ml: 1, flex: 1 }}
                                        value={values?.items[i]?.type}
                                        name={`items.${i}.type`}
                                        min={1}
                                        disabled={values?.items[i]?.dropdown}
                                        placeholder="0"
                                      />
                                    </TableCell>
                                    <TableCell>
                                      <InputBase
                                        style={{ width: "max-content" }}
                                        sx={{ ml: 1, flex: 1 }}
                                        onChange={handleChange}
                                        value={values?.items[i]?.detailType}
                                        name={`items.${i}.detailType`}
                                        min={1}
                                        disabled={values?.items[i]?.dropdown}
                                        placeholder="0"
                                      />
                                    </TableCell>
                                    <TableCell width="10%">
                                      <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        type="number"
                                        onChange={(e) => {
                                          setFieldValue(
                                            `items.${i}.amount`,
                                            e.target.value
                                          );
                                        }}
                                        placeholder="0"
                                        InputProps={{ inputProps: { min: 0 } }}
                                        onBlur={() =>
                                          calculatedFinalValues(
                                            values,
                                            setFieldValue
                                          )
                                        }
                                        name={`items.${i}.amount`}
                                        value={values?.items[i]?.amount}
                                        disabled={
                                          location.pathname.includes("view")
                                            ? true
                                            : false
                                        }
                                        style={
                                          errors.items &&
                                          errors.items[i] &&
                                          errors.items[i].amount &&
                                          touched.items &&
                                          touched.items[i] &&
                                          touched.items[i].amount && {
                                            borderBottom: "1px solid red",
                                          }
                                        }
                                      />
                                    </TableCell>
                                    {location.pathname.includes(
                                      "view"
                                    ) ? null : (
                                      <>
                                        <TableCell align="right">
                                          <IconButton
                                            onClick={(e) => {
                                              arrayHelpers.remove(i);
                                              delete values.items[i];
                                              calculatedFinalValues(
                                                values,
                                                setFieldValue
                                              );
                                            }}
                                          >
                                            <DeleteOutlineRoundedIcon
                                              style={{
                                                width: "20px",
                                                height: "20px",
                                              }}
                                            />
                                          </IconButton>
                                        </TableCell>
                                      </>
                                    )}
                                  </TableRow>
                                );
                              })
                            ) : (
                              <></>
                            )}
                            {!location.pathname.includes("view") && (
                              <Button
                                style={{
                                  color: "#fff",
                                  background: "rgb(25, 118, 210)",
                                  margin: "2%",
                                }}
                                onClick={() => {
                                  arrayHelpers.push(initialValue.items[0]);
                                }}
                              >
                                Add Item
                                <AddIcon />
                              </Button>
                            )}
                          </>
                        )}
                      />
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              {!location.pathname.includes("view") && (
                <div>
                  <Grid
                    container
                    item
                    style={{ paddingTop: "25px", paddingBottom: "25px" }}
                  >
                    <input
                      style={{ display: "none" }}
                      id="contained-button-file"
                      type="file"
                      onChange={handleCapture}
                    />
                    <label htmlFor="contained-button-file">
                      <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        style={{ marginLeft: "5px" }}
                      >
                        Upload
                      </Button>
                    </label>
                    <Button
                      variant="contained"
                      color="default"
                      onClick={() => handleFile(setFieldValue, values)}
                      style={{ marginLeft: "5px" }}
                      disabled={file.name ? false : true}
                    >
                      add
                    </Button>
                  </Grid>
                  <label>{file && file.name ? file.name : ""}</label>
                </div>
              )}
              <div className={styles.invoiceSummary}>
                <div className={styles.summary}>Invoice Summary</div>
                <div className={styles.summaryItem}>
                  <p>Sub total:</p>
                  <h4>{parseInt(values.subTotal).toFixed(2)}</h4>
                </div>
                <div className={styles.summaryItem}>
                  <p>Tax Percentage (%):</p>
                  <h4>
                    <TextField
                      type="number"
                      InputProps={{ inputProps: { min: 0 } }}
                      name="taxPercentage"
                      id="taxPercentage"
                      value={values.taxPercentage}
                      onChange={handleChange}
                      style={
                        errors.taxPercentage &&
                        touched.taxPercentage && {
                          borderBottom: "1px solid red",
                        }
                      }
                      disabled={
                        location.pathname.includes("view") ? true : false
                      }
                      onBlur={(e) => {
                        //VAT is calculated as tax rates /100 * subtotal
                        setFieldValue("taxPercentage", e.target.value);
                        setFieldValue(
                          "taxAmount",
                          (e.target.value / 100) * values.subTotal
                        );
                        setFieldValue(
                          "totalAmount",
                          parseFloat(
                            (e.target.value / 100) * values.subTotal +
                              parseInt(values.subTotal)
                          )
                        );
                      }}
                      placeholder="0"
                    />
                  </h4>
                </div>
                <div className={styles.summaryItem}>
                  <p>Tax Amount:</p>
                  <h4>${parseFloat(values.taxAmount).toFixed(2)}</h4>
                </div>
                <div className={styles.summaryItem}>
                  <p>Total</p>
                  <h4
                    style={{
                      color: "black",
                      lineHeight: "8px",
                    }}
                  >
                    {"$"}
                    {values.totalAmount
                      ? toCommas(values.totalAmount.toFixed(2))
                      : 0}
                  </h4>
                </div>
              </div>
              {location.pathname.includes("view") && (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    Activities
                  </AccordionSummary>
                  <AccordionDetails>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">Date</TableCell>
                          <TableCell align="center">Action</TableCell>
                          <TableCell align="center">Role</TableCell>
                          <TableCell align="left">Reason</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {values?.activity?.map((value) => {
                          return (
                            <TableRow>
                              <TableCell align="center">
                                {moment(value?.action_date).format(
                                  "DD-MM-YYYY hh:mm a"
                                )}
                              </TableCell>
                              <TableCell align="center">
                                {capitalize(value?.action_type)}
                              </TableCell>
                              <TableCell align="center">
                                {value?.role === "superAdmin"
                                  ? "Managing Admin"
                                  : capitalize(value?.role)}
                              </TableCell>
                              <TableCell align="left">
                                {value.reason ? value.reason : "-"}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </AccordionDetails>
                </Accordion>
              )}
              {location.pathname.includes("view") &&
              userData.user.role !== "vendor" &&
              invoiceData.status === "unpaid" &&
              ((userData.user.role === "siteManager" &&
                invoiceData.managerStatus === "pending") ||
                (userData.user.role === "superAdmin" &&
                  invoiceData.superAdminStatus === "pending") ||
                (userData.user.role === "admin" &&
                  invoiceData.adminStatus === "pending") ||
                (userData.user.role === "accountant" &&
                  invoiceData.accountantStatus === "pending")) ? (
                <Grid
                  container
                  justifyContent="space-between"
                  style={{ margin: "10px" }}
                >
                  <Grid />
                  <Grid item>
                    {userData.user.role === "admin" ||
                    userData.user.role === "superAdmin" ? (
                      <Button
                        variant="contained"
                        style={{ justifyContentContent: "center" }}
                        color="primary"
                        size="large"
                        className={classes.button}
                        onClick={() => {
                          onChangeInoviceStatus("approved");
                        }}
                      >
                        Approve and pay
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        style={{ justifyContentContent: "center" }}
                        color="primary"
                        size="large"
                        className={classes.button}
                        onClick={() => {
                          onChangeInoviceStatus("approved");
                        }}
                      >
                        Approve
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      style={{
                        justifyContentContent: "center",
                        marginLeft: "10px",
                      }}
                      color="secondary"
                      size="large"
                      className={classes.button}
                      onClick={() => {
                        onChangeInoviceStatus("rejected");
                      }}
                    >
                      Reject
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        justifyContentContent: "center",
                        color: "red",
                        marginLeft: "10px",
                      }}
                      size="large"
                      className={classes.button}
                      onClick={() => {
                        onChangeInoviceStatus("changeRequest");
                      }}
                    >
                      Change Request
                    </Button>
                  </Grid>
                  <Grid />
                  <form>
                    <Dialog
                      onClose={() => setModalOpen(false)}
                      aria-labelledby="customized-dialog-title"
                      open={modalOpen}
                      fullWidth
                    >
                      <DialogTitle
                        id="customized-dialog-title"
                        onClose={() => setModalOpen(false)}
                        style={{ paddingLeft: "20px", color: "white" }}
                      >
                        Confirmation
                      </DialogTitle>
                      <TextField
                        name="Reason"
                        label="Reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        style={{ margin: "30px" }}
                        required={reqType !== "approved" ? true : false}
                      />
                      <Button
                        onClick={modalSubmit}
                        style={{ marginBottom: "10px" }}
                      >
                        Submit
                      </Button>
                    </Dialog>
                  </form>
                </Grid>
              ) : (
                <></>
              )}
              {!location.pathname.includes("view") && (
                <div className={styles.toolBar}>
                  <Grid container justifyContent="center">
                    <Button
                      variant="contained"
                      style={{ justifyContentContent: "center" }}
                      onClick={() => {
                        setFieldValue("status", "unpaid");
                      }}
                      type="submit"
                      color="primary"
                      size="large"
                      className={classes.button}
                      startIcon={<SaveIcon />}
                    >
                      Save and Continue
                    </Button>
                    {invoiceData.status === "draft" ? (
                      <Button
                        variant="contained"
                        style={{
                          justifyContentContent: "center",
                          margin: "0 10px",
                        }}
                        onClick={() => {
                          setFieldValue("status", "draft");
                        }}
                        type="submit"
                        color="secondary"
                        size="large"
                        className={classes.button}
                        startIcon={<DraftsIcon />}
                      >
                        Save as Draft
                      </Button>
                    ) : (
                      <></>
                    )}
                    <Button
                      variant="contained"
                      style={{
                        justifyContentContent: "center",
                        margin: "0 10px",
                      }}
                      size="large"
                      className={classes.button}
                      onClick={() => history.push("/invoices")}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </div>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default Invoice;
const invoiceSchema = yup.object().shape({
  status: yup.string().required(),
  date: yup.date().when("status", {
    is: "unpaid",
    then: yup.date().required(),
  }),
  dueDate: yup.date().when("status", {
    is: "unpaid",
    then: yup.date().required(),
  }),
  items: yup
    .array()
    .of(yup.object({}))
    .when("status", {
      is: "unpaid",
      then: yup
        .array()
        .of(
          yup
            .object({
              number: yup.number().required(),
              name: yup.string().required(),
              type: yup.string().required(),
              detailType: yup.string().required(),
              amount: yup.number().required().min(1),
            })
            .required()
        )
        .min(1)
        .required(),
    }),
  taxPercentage: yup.number().when("status", {
    is: "unpaid",
    then: yup.number().required(),
  }),
});
