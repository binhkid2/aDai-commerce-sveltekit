import { env } from "$env/dynamic/private";
/** @type {import('./$types').PageLoad} */
export async function load({ fetch,params }) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${params.id}`);

const productByCollection =  await res.json();
  return { productByCollection };
  console.log(productByCollection)
}
