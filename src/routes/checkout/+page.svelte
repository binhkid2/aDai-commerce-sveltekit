<script lang="ts">
  	import LazyImg from '$lib/Lazy/lazyImg.svelte';
    import AutoComplete from "simple-svelte-autocomplete"
  import { get } from "svelte/store";
  import { cartItems, addToCart, removeFromCart, DeleteCart } from '../../cart';
import CartsTest from "../../components/Carts/CartsTest.svelte";
	import { onMount } from "svelte";
  import type { PageData, ActionData } from './$types';

export let data: PageData;

  const products: Product[] = data.products;
  let cart = get(cartItems);
  let  grossPrice = cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  
  let grossQuantity = cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    let formattedPrice: string = formatPrice(grossPrice);
  cartItems.subscribe((newCartValue) => {
    cart = newCartValue;
      grossPrice = cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  
   grossQuantity = cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    formattedPrice = formatPrice(grossPrice);
  });
  function formatPrice(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

onMount(() => {
  formattedPrice = formatPrice(grossPrice);
});
let selectedState :String
    import state from '$lib/utils/state.json';
</script>
<!-- component -->

<div class="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
  <div class="flex flex-col justify-start items-start w-full space-y-9">
      <div class="flex justify-start flex-col items-start space-y-2">
          <button class="flex flex-row items-center text-gray-600 dark:text-white hover:text-gray-500 space-x-1">
              <svg class="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.91681 7H11.0835" stroke="currentColor" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
             <a href="/products" class=""> <p class="text-xl  leading-none">Back</p></a>
          </button>
          <p class="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-gray-50">Checkout</p>
          <p class="text-base leading-normal sm:leading-4 text-gray-600 dark:text-white">Home > Products > Checkout</p>
      </div>

      <div class="flex flex-row justify-center xl:justify-between space-y-6 my-0 xl:space-y-0 xl:space-x-6 w-full">
         

          <div class="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col w-full mt-0 lg:w-1/2">
              <button class="border border-transparent hover:border-blue-500 bg-blue-600 dark:bg-white dark:hover:bg-blue-900 dark:hover:border-blue-900 dark:text-blue-900 dark:hover:text-white hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                  <div>
                     <img width="16" height="16" src="https://cdn-icons-png.flaticon.com/512/87/87401.png" alt="messenger" />
                  </div>
                  <div>
                      <p class="text-base leading-4">Chat with us in facebok</p>
                  </div>
              </button>
              
              <button class=" mt-4  py-4 border border-transparent hover:border-gray-300 bg-red-900 dark:bg-white dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:text-gray-900 dark:hover:text-white hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2  rounded w-full">
                <div>
                  <img width="16" height="16" src="https://e7.pngegg.com/pngimages/851/579/png-clipart-zalo-laptop-login-mobile-phones-qr-code-laptop-electronics-text-thumbnail.png" alt="zalo" />
               </div>
                <div>
                    <p class="text-base leading-4">Chat with us in zalo</p>
                </div>
            </button>

              <div class="flex flex-row justify-center items-center mt-6">
                  <hr class="border w-full" />
                  <p class="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">Or Fill your address to buy COD</p>
                  <hr class="border w-full" />
              </div>
              <div class="form-control">
                <form method="POST"  action="?/checkout">
              <div class="mt-8">
                <label  class="input-group input-group-vertical">
                  <span>Name</span>
                  <input autocomplete="off" name="name"
                            required type="text" placeholder="Matthew Harvey" class="input input-bordered" />
                </label>
                <label class="input-group input-group-vertical py-2 lg:py-4">
                  <span>Phone Number</span>
                  <input autocomplete="off" name="phone"
                            required type="text" placeholder="0123456789" class="input input-bordered" />
                </label>
              </div>

              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Andress details</label>
              <div class="mt-8">
                <label class="input-group input-group-vertical pb-2 lg:pb-4">
                  <span>Street</span>
                  <textarea autocomplete="off" name="street"
                            required placeholder="Example Road" class="input input-bordered" />
                </label>
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="input-group input-group-vertical pb-2 lg:pb-4">
                  <span>State</span>
                  <AutoComplete required={true} name="state" items="{state}" labelFieldName="name" bind:selectedItem="{selectedState}" />
                </label>
                <label class="input-group input-group-vertical pb-2 lg:pb-4">
                  <span>Email (optional)</span>
                  <input type="email" placeholder="yourEmail@gmail.com" name="email" class="input input-bordered" />
                </label>
                <label class="input-group input-group-vertical pb-2 lg:pb-4">
                  <span>Note for Store (optional)</span>
                  <textarea  placeholder="I want something..." class="input input-bordered" />
                </label>
              </div>
              <button
               class="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                <div>
                    <p class="text-base leading-4">Ship COD</p>
                </div>
            </button>
                  </form>
                  </div>
           </div>

              
          
          <div class="relative lg:w-1/2 ml-4 mt-0 mb-4 hidden md:block">
            {#each products as product}
           <CartsTest {product}/>
            {/each}
            <div class="flex items-center pb-6 justify-between  ">
              <p class="text-2xl leading-normal text-gray-800 dark:text-white">Total</p>
              <p class="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">{formattedPrice}<span> &#8363;</span></p>
          </div>
            
          </div>
      </div>
     
  </div>
</div>




