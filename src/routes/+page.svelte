<script lang="ts">
   /** @type {import('./$types').PageData} */
   export let data : any;
   const products : Product[] = data.products;
	import Carts from "../components/Carts/Carts.svelte";
	import Collections from "../components/Collections/Collections.svelte";
	import Hero from "../components/Hero/Hero.svelte";
  import ProductsBanner from "../components/ProductsBanner/ProductsBanner.svelte";
   </script>
   <div>
   <div><Hero/></div>
   <div><Collections {products}  /></div>
   <div>
    {#each products as product (product.id)}
    <Carts  {product}/>
    {/each}
    {#each products as product  (product.id)}
    <ProductsBanner  {product}/>
    {/each}
    <a href="checkout">CheckOut</a>
   </div>
   </div>
   <style lang="postcss">

      
   </style>
   