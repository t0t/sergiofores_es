<script>
	import Home from "./pages/Home.svelte";
	import Playground from "./pages/Playground.svelte";
	
	let currentPage = "home";
	let show = false;

	function changePage(newPage) {
    	currentPage = newPage;
  	}

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

<main>
	
	
	<nav>
		<button on:click={() => changePage('playground')}>Playground</button>
		<button on:click={() => changePage('home')}>Home</button>
	</nav>
	{#if currentPage === 'playground'}
	<svelte:component this={Playground} />
	{:else}
	home 	<Home />
	{/if}

</main>