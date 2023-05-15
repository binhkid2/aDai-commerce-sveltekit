<script>
	import LazyImg from "$lib/Lazy/lazyImg.svelte";

</script>
<div class="grid grid-cols-1 md:grid-cols-2">
    <div>
        <div class="form-control">
            <div class=" px-4 mt-10 flex justify-between">
               <p class="px-2 text-2xl">Basic Details</p>
               <button class="bg-red-400 hover:bg-red-600 text-white font-bold py-1 px-4 rounded">Back</button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 p-4">
                <label class="input-group input-group-vertical p-2">
                    <span>Name</span>
                    <input type="text" placeholder="Matthew Harvey" class="input input-bordered" />
                </label>
                <label class="input-group input-group-vertical p-2">
                    <span>Email/Phone Number</span>
                    <input type="text" placeholder="matthewtlharvey@gmail.com" class="input input-bordered" />
                </label>
            </div>
            <div class="px-4 grid grid-cols-1">
                <p class="px-2 text-2xl">Shipping Address</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 p-4">
                <label class="input-group input-group-vertical p-2">
                    <span>Street</span>
                    <input type="text" placeholder="Example Road" class="input input-bordered" />
                </label>
                
                <label class="input-group input-group-vertical p-2">
                    <span>Town/City</span>
                    <input type="text" placeholder="London" class="input input-bordered" />
                </label>
                
            </div>
            <div class="m-auto my-6">
               <a href="/thankyou" > <button class="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">PAY NOW</button></a>           </div>
        </div>
    </div>
    <div class="relative p-10 max-w-6xl m-auto">
        <LazyImg
        src="https://images.unsplash.com/photo-1683476448574-3f82395a03f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                    alt="banner"
                   
                    class="h-full w-full object-contain object-center" />
    </div>
</div>