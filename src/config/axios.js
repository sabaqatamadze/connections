import axios from "axios";

const config = axios.create({
  baseURL: "https://connections-backend-k0s7.onrender.com",
  headers: {
    "x-api-key": import.meta.env.VITE_API_KEY,
  },
});

export default config;
