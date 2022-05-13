import axios from "axios";
import { userData, API_BASE_URL } from "../utils/config";

const API = axios.create({ baseURL: API_BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${userData.tokens.accessToken}`;
  }
  return req;
});

export const fetchInvoice = (limit, offset) => {
  if (userData.user.role === "vendor")
    return API.get(`/v1/invoice?limit=${limit}&offset=${offset}`);
  else if (userData.user.role === "admin")
    return API.get(`v1/admin/invoice?limit=${limit}&offset=${offset}`);
  else if (userData.user.role === "accountant")
    return API.get(`/v1/accountant/invoice?limit=${limit}&offset=${offset}`);
  else if (userData.user.role === "siteManager")
    return API.get(`/v1/manager/invoice?limit=${limit}&offset=${offset}`);
  else if (userData.user.role === "superAdmin")
    return API.get(`/v1/superAdmin/invoice?limit=${limit}&offset=${offset}`);
};

//Accounts
export const addBankAccount = (Url) => {
  return API.post(`/v1/wallet/add-ach`, {
    successUrl: Url,
    failureUrl: Url,
  });
};

export const addPayPalAccount = (Url) => {
  return API.post(`/v1/wallet/add-paypal`, {
    successUrl: Url,
    failureUrl: Url,
  });
};

export const createVendor = (vendorName) => {
  return API.post(`/v1/vendor`, vendorName);
};

export const updateVendor = (updateData) => {
  return API.patch(`/v1/vendor`, updateData);
};

export const fetchInvoiceById = (id) =>
  API.get(`/v1/invoice/details?_id=${id}`);
export const customLineItem = (limit, offset) => {
  return API.get(`/v1/invoice/customLineItem?limit=${limit}&offset=${offset}`);
};
export const addInvoice = (invoice) => API.post("/v1/invoice", invoice);
export const updateInvoice = (updatedInvoice) =>
  API.patch(`/v1/invoice`, updatedInvoice);
export const deleteInvoice = (id) => API.delete(`/v1/admin/invoice?_id=${id}`);
export const deleteCustomLineItem = (id) =>
  API.delete(`/v1/invoice/customLineItem?_id=${id}`);
export const fetchInvoicesByUser = (searchQuery) =>
  API.get(`/invoices?searchQuery=${searchQuery.search}`);
export const changeInoviceStatus = (id, status, reason) => {
  if (userData.user.role === "admin")
    return API.patch(`/v1/admin/invoice`, {
      _id: id,
      adminStatus: status,
      reason: reason,
    });
  else if (userData.user.role === "accountant")
    return API.patch(`/v1/accountant/invoice`, {
      _id: id,
      accountantStatus: status,
      reason: reason,
    });
  else if (userData.user.role === "siteManager")
    return API.patch(`/v1/manager/invoice`, {
      _id: id,
      managerStatus: status,
      reason: reason,
    });
  else if (userData.user.role === "superAdmin")
    return API.patch(`/v1/superAdmin/invoice`, {
      _id: id,
      superAdminStatus: status,
      reason: reason,
    });
};
export const getItemsList = (name = null, id = null) =>
  API.get(`/v1/invoice/lineItemTypes`, {
    name: name,
    _id: id,
  });

export const fetchClient = (id) => API.get(`/clients/${id}`);
export const fetchClients = (page) => API.get(`/clients?page=${page}`);
export const addClient = (client) => API.post("/clients", client);
export const updateClient = (id, updatedClient) =>
  API.patch(`/clients/${id}`, updatedClient);
export const deleteClient = (id) => API.delete(`/clients/${id}`);
export const fetchClientsByUser = (searchQuery) =>
  API.get(`/clients/user?searchQuery=${searchQuery.search}`);

export const signIn = (formData) => API.post("/v1/auth/login", formData);
export const signUp = (formData) => API.post("/v1/auth/register", formData);
export const createUser = (formData) =>
  API.post("v1/auth/create/user", formData);
export const forgot = (formData) =>
  API.post("/v1/auth/forgot-password", formData);
export const reset = (token, password) =>
  API.post(`/v1/auth/reset-password?token=${token}`, { password: password });
export const logout = (token) => API.post("/v1/auth/logout", token);
export const getDcId = () => API.get("/v1/invoice/dcIds");
export const refreshToken = (token) =>
  API.post("/v1/auth/refresh-tokens", token);

export const fetchProfilesBySearch = (searchQuery) =>
  API.get(
    `/profiles/search?searchQuery=${
      searchQuery.search || searchQuery.year || "none"
    }`
  );
export const fetchProfile = (id) => API.get(`/profiles/${id}`);
export const fetchProfiles = () => API.get("/profiles");
export const fetchProfilesByUser = (searchQuery) =>
  API.get(`/profiles?searchQuery=${searchQuery.search}`);
export const createProfile = (newProfile) => API.post("/profiles", newProfile);
export const updateProfile = (id, updatedProfile) =>
  API.patch(`/profiles/${id}`, updatedProfile);
export const deleteProfile = (id) => API.delete(`/profiles/${id}`);
export const getUserList = () =>
  API.get(`/v1/auth/users/list?active=1&role=vendor`);
export const getVendorList = () => API.get(`/v1/vendor`);
export const listDeletedInvoice = (limit, offset) =>
  API.get(`v1/invoice/deleted?limit=${limit}&offset=${offset}`);
// notification
export const getNotification = (limit, offset) =>
  API.get(`v1/notification?limit=${limit}&offset=${offset}`);

export const AddWalletPayment = (params) => {
  if (userData.user.role === "admin" || userData.user.role === "superAdmin") {
    return API.post("/v1/wallet/add-balance", params);
  }
};

export const addCustomLineItem = (invoice) => {
  return API.post(`/v1/invoice/customLineItem`, invoice);
};

export const fetchDetails = (dcids) => {
  return API.post("v1/invoice/fetchDcDetails", dcids);
};

export const listWallet = () => {
  if (userData.user.role === "admin" || userData.user.role === "superAdmin") {
    return API.get("v1/wallet/company");
  } else if (userData.user.role === "vendor") {
    return API.get("v1/wallet/vendor");
  }
};

export const getTransactionHistoryList = (params) => {
  if (
    userData.user.role === "admin" ||
    userData.user.role === "superAdmin" ||
    userData.user.role === "vendor"
  ) {
    return API.post("v1/wallet/history", params);
  }
};

//Reports
export const vendordueReport = () => {
  return API.get(`/v1/reports/vendorBasedDuePaid`);
};

export const vendordueReportFilter = (params) => {
  return API.get(`/v1/reports/vendorBasedDuePaid?vendorId=${params}`);
};

export const DcIdReport = () => {
  return API.get(`/v1/reports/dcIdsBasedDuePaid`);
};

export const DcIdReportFilter = (params) => {
  if (params) {
    return API.get(`/v1/reports/dcIdsBasedDuePaid?dcId=${params}`);
  }
};

export const getAllVendors = () => {
  return API.get(`/v1/vendor/all`);
};

export const withdrawAmount = (params) => {
  if (userData.user.role === "vendor") {
    return API.post("/v1/vendor/withdraw", params);
  }
};

//
export const withdraw = (limit, offset) => {
  if (userData.user.role === "admin" || userData.user.role === "superAdmin") {
    return API.get(`/v1/admin/withdraw?limit=${limit}&offset=${offset}`);
  }
};

export const withdrawStatus = (status, limit, offset) => {
  if (userData.user.role === "admin" || userData.user.role === "superAdmin") {
    return API.get(
      `/v1/admin/withdraw?limit=${limit}&offset=${offset}&status=${status}`
    );
  }
};

export const updatewithdraw = (withdraw) => {
  if (userData.user.role === "admin" || userData.user.role === "superAdmin") {
    return API.patch(`/v1/admin/withdraw`, withdraw);
  }
};
