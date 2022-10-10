<main>
  <div class="loader">
    <svg height="100%" viewBox="0 0 32 32" width="100%">
      <circle cx="16" cy="16" fill="none" r="14" stroke-width="4" style="" />
      <circle cx="16" cy="16" fill="none" r="14" stroke-width="4" />
    </svg>
  </div>
</main>

<style>
  main {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loader {
    width: 32px;
    height: 32px;
    position: relative;
  }
  .loader svg {
    transform: rotate(360deg);
    animation: rota 1s infinite linear;
  }

  .loader svg circle:first-child {
    stroke: blue;
    opacity: 0.2;
  }
  .loader svg circle:last-child {
    stroke: blue;
    opacity: 0.5;
    stroke-dasharray: 80;
    stroke-dashoffset: 60;
  }

  @keyframes rota {
    0% {
      transform: rotate(-360deg);
    }
  }

  [data-theme="dark"] .loader svg circle:first-child {
    stroke: gray;
  }
  [data-theme="dark"] .loader svg circle:last-child {
    stroke: darkgray;
  }
</style>
