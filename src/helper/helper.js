import axios from "../config/axios";

async function getProducts() {
  const resp = await axios.get("getProducts");
  return resp.data;
}

async function getProduct(product_id) {
  const resp = await axios.get(`getProduct/${product_id}`);
  return resp.data;
}

export { getProducts, getProduct };
