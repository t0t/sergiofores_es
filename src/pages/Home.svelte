<script>
	import { data } from"../data/data.js";
	import { slides } from"../data/slider.js";

  import Cover from "../components/modulos/Cover.svelte";
  import Slider from "../components/modulos/Slider/Slider.svelte";
  import BannerTexto from "../components/modulos/BannerTexto.svelte";
  import Button from "../components/modulos/Button.svelte";
  export let current_page_name;
</script>

<svelte:head>
  <title>Sergio Forés - {current_page_name}</title>
</svelte:head>

<section id={current_page_name}>

  <Cover title={data[0].title} subtitle={data[0].subtitle} text={data[0].text} img={data[0].img} />
  
  <Slider {slides} />

</section>