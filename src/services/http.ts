import axios from "axios";

const API = axios.create({
  baseURL: "http://162.0.211.97:4000",
});

export default API;
