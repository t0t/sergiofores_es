<script>
	import { data } from"../data/data.js";
	import { productos } from"../data/productos.js";
	import { slides } from"../data/slider.js";

  import Nav from "./Nav.svelte";
  import Cover from "./modulos/Cover.svelte";
  import T0T from "./modulos/T0T/T0T.svelte";
  import Slider from "./modulos/Slider/Slider.svelte";
  import ProductGallery from "./modulos/ProductGallery/ProductGallery.svelte";
  import ThreeBanner from "./modulos/ThreeBanner.svelte";
  import BannerFull from "./modulos/BannerFull.svelte";
  import BannerHalf from "./modulos/BannerHalf.svelte";
  import BannerTexto from "./modulos/BannerTexto.svelte";
  import Links from './modulos/Links.svelte';
  import PhiSvg from './modulos/PhiSvg/PhiSvg.svelte';
  import Button from "./modulos/Button.svelte";
</script>

<svelte:head> <title>Sergio Forés - Hermenéutica Holística +0+1234</title></svelte:head>

<style lang="scss">
  @import "../sass/_global.scss";

  :global(img) {
    width: 100%;
  }
  
  </style>

<Nav />

<div id="01234">  
  <Cover title={data[0].title} subtitle={data[0].subtitle} text={data[0].text} />
</div>

<BannerHalf variante={1} title={data[2].title} text={data[2].subtitle}>
  <span slot="hasvideo">
    <video poster="/img/cover3.jpg" loop playsinline controls="controls">
      <source src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
      <source src="/img/desdelapoesiadelamateria.mp4" type="video/mp4" />
      <p>Ups! Su navegador no soporta vídeos HTML5.</p>
    </video>
  </span>
</BannerHalf>

<Slider {slides} speed={500} />

<div id="artwork" >
  <ProductGallery titulo={data[3].title} texto={data[3].subtitle} {productos} />
</div>

<BannerHalf variante={1} title={data[4].title} text={data[4].subtitle} img={data[4].img}>
  <Button variante={0} text={data[4].buttontext} url={data[4].buttonurl} />
</BannerHalf>

<BannerHalf variante={2} title={data[5].title} text={data[5].subtitle}>
  <nav>
    <a href="https://slides.com/sergiofores/" target="_blank">Slides</a>
    <a href="https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing" target="_blank">Libro</a>
  </nav>
<div slot="hasSVG"><T0T /></div>
</BannerHalf>

<ThreeBanner variante={3} title={data[6].title} text ={data[6].subtitle} />

<BannerHalf variante={3} title={data[7].title} text={data[7].subtitle} img={data[7].img}>
  <Button variante={1} text="{data[7].button}" url="{data[7].buttonurl}" />
</BannerHalf>

<PhiSvg variante={2} title={data[8].title} text="{data[8].subtitle}" />

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

<div id="about">
<BannerTexto header={data[10].title} texto={data[10].subtitle} img={data[10].img}/>
</div>

<Links />
