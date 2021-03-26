<script context="module">
    import Home from "../pages/Home.svelte";
	import Playground from "../pages/Playground.svelte";
    
    export const pages = [
        { page: "home", component: Home },
        { page: "playground", component: Playground }
    ];
</script>