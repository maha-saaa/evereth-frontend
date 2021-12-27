import axios from "axios";

const API = axios.create({
  baseURL: "https://evereth.info",
});

export default API;
