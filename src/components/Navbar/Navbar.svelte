<script>
	import Men from './Men.svelte';
	import MenTest from './MenTest.svelte';
	import Mentest2 from './Mentest2.svelte';
	import MenuMobile from './MenuMobile.svelte';
	import Cart from './SVG/Cart.svelte';
	import Favorite from './SVG/Favorite.svelte';
	import Hamburger from './SVG/Hamburger.svelte';
	import StoreName from './SVG/StoreName.svelte';
</script>

<div class="navbar bg-base-100 sticky shadow-xl top-0 z-50">
	<div class="navbar-start">
		<div class="dropdown">
			<Hamburger />
			<MenuMobile />
			<!-- auto hiden when lg screen -->
		</div>
		<StoreName />
	</div>
	<div class="navbar-center hidden lg:flex">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<ul class="menu menu-horizontal px-1" tabindex="0">
			<li><a href="/man">Man</a></li>
			<li><a href="/man">Women</a></li>
			<li><a href="/man">UniSex</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<div>
			<Favorite />
		</div>
		<div>
			<Cart />
		</div>
	</div>
</div>
