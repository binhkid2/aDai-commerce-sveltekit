
import { env } from '$env/dynamic/private';
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const productsData = await fetch(`${env.SHEET}`);
    const products = await productsData.json();
 
    return { products };
}
