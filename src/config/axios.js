import axios from "axios";

const config = axios.create({
  baseURL: "https://connections-backend-k0s7.onrender.com",
  headers: {
    "x-api-key": "ef09e8d442a03f39553f19a71ad2676e",
  },
});
export default config;
