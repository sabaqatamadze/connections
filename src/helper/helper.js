import axios from "../config/axios";

async function getAllPackage() {
  const resp = await axios.get("packages");
  return resp.data;
}

async function getSinglePackage(product_id) {
  const resp = await axios.get(`packages/${product_id}`);
  return resp.data;
}

export { getAllPackage, getSinglePackage };
