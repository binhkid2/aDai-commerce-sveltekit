/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

		const res = await fetch(`https://fakestoreapi.com/products`);
    const products =  await res.json();
    return { products};
  }

