class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero" aria-label="elemen hero" tabindex="0">
      <div class="hero-inner">
        <h1 class="hero-title" tabindex="0">
          Welcome to PlatePath
        </h1>
        <p class="hero-tagline" tabindex="0">
          Your ultimate guide to discovering the best restaurants around you.
        </p>
      </div>
    </div>
    `;
  }
}

customElements.define('hero-element', Hero);
