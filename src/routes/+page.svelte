<script lang="ts">
   /** @type {import('./$types').PageData} */
   export let data : any;
  import Product from "../components/Products/Product.svelte";
   </script>
   <div>
<Product {data}/>
   </div>
   