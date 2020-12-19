<script>
  import { onMount } from "svelte";
  import BannerHalf from '../components/BannerHalf.svelte';
  import Button from '../components/Button.svelte';

  export let params;

  const apiUrl = "/data/products.json";
  let data = [];
  let obra = {};
  
  onMount(async () => {
    const response = await fetch(apiUrl);
    data = await response.json();
    obra = data[params.id];
  });

	let index = params.id;
	
	const next = () => {
    index = (index + 1) % data.length;
    data[index];
    obra = data[index];
  };
  
</script>

<style lang="scss">
  @import "../sass/_main.scss";

  .LayoutObras {
    display: grid;
    grid-template-columns: 1fr;
    padding: $h2;
    background-color: $quaternary;
    grid-template-areas: 
    "imagen"
    "texto"
    ;
    gap: $h3;
    
    @include media(s1) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "texto imagen";
      gap: 0;
    }
  }

  .ObraDescription {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    border-radius: 50%;
    border: 1px solid $dark;
    grid-area: texto;
    @include media(s1) {
      /* background-color: $dark_2; */
    }
  }
  .ObraSingle {
    display: grid;
    grid-template-columns: 1fr;
    border-radius: 50%;
    width: 100%;
    grid-area: imagen;
    &:hover {
      cursor: e-resize;
    }
  }
  .backbutton {
      display: grid;
      align-items: center;
      justify-items: center;
      width: 52px;
      height: 52px;
      background-color: $dark;
      /* border: 1px solid $salmon; */
      border-radius: 50%;
      color: $light;
      text-decoration: none;
      &:hover {
        background-color: $dark_grey;
      }
    }
  figcaption {
    h1 {
      font-weight: bold;
    }
  }
  p {
    border-radius: 50%;
    text-align: left;
  }
  h1 {
    @include margin-bottom(1);
  }
</style>

<nav>
  
</nav>
<section class="LayoutObras">

  <div class="ObraDescription">
    <a class="backbutton" href="/obras/">&#8592;</a>
    <p>
      <strong>{obra.title}</strong><br>
      {obra.description} <br>
      Ref: {obra.referencia}
    </p>
  </div>

  <img on:click={next} class="ObraSingle" src="/{obra.imagen}" alt="{obra.title}">

</section>

<BannerHalf  variante={1}
  text="Todo son formas de arte simbólicas en si mismas y, como tales, cumplen una función mediadora capaz de abrirle lo real a la conciencia."
  img="../img/cover4.jpg"
>
<Button variante={1} text="Chat-Whatsapp" url="https://api.whatsapp.com/send?phone=+34619549032" />
</BannerHalf>