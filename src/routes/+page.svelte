<script lang="ts">
   /** @type {import('./$types').PageData} */
   export let data : any;
   const products : Product[] = data.products;
	import Carts from "../components/Carts/Carts.svelte";
  import ProductsBanner from "../components/ProductsBanner/ProductsBanner.svelte";
   </script>
   <div>
    {#each products as product (product.id)}
    <Carts  {product}/>
    {/each}
    {#each products as product  (product.id)}
    <ProductsBanner  {product}/>
    {/each}
    <a href="checkout">CheckOut</a>
   </div>
   