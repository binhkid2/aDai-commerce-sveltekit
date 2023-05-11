
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch("https://sheetdb.io/api/v1/00hcxcoe0udsm");
    const products = await res.json();
   
    return { products };
}