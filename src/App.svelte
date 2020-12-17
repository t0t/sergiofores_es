<script>
  import SiteHeader from './components/SiteHeader.svelte';
  import BannerFull from './components/BannerFull.svelte';
  import About from './components/About.svelte';
  import BlockQuote from './components/BlockQuote.svelte';
  import Image from './components/Image.svelte';
  import BannerHalf from './components/BannerHalf.svelte';
  import VideoContainer from './components/VideoContainer.svelte';
  import MainFeatures from './components/MainFeatures.svelte';
  import Button from './components/Button.svelte';
</script>

<style lang="scss">
  @import "../sass/_main.scss";    

  :global(body) {
    color: $light;
    background-color: $dark_grey;
  }

  .Content {
    padding: $s0;
    
    @include media(s1) {
      padding: $s1;
    }
    
    p, h5 {
      font-weight: 500;
      text-align: left;
      @include padding-bottom(1);
    }
    
    h5 {
      font-weight: 800;
    }
    
    h4 {
      text-align: left;
      font-weight: 800;
      @include padding-bottom(1);
    }
    h2 {
      font-weight: 800;
      @include padding-bottom(1);
    }
  }

  video {
    width: 100%;
    object-fit: cover;
  }

	main {
		text-align: center;
	}

	h1 {
		color: $light_grey;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
  }
  
  @include media(s1) {
    main {
      max-width: none;
    }
  }

</style>

<SiteHeader/>

<main>

  
  <VideoContainer></VideoContainer>

  <MainFeatures></MainFeatures>

	<BannerFull></BannerFull>

  <BannerHalf
    text="Haciendo mis pinitos como Youtuber :) Vuelco mis reflexiones en cápsulas en torno a metafísica, arte, símbolos, etc. Y, por supuesto desde la Hermenéutica +0+1234."
  >
    <Button variante={3} text="Canal Youtube" url="https://www.youtube.com/channel/UC9C6HRn2RDG3bmWC4Soxtcw" />
    
    <div slot="hasvideo">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/7BtDRQuPjDg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
      
  </BannerHalf>
  
  <BannerHalf  variante={1}
    text="Disfruto prototipando productos digitales porque son análogos al Universo, son sistemas holísticos en si mismos. El Diseño Frontend es arte simbólico también. Mi workflow: SvelteJS, Git, Sass, CSSGrid, Vercel, etc."
    img="../img/frontend.jpg"
  >
    <Button variante={1} text="Repo en Github" url="https://github.com/t0t/sergiofores_es" />
  </BannerHalf>

  <About/>

</main>

