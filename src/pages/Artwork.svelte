<script>
    import { data } from '../data/data.js';
    import { productos } from '../data/productos.js';

    import ProductGallery from '../components/particular/ProductGallery/ProductGallery.svelte';
    import { onMount, onDestroy } from 'svelte';
    import Cover from '../components/generic/Cover.svelte';
    import BannerHalf from '../components/generic/BannerHalf.svelte';
    import Button from '../components/generic/Button.svelte';
    export let current_page_name;

    onMount(() => {
        console.log('MOUNTED COMPONENT');
    });

    onDestroy(() => {
        console.log('DESTROYED COMPONENT');
    });
</script>

<svelte:head>
    <title>Sergio Forés - {current_page_name}</title>
</svelte:head>

<main id="artwork">
    
    <Cover
        title={data[12].title}
        subtitle={data[12].subtitle}
        text={data[12].text}
        img={data[12].img}
    />

    <BannerHalf variante={1} title={data[2].title} text={data[2].subtitle}>
        <span slot="hasvideo">
            <video
                poster="/img/cover3.jpg"
                loop
                playsinline
                controls="controls"
            >
                <source
                    src="/img/desdelapoesiadelamateria.webm"
                    type="video/webm"
                />
                <source
                    src="/img/desdelapoesiadelamateria.mp4"
                    type="video/mp4"
                />
                <p>Ups! Su navegador no soporta vídeos HTML5.</p>
            </video>
        </span>
    </BannerHalf>

    <ProductGallery
        titulo={data[3].title}
        texto={data[3].subtitle}
        {productos}
    />

    <BannerHalf
        variante={1}
        title={data[4].title}
        text={data[4].subtitle}
        img={data[4].img}
    >
        <Button
            variante={0}
            text={data[4].buttontext}
            url={data[4].buttonurl}
        />
    </BannerHalf>
    
    <slot />

</main>

