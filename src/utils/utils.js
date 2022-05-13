export function toCommas(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function capitalize(status) {
  if (typeof status !== "string") return "";
  return status.charAt(0).toUpperCase() + status.slice(1);
}
