<script lang="ts">
	import { get } from 'svelte/store';
	import { cartItems, addToCart, removeFromCart, DeleteCart } from '../../cart';
	export let product: Product 
	let cart = get(cartItems); // [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
	// id: "1"
	let cartItemIndex = cart.findIndex((item) => {
		return item.id === product.id;
	});
	let cartProduct = cart[cartItemIndex];
	let price=product.price;
	let totalPrice: number = cartProduct ? cartProduct.quantity * product.price : 0;
	cartItems.subscribe((newCartValue) => {
		cart = newCartValue;
		cartItemIndex = cart.findIndex((item) => {
			return item.id === product.id;
		});
		cartProduct = cart[cartItemIndex];
		totalPrice = cartProduct ? cartProduct.quantity * product.price : 0;
	});
</script>


<div>
	
    <header ><h2>{product.title}</h2></header>

	
		<img class="img"  alt={product.title} src={product.image}/>
	
    {#if cartProduct !== undefined}
        <div >
            Quantity: <strong>{cartProduct.quantity}</strong>
        </div>
    {/if}
    <div>
        Price: ${product.price}
    </div>
    <footer >
        <button on:click={() =>  addToCart(product.id,totalPrice,price)}>Buy Now</button>
    </footer>
</div>
<style>
	img{
		max-width: 200px;
		max-height: 200px;
	}
</style>