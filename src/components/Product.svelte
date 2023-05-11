<script lang="ts">
	export let data;
	const products = data.products;
</script>

<div>
	{#each products as product}
		<h1>{product.Name}</h1>
		<p>{product.Price}</p>
		<img class="img" alt={product.Name} src={product.Thumbnail} />
	{/each}
</div>

<style>
	img {
		max-width: 200px;
		max-height: 200px;
	}
</style>
