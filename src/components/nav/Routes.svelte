<script context="module">
    import Home from "../../pages/Home.svelte";
	import Playground from "../../pages/Playground.svelte";
	import About from "../../pages/About.svelte";
	import Artwork from "../../pages/Artwork.svelte";
    
    export const pages = [
        { 
            name: "Introduction", 
            page: "home", 
            component: Home,
            href: Home
        },
        { 
            name: "Artwork", 
            page: "artwork", 
            component: Artwork,
            href: Artwork
        },
        { 
            name: "Playground", 
            page: "playground", 
            component: Playground,
            href: Playground
        },
        { 
            name: "About me", 
            page: "about", 
            component: About,
            href: About
        }
    ];
</script>