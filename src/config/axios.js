import axios from "axios";

const config = axios.create({
  baseURL: "https://connections-backend-ytpd.onrender.com",
});
export default config;
