<script lang="ts">
   /** @type {import('./$types').PageData} */
 export let data :any;
 const  productMens  = data.productMens;
	const  productWommens  = data.productWommens;
	const  productUnisexs = data.productUnisexs;
    import "../app.css";
	import Footer from "../components/Footer/Footer.svelte";
	import NavBar from "../components/Navbar/Navbar.svelte";
  </script>
  <NavBar {productMens} {productUnisexs} {productWommens}/>

  <slot />
  <Footer/>