<script lang="ts">
	import { get } from 'svelte/store';
	import { cartItems, addToCart, removeFromCart } from '../../cart';
	export let product: Product = { id: '', Name: '', Price: 0, Thumbnail: '' };
	let cart = get(cartItems); // [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
	// id: "1"
	let cartItemIndex = cart.findIndex((item) => {
		return item.id === product.id;
	});
	let cartProduct = cart[cartItemIndex];
	cartItems.subscribe((newCartValue) => {
		cart = newCartValue;
		cartItemIndex = cart.findIndex((item) => {
			return item.id === product.id;
		});
		cartProduct = cart[cartItemIndex];
	});
</script>

<div class="card">
	{#if cartProduct !== undefined}
		<header class="card-header"><h2>{product.Name}</h2></header>
		<div class="card-body px-4">
			Quantity: <strong>{cartProduct.quantity}</strong>
		</div>
		<div class="card-body px-4">
			Price: ${product.Price}
		</div>
		<footer class="card-footer">
			<button class="p-2 rounded variant-glass-primary" on:click={() => addToCart(product.id)}
				>Add</button
			>
			<button class="p-2 rounded variant-glass-error" on:click={() => removeFromCart(product.id)}
				>Remove</button
			>
		</footer>
	{/if}
</div>
