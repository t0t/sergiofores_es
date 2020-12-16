<script>
  import SiteHeader from './components/SiteHeader.svelte';
  import Banner from './components/Banner.svelte';
  import About from './components/About.svelte';
  import BlockQuote from './components/BlockQuote.svelte';
  import Image from './components/Image.svelte';
  import ClaimYoutube from './components/ClaimYoutube.svelte';
  import VideoContainer from './components/VideoContainer.svelte';
  import MainFeatures from './components/MainFeatures.svelte';
</script>

<SiteHeader/>

<main>

  <VideoContainer></VideoContainer>

  <MainFeatures></MainFeatures>

	<Banner></Banner>

  <ClaimYoutube></ClaimYoutube>

  <About/>

</main>

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