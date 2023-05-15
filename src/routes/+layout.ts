import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const productsData = await fetch("https://fakestoreapi.com/products");
    const products = await productsData.json();
    const productMensData = await  fetch("https://fakestoreapi.com/products/category/jewelery");
    const productsMens = await productMensData.json();
    const productWommensData = await  fetch("https://fakestoreapi.com/products/category/electronics");
    const productWommens = await productWommensData.json();
    const productUnisexData = await  fetch("https://fakestoreapi.com/products/category/jewelery");
    const productsUnisex =  await productUnisexData.json();
    return { products , productsMens,productWommens,productsUnisex};
}
