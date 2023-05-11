<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data : any;

   
   
        console.log(data)
   </script>
   <div>
    {#each data.products as product}
    <h1>{product.Name}</h1>
    <p>{ product.Price}</p>
    {/each}
   </div>