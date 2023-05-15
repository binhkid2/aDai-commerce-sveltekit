<script lang="ts">
	import Men from './Men.svelte';
	import MenuMobile from './MenuMobile.svelte';
	import Cart from './SVG/Cart.svelte';
	import Favorite from './SVG/Favorite.svelte';
	import Hamburger from './SVG/Hamburger.svelte';
	import StoreName from './SVG/StoreName.svelte';
</script>

<div class="navbar pl-0 pr-0 bg-base-100 sticky shadow-xl top-0  z-50">
	<div class="navbar-start">
		<div class="dropdown">
			<Hamburger />
			<MenuMobile />
			<!-- auto hiden when lg screen -->
		</div>
		<div class="lg:pl-5 lg:pb-2"><StoreName /></div>
	</div>
	<div class="navbar-center hidden lg:flex">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<ul class="menu menu-horizontal" tabindex="0">
			<Men />
			<Men />
			<Men />
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<Favorite />
		<Cart />
	</div>
</div>

<style>
</style>
