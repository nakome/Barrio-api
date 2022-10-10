<script>
  import Router from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";

  // config context
  import Json from "./storage/config.json";
  import { setContext } from "svelte";
  setContext("config", Json);

  // routes
  import Home from "./routes/Home.svelte";
  import Blog from "./routes/Blog.svelte";
  import Post from "./routes/Post.svelte";
  import Documentacion from "./routes/Documentacion.svelte";
  import NotFound from "./routes/NotFound.svelte";

  const routes = {
    "/": wrap({
      component: Home,
    }),
    "/blog": wrap({
      component: Blog,
    }),
    "/blog/:postName": wrap({
      component: Post,
    }),
    "/documentacion/:docName": wrap({
      component: Documentacion,
    }),
    "*": wrap({
      component: NotFound,
    }),
  };

  function routeLoading(event) {
	//console.log('routeLoading event');
  }

  function routeLoaded(event) {
    //console.log("routeLoaded event");
    console.table(event.detail);
  }
</script>

<Router 
  {routes}
  on:routeLoading={routeLoading}
  on:routeLoaded={routeLoaded}
/>
