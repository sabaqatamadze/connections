import axios from "../config/axios";

async function getProducts() {
  const resp = await axios.get("/api/v1/products");
  return resp.data;
}

async function getProduct(product_id) {
  const resp = await axios.get(`/api/v1/products/${product_id}`);
  return resp.data;
}

export { getProducts, getProduct };
