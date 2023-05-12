<script lang="ts">
 export let data:any;
 let product:Product = data;
import Products from "../../../components/Products/Products.svelte";
</script>
<div>
    <Products {product}/>
</div>
<a href="/checkout">Check out</a>