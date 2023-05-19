import { env } from "$env/dynamic/private";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch("http://localhost:3000/products");
  const products =  await res.json();
  return { products};
}

