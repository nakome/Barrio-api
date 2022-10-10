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

  let site_url = config.apiUrl,
  url = `${site_url}/cmsbarrio/index.php?api=file&data=page&name=index`;
  let data = FetchData(url);
</script>

{#await data}
  <Loader />
{:then result}
  <Header subtitle={config.title} desc={result.description} />
  <main>
    <section>
      <article>
        {@html result.content}
      </article>
    </section>
  </main>
  <Footer />
{/await}
