import axios from "axios";

const API = axios.create({
  baseURL: "https://evereth.net",
});

export default API;
