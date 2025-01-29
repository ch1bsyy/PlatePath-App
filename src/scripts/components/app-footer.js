class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="footer" tabindex="0">
        <div class="footer-content">
          <div tabindex="0" class="footer-rights">
            Copyright &copy; ${new Date().getFullYear()} - PlatePath Apps. All rights reserved.
          </div>
          <div tabindex="0" class="footer-credits">
            Project by Chiboy Cristian Sibarani
          </div>
        </div>
      </footer> 
    `;
  }
}

customElements.define('app-footer', AppFooter);
