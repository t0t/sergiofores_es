<script>
  import { onMount } from "svelte";

  export let params;

  const apiUrl = "/data/products.json";
  let data = [];
  let obra = {};
  
  onMount(async () => {
    const response = await fetch(apiUrl);
    data = await response.json();
    
    obra = data[params.id];
    console.log(data[params.id]);
  });
</script>

<style lang="scss">
  @import "../sass/_main.scss";

  .LayoutObras {
    display: grid;
    grid-template-columns: 1fr;
    padding: $h2;
    background-color: $dark;
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
    grid-template-columns: 1fr 2.62fr;
    align-items: center;
    border-radius: 50%;
    grid-area: texto;
    @include media(s1) {
      background-color: $dark_2;
    }
  }
  .ObraSingle {
    display: grid;
    grid-template-columns: 1fr;
    border-radius: 50%;
    width: 100%;
    grid-area: imagen;
  }
  .backbutton {
      display: grid;
      align-items: center;
      justify-items: center;
      width: $h4;
      height: $h4;
      /* border: 1px solid $light; */
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
    <a class="backbutton" href="/obras">Back</a>
    <p>
      <strong>{obra.title}</strong><br>
      {obra.description} <br>
      Ref: {obra.referencia}
    </p>
  </div>

  <img class="ObraSingle" src="/{obra.imagen}" alt="{obra.title}">

</section>