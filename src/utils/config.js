export const userData = JSON.parse(localStorage.getItem("profile"));

let apiBaseUrl = "";
if (window.location.hostname === "localhost") {
  apiBaseUrl = "https://prp.embassysocial.io";
} else if (window.location.hostname === "http://52.55.21.51") {
  apiBaseUrl = "https://prp.embassysocial.io";
} else {
  apiBaseUrl = "https://prp.embassysocial.io";
}

export const API_BASE_URL = apiBaseUrl;
