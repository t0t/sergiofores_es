<script>
	import Nav from "./components/nav/Nav.svelte";
	import Loading from './components/modulos/Loading.svelte';
	import { onMount, onDestroy } from "svelte"
    
	let loaded;
    const loading = () => {
        // if (loaded == false) {
        // 	loaded = true;
		// }
        loaded = true;
		console.log(`assets cargados y loaded es: ${loaded}`)
    };
  
    onMount(() => {
        loaded = false;
        console.log(`Montado pero loaded es ${loaded}`)
    })
    onDestroy(() => {
        // loaded = true
        // console.log(loaded)
    })
</script>

<style lang="scss">
	@use "sass/_index.scss" as *;
	
	:global(body) {
		margin: 0;
		background-color: $grey_4;
		box-sizing: border-box;
		position: relative;
		width: 100%;
	}
	:global(html) {
		font-size: $base_font_size;
		position: relative;
		width: 100%;
		height: 100%;
	}

</style>

<svelte:head>
  <meta property="og:title" content="Sergio Forés" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="sergiofores.es" />
</svelte:head>
<svelte:window on:load={loading} />

<main>
	{#if loaded} <Nav />
	{:else} <Loading /> {/if}
	<!-- {#if loaded} <Loading /> {/if} -->
</main>