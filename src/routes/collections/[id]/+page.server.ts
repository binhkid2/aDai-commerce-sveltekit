

/** @type {import('./$types').PageLoad} */
export async function load({ fetch,params }) {
  const res = await fetch(`https://fakestoreapi.com/products/category/${params.id}`)
const productByCollection =  await res.json();
  return { productByCollection };
  console.log(productByCollection)
}
