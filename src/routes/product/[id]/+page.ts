

import axios from "axios";

export async function load({ params }) {
  const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
  
  return response.data;
}
