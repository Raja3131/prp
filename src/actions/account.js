import * as api from "../api/index";

export const addPayPalAccount = (Url) => async () => {
  try {
    const { data } = await api.addPayPalAccount(Url);
    window.location.replace(data.url);
  } catch (error) {
    if (error.response.data.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error);
  }
};

export const addBankAccount = (Url) => async () => {
  try {
    const { data } = await api.addBankAccount(Url);
    window.location.replace(data.url);
  } catch (error) {
    if (error.response.data.code === 401) {
      localStorage.removeItem("profile");
      window.location.reload();
    }
    console.log(error);
  }
};
