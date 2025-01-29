class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="header" tabindex="0">
        <div class="header-inner">
          <img tabindex="0" src="./images/brand-logo.png" alt="PlatePath Brand Logo" class="header-logo">
          <h1 tabindex="0" class="header-title">PlatePath</h1>
        </div>
         <button id="menu" class="header-menu" tabindex="0" aria-label="Open navigation menu">☰</button>
        <nav id="drawer" class="nav" role="navigation">
          <ul class="nav-list">
            <li class="nav-item"><a href="/">Home</a></li>
            <li class="nav-item"><a href="#/favorite">Favorite</a></li>
            <li class="nav-item"><a href="https://www.linkedin.com/in/chiboy-cristian-sibarani-59a379312/" target="_blank" rel="noopener noreferrer">About Us</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
