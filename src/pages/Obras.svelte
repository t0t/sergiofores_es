<script>
  import { onMount } from "svelte";
  import BannerHalf from '../components/BannerHalf.svelte';
  import Button from '../components/Button.svelte';

  let productos = [];

  onMount(async () => {
    const res = await fetch("/data/products.json");
    productos = [...await res.json()];
  });
</script>

<style lang="scss">
  @import "../sass/_main.scss";

  .LayoutObras {
    padding: $h2;
    background-color: $quaternary;
    h1 {
      @include margin-bottom(1);
    }
  }

  img {
    opacity: .55;
    border-radius: 50%;
    object-fit: cover;
    max-width: 100px;
    &:hover {
      opacity: 1;
    }
  }

  .ObrasContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    justify-items: center;
    grid-auto-flow: dense;
    max-width: 99%;
    gap: $h2;
    padding: $h2;

    .Obra {
      border-radius: 50%;
      border: 1px solid $dark;
      padding: $h2;

      &:nth-child(2) {
        grid-column-end: span 2;
      }
      &:nth-child(3) {
          /* background-color: #fff; */
      }
      &:nth-child(5) {
        grid-column-end: span 2;
        /* grid-row: 3/5; */
          /* background-color: #fff; */
      }
      &:nth-child(9) {
        /* grid-column: 1/3;
        grid-row: 5/7; */
      }
    }

    figure {
      display: grid;
      justify-items: center;
      position: relative;

      /* &:hover figcaption {
        display: inherit;
      } */
    }
  }
  .Obra .figure a:hover {
    z-index: 100;
        background-color: $light;
  }
  a {
    color: $dark;
  }

  figcaption {
    text-align: center;
    display: none;
    position: absolute;
    bottom: $h4;
    /* padding: $h1; */
    /* background-color: $light; */
  }

</style>
  

<section class="LayoutObras">
  
  <h2>Galería de cuadros</h2>

  <div class="ObrasContainer">
    {#each productos as producto}
    <a href="/obras/{producto.id}">
    <article class="Obra">
      <figure>
          <img src="../{producto.thumb}" alt="{producto.title}">
          <figcaption>
            {producto.title}
          </figcaption>
        </figure>
      </article>
    </a>
    {/each}
  </div>
</section>

<BannerHalf  variante={1}
  text="Todo son formas de arte simbólicas en si mismas y, como tales, cumplen una función mediadora capaz de abrirle lo real a la conciencia."
  img="../img/cover4.jpg"
>
<Button variante={1} text="Chat-Whatsapp" url="https://api.whatsapp.com/send?phone=+34619549032" />
</BannerHalf>