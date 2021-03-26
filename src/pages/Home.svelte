<script>
	import { data } from"../data/data.js";
	import { productos } from"../data/productos.js";
	import { slides } from"../data/slider.js";  

  // import Loading from '../components/modulos/Loading.svelte';
  
  // import { onMount, onDestroy } from "svelte"

  // let loaded;
  // onMount(() => {
  //   loaded = false;
  //   console.log(`MOUNTED y loaded es ${loaded}`)
  // })
  // onDestroy(() => {
  //   loaded = true
  //   console.log(loaded)
  // })
  // const loading = () => {
  //   if (loaded == false) {
  //     loaded = true;
  //     console.log(loaded)
  //   }
  // };

  // import Nav from "../components/Nav.svelte";

  import Cover from "../components/modulos/Cover.svelte";
  import Slider from "../components/modulos/Slider/Slider.svelte";
  import ProductGallery from "../components/modulos/ProductGallery/ProductGallery.svelte";
  // import BannerFull from "../components/modulos/BannerFull.svelte";
  import BannerHalf from "../components/modulos/BannerHalf.svelte";
  import BannerTexto from "../components/modulos/BannerTexto.svelte";
  import Button from "../components/modulos/Button.svelte";
  import Links from '../components/modulos/Links.svelte';
  export let current_page_name;
</script>

<!-- <svelte:window on:load={loading} /> -->
<svelte:head>
  <title>Sergio Forés - Hermenéutica Holística +0+1234 - {current_page_name}</title>
</svelte:head>

<!-- <Nav /> -->

<!-- {#if (loaded == true)}
  loaded
{:else}
  <Loading />
{/if} -->

{current_page_name}

<section id="01234">  
  <Cover title={data[0].title} subtitle={data[0].subtitle} text={data[0].text} />
</section>

<BannerHalf variante={1} title={data[2].title} text={data[2].subtitle}>
  <span slot="hasvideo">
    <video poster="/img/cover3.jpg" loop playsinline controls="controls">
      <source src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
      <source src="/img/desdelapoesiadelamateria.mp4" type="video/mp4" />
      <p>Ups! Su navegador no soporta vídeos HTML5.</p>
    </video>
  </span>
</BannerHalf>

<Slider {slides} />

<section id="artwork" >
  <ProductGallery titulo={data[3].title} texto={data[3].subtitle} {productos} />

  <BannerHalf variante={1} title={data[4].title} text={data[4].subtitle} img={data[4].img}>
    <Button variante={0} text={data[4].buttontext} url={data[4].buttonurl} />
  </BannerHalf>
</section>

<BannerHalf title={data[9].title} text={data[9].subtitle}>
  <Button variante={1} text={data[9].buttontext} url={data[9].buttonurl} />
  <div slot="hasvideo">
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/7BtDRQuPjDg"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</BannerHalf>

<section id="about">
  <BannerTexto header={data[10].title} texto={data[10].subtitle} img={data[10].img}/>
</section>

<Links />