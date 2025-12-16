import axios from "../config/axios";

async function getAllpackage() {
  const resp = await axios.get("packages");
  const { data } = resp;
  return data;
}

async function getSinglePackage(product_id) {
  const resp = await axios.get(`packages/${product_id}`);
  const { data } = resp;
  return data;
}
export { getAllpackage, getSinglePackage };
