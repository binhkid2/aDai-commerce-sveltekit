import { env } from "$env/dynamic/private";
/** @type {import('./$types').PageLoad} */
export async function load({ fetch,params }) {
  const res = await fetch(`${env.SHEET}/${params.id}`);

const productByCollection =  await res.json();
  return { productByCollection };
  console.log(productByCollection)
}
