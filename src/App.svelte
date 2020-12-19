<script>
  import router from "page";
  import routes from "./routes";

  let page = null;
  let params = {};
  let user = true;
  
  routes.forEach(route => {
	// Loop around all of the routes and create a new instance of
  // router for reach one with some rudimentary checks.
    router(
      route.path,
			// Set the params variable to the context.
      // We use this on the component initialisation
      (ctx, next) => {
        params = { ...ctx.params };
        next();
      },
			// Check if auth is valid. If so, set the page to the component
      // otherwise redirect to login.
      () => {
        if (route.auth && !user) {
          router.redirect("/");
        } else {
          page = route.component;
        }
      }
    );
  });

	router.start();

  import SiteHeader from './components/SiteHeader.svelte';
  import About from './components/About.svelte';

</script>

<style lang="scss">
  @import "../sass/_main.scss";
:global(body) {
    color: $light;
    background-color: $dark_grey;
  }
</style>

<SiteHeader/>

<main>
  <svelte:component this={page} {params} />
</main>

<About/>