<script>
    import { onMount, onDestroy } from 'svelte';
    import Nav from './components/generic/nav/Nav.svelte';
    import Loading from './components/generic/Loading.svelte';
    import Layout from './_Layout.svelte';

    let loaded;
    const loading = () => {
        loaded = true;
    };

    onMount(() => {
        loaded = false;
    });
    onDestroy(() => {
        console.log('DESTROYED');
    });
</script>

<svelte:head>
    <meta property="og:title" content="Sergio Forés" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="sergiofores.es" />
</svelte:head>
<svelte:window on:load={loading} />

{#if loaded}
    <Layout>
        <div slot="content-container">
            <Nav />
        </div>
    </Layout>
{:else}
    <Loading />
{/if}
<!-- {#if loaded} <Loading /> {/if} -->

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
