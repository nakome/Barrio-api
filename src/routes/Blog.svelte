<script>
  // components
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Loader from "../components/Loader.svelte";

  // controllers
  import FetchData from "../controllers/FetchData";

  // config
  import { getContext } from "svelte";
  const config = getContext("config");

  let site_url = config.apiUrl;
  // init vars
  let data, url;
  // reload if params changed
  $: {
    (url = `${site_url}/cmsbarrio/index.php?api=file&data=pages&name=blog`),
      (data = FetchData(url));
  }
</script>

{#await data}
  <Loader />
{:then output}
  <Header subtitle="Blog" desc="Como funciona el blog" />
  <main>
    <section class="container">
      <article class="row">
        {#each output as post}
          <div class="col col-md-4">
            <div class="card">
              <h4 class="divider py-1">{post.title}</h4>
              <p>{post.description}</p>
              <p class="text-right">
                <a href="#/blog/{post.slug}">leer mas..</a>
              </p>
            </div>
          </div>
        {/each}
      </article>
    </section>
  </main>
  <Footer />
{/await}
