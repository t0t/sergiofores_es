<script>
    import Playground from "../../../pages/Playground.svelte";
	import About from "../../../pages/About.svelte";
	import Artwork from "../../../pages/Artwork.svelte";
    const pages = [{
            name: "About",
            page: "about",
            component: About,
            href: About
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
        }
    ];
    let currentPage = pages[0];
    export let current_page_name = currentPage.page;

    let link1=false;
    let link2=false;
    let link3=false;
    
</script>

{#if link1}
     <svelte:component this={Artwork} {current_page_name}/>
{:else if link2}
     <svelte:component this={Playground} {current_page_name}/>
{:else if link3}
     <svelte:component this={About} {current_page_name}/>
{:else}
    <nav>
        <button on:click={()=>link1==true}>3D printing artwork</button>
        <button>Web prototyping, frontend, laboratory/Playground</button>
        <button>About me and Holistic Hermeneutics +0+1234</button>
    </nav>
{/if}

<style lang="scss">
    @use "../../../sass/_index.scss"as *;

    nav {
        display: grid;
        place-content: center;
        height: 300px;
        background-color: $grey_4;
        width: 100%;
    }
</style>