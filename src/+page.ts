import { env } from '$env/dynamic/private';

export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	const title = 'list products';
	const res = await fetch(`${env.SHEET}`);
	const products = await res.json();
	return { title, products };
};
