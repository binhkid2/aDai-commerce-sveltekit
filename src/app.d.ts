// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}
declare class Product {

	title: string  // "Coffee"
	price: number // 5
	image:string
	 id: string;
	 description:string
	 category:string
}
declare class CartItem {
	id: string
	quantity: number
	price:number
	totalPrice:number
	
}

