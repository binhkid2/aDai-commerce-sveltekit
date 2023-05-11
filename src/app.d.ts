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
	id: string    // Stripe IDN
	Name: string  // "Coffee"
	Price: number // 5
	Thumbnail:string
}


