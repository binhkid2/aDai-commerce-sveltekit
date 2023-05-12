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
	let price = product.price;
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

<div class="card">
	{#if cartProduct !== undefined}
		<header class="card-header"><h2>{product.title}</h2></header>
		<div class="card-body px-4">
			Quantity: <strong>{cartProduct.quantity}</strong>
		</div>
		<div class="card-body px-4">
			Price: ${product.price}
		</div>
		<div class="card-body px-4">
			Total Price: ${totalPrice}
		  </div>
		 
					
		<footer class="card-footer">
			<button class="p-2 rounded variant-glass-primary" on:click={() => addToCart(product.id,totalPrice,price)}
				>Add</button
			>
			<button class="p-2 rounded variant-glass-error" on:click={() => removeFromCart(product.id)}
				>Remove</button
			>
			<button class="p-2 rounded variant-glass-error" on:click={() => DeleteCart(product.id)}
				>Delete</button
			>
		</footer>
	{/if}
</div>
