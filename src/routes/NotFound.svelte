<script>

    import { getContext } from "svelte";
  
    // components
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import Loader from "../components/Loader.svelte";
  
    // config
    const config = getContext("config");
  
    let data = false;
    let w = setTimeout(() => {
        data = true;
        clearTimeout(w);
    },2000);
    
  </script>
  
  {#if !data}
    <Loader />
  {:else}
    <Header title={config.title} desc={config.description} />
    <main>
      <section>
        <article>
          Error Page not found
        </article>
      </section>
    </main>
    <Footer />
  {/if}