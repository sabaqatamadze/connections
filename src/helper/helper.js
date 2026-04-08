import axios from "../config/axios";

const API_KEY = "ef09e8d442a03f39553f19a71ad2676e";

async function getAllPackage() {
  const resp = await axios.get("packages", {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  return resp.data;
}

async function getSinglePackage(product_id) {
  const resp = await axios.get(`packages/${product_id}`, {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  return resp.data;
}

export { getAllPackage, getSinglePackage };
