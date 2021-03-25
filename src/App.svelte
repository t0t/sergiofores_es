<script>
	import Home from "./components/Home.svelte";
	
</script>

<style lang="scss">
	@import 'sass/_global.scss';
	
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
	
	<Home />

</main>