<script lang="ts">
    import { get } from "svelte/store";
    import { cartItems, addToCart, removeFromCart } from "../../cart";
    export let product : Product = {id: "", Name:"", Price: 0,Thumbnail:""};
    let cart = get(cartItems); // [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
    // id: "1"
    let cartItemIndex = cart.findIndex((item) => { return item.id === product.id });
    let cartProduct = cart[cartItemIndex];
    cartItems.subscribe((newCartValue) => {
        cart = newCartValue;
        cartItemIndex = cart.findIndex((item) => { return item.id === product.id });
        cartProduct = cart[cartItemIndex];
    });
</script>


<div class="card">
    <header class="card-header"><h2>{product.Name}</h2></header>
	<img class="img" alt={product.Name} src={product.Thumbnail}/>
    {#if cartProduct !== undefined}
        <div class="card-body px-4">
            Quantity: <strong>{cartProduct.quantity}</strong>
        </div>
    {/if}
    <div class="card-body px-4">
        Price: ${product.Price}
    </div>
    <footer class="card-footer">
        <button class="p-2 rounded variant-glass-primary" on:click={() => addToCart(product.id)}>Buy Now</button>
       
    </footer>
</div>
<style>
	img{
		max-width: 200px;
		max-height: 200px;
	}
</style>