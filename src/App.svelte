<script>
	import { pages } from  './components/Nav2.svelte';
	let currentPage = pages[0];
	let intSelected = 0;
	let current_page_name = currentPage.page;

	function changeComponent(event) {
		currentPage = pages[event.srcElement.id];
		intSelected = event.srcElement.id;
		current_page_name = currentPage.page
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
	{#each pages as option, i}
		<button class={intSelected==i ? "active" : "xx"} on:click={changeComponent} id={i} role="tab">{option.page}</button>
	{/each}

	<svelte:component this={currentPage.component} {current_page_name}/>
</main>