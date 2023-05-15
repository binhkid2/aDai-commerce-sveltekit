

/** @type {import('./$types').PageLoad} */
export async function load({ fetch,params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
const product =  await res.json();
  return { product};
  console.log(product)
}
