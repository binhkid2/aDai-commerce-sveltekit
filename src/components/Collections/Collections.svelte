<script lang="ts">
export let  products:Product[];
    let m_vis = true;
    let w_vis = false;
    let k_vis = false;
    function changeM () {m_vis = true ; w_vis = false; k_vis = false;}
    function changeW () {m_vis = false; w_vis = true; k_vis = false;}
    function changeK () {m_vis = false; w_vis = false; k_vis = true;}
</script>
<section class="grid grid-cols-1 lg:grid-cols-3 max-w-7xl rounded-lg justify-center p-10 items-center m-auto">
    <div class="p-6 m-auto rounded-lg text-center">
        <h1 class="mb-5 text-5xl font-bold">Trending</h1>
        <img src="/flame.png" alt="flame" class="w-20 m-auto pb-16" />
        <button on:click={changeM} class="px-6 py-2 my-2 btn bg-gradient-to-r from-blue-500 to-blue-900 border-0 rounded-lg">Mens</button><br />
        <button on:click={changeW} class="px-6 py-2 my-2 btn bg-gradient-to-r from-blue-500 to-blue-900 border-0 rounded-lg">Womens</button><br />
        <button on:click={changeK} class="px-6 py-2 my-2 btn bg-gradient-to-r from-blue-500 to-blue-900 border-0 rounded-lg">Kids</button><br />
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="col-span-2 bg-white">
        {#if m_vis}
            <div class="grid grid-cols-1 md:grid-cols-2 justify-center md:p-14 m-auto max-w-7xl items-stretch">
                {#each  products.slice(0, 4) as product }
                    <a href="/product/{product.id}" class="transition ease-in-out delay-15 hover:scale-105 duration-300 md:p-10 m-auto">
                        <div class="card h-72 w-80 ring-2 rounded-xl bg-center bg-cover" style='background-image: url({product.image});'>
                            <div class="card-body pb-40">
                                <h2 class="card-title">{product.title}</h2>
                                <div class="badge bg-blue-700 border-0">{product.category}</div>
                                <div class="badge badge-secondary">£{product.price}</div>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        {/if}
        {#if w_vis}
            <div class="grid grid-cols-1 md:grid-cols-2 justify-center md:p-14 m-auto max-w-7xl items-stretch">
                {#each  products.slice(0, 4) as product }
                    <a href="/product/{product.id}" class="transition ease-in-out delay-15 hover:scale-105 duration-300 md:p-10 m-auto">
                        <div class="card h-72 w-80 ring-2 rounded-xl bg-center bg-cover" style='background-image: url({product.image});'>
                            <div class="card-body pb-40">
                                <h2 class="card-title">{product.title}</h2>
                                <div class="badge bg-blue-700 border-0">{product.category}</div>
                                <div class="badge badge-secondary">£{product.price}</div>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        {/if}
        {#if k_vis}
        <div class="grid grid-cols-1 md:grid-cols-2 justify-center md:p-14 m-auto max-w-7xl items-stretch">
            {#each  products.slice(0, 4) as product }
                <a href="/product/{product.id}" class="transition ease-in-out delay-15 hover:scale-105 duration-300 md:p-10 m-auto">
                    <div class="card h-72 w-80 ring-2 rounded-xl bg-center bg-cover" style='background-image: url({product.image});'>
                        <div class="card-body pb-40">
                            <h2 class="card-title">{product.title}</h2>
                            <div class="badge bg-blue-700 border-0">{product.category}</div>
                            <div class="badge badge-secondary">£{product.price}</div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
        {/if}
        <div class="flex justify-end">
            <button class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View all</button>
          </div>
          
    </div>
</section>