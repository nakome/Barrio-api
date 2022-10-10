<script>
  import { onMount } from "svelte";
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";

  // get context for json
  import json from "../storage/config.json";
  import { getContext } from "svelte";
  let config = getContext("config", json);

  // controllers
  import Storage from "../controllers/Storage";
  import toggleDarkMode from "../controllers/DarkMode";
  import addFontSize from "../controllers/FontSize";

  export let subtitle = "";
  export let desc = "";

  // toggle dark mode if is selected on storage
  onMount(() => {
    let themebtn = document.querySelector(".toogle-theme"),
      logo = document.querySelector(".logo");
    document.documentElement.setAttribute("data-theme", Storage.val.color);
    if (Storage.val.color === "dark") {
      themebtn.innerText = "☀️";
      logo.src = "./favicon-light.png";
    } else {
      themebtn.innerText = "🌛";
      logo.src = "./favicon.png";
    }
  });
</script>

<!-- header -->
<header>
  <section>
    <h1>{subtitle}</h1>
    <h2>{desc}</h2>
    <nav>
      <ul>
        <li>
          <img
            class="logo"
            alt="logo"
            src="./favicon.png"
            style="width:25px;height:25px;"
          />
          <span>{config.title}</span>
        </li>

        <li><a use:link use:active href="/">Inicio</a></li>
        <li><a use:link use:active href="/blog">Blog</a></li>
        <li>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="#" on:click={e => e.preventDefault()}>Docs</a>
          <ul>
            <li>
              <a use:link use:active href="/documentacion/primeros-pasos"
                >Primeros pasos</a
              >
            </li>
            <li>
              <a use:link use:active href="/documentacion/estructura"
                >Estructura</a
              >
            </li>
            <li>
              <a use:link use:active href="/documentacion/acciones">Acciones</a>
            </li>
            <li>
              <a use:link use:active href="/documentacion/shortcodes"
                >Shortcodes</a
              >
            </li>
          </ul>
        </li>
        <li class="float-right sticky">
          <a
            href="/#"
            use:link={{href: '/#', disabled: true}}
            class="font-more"
            on:click={(evt) => addFontSize(evt, -1)}
          >
            ᴀ-
          </a>|
          <a
            href="/#"
            use:link={{href: '/#', disabled: true}}
            class="font-less"
            on:click={(evt) => addFontSize(evt, 1)}
          >
            A+
          </a>
        </li>
        <li class="float-right sticky">
          <a
            href="/#"
            use:link={{href: '/#', disabled: true}}
            class="toogle-theme"
            on:click={(evt) => toggleDarkMode(evt)}>🌛</a
          >
        </li>
      </ul>
    </nav>
  </section>
</header>

<!-- /header -->
<style>
  /* Style for "active" links; need to mark this :global because the router adds the class directly */
  :global(a.active) {
    color: var(--clink);
  }
  :global(li ul li a.active) {
    color: var(--cemph);
  }




</style>
