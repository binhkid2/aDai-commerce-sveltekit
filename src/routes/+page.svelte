<script lang="ts">
   /** @type {import('./$types').PageData} */
   export let data : any;
   const products : Product[] = data.products;
	import Carts from "../components/Carts/Carts.svelte";
  import Products from "../components/Products/Products.svelte";
   </script>
   <div>
    {#each products as product}
    <Carts  {product}/>
    {/each}
    {#each products as product}
    <Products  {product}/>
    {/each}
   </div>
   