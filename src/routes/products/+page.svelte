<script lang="ts">
import Products from "../../components/Products/Products.svelte";
export let data;
let  products:Product[] = data.products;
</script>
<div>
    {#each products as product}
<Products {product}/>
{/each}
</div>