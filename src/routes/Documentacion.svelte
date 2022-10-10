<script>
  // components
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Loader from "../components/Loader.svelte";

  // controllers
  import FetchData from "../controllers/FetchData";

  // export params
  export let params;

  // config
  import { getContext } from "svelte";
  const config = getContext("config");

  let site_url = config.apiUrl;
  // init vars
  let data,url;

  // reload if params changed
  $: {
    url = `${site_url}/cmsbarrio/index.php?api=file&data=page&name=documentacion/${params.docName}`,
    data = FetchData(url);
  };

</script>

{#await data}
  <Loader />
{:then output}
  <Header subtitle={output.title} desc={output.description} />
  <main>
    <section>
      <article>
        {@html output.content}
      </article>
    </section>
  </main>
  <Footer />
{/await}
