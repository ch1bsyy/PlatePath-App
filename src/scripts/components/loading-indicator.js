class LoadingIndicator extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
    this._updateStyle();
    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        visibility: hidden;
      }
      
      .spinner {
        width: 50px;
        height: 50px;
        border: 6px solid rgb(207, 10, 10);
        border-top: 6px solid rgb(220, 95, 0);
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
  
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += '<div class="spinner"></div>';
  }

  show() {
    this.style.visibility = 'visible';
  }

  hide() {
    this.style.visibility = 'hidden';
  }
}

customElements.define('loading-indicator', LoadingIndicator);
