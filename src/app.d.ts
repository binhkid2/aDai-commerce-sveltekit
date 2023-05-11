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

	Name: string  // "Coffee"
	Price: number // 5
	Thumbnail:string
	 id: string;
	
}
declare class CartItem {
	id: string
	quantity: number
}

