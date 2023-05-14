

import axios from "axios";

export async function load({ params }) {
  const res = await axios.get(`https://fakestoreapi.com/products`)
const products = res.data
  return { products };
}
