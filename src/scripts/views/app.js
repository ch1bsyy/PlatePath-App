import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import '../components/app-bar.js';
import '../components/hero.js';
import '../components/restaurant-card.js';
import '../components/app-footer.js';
import '../components/blog-article.js';
import '../components/detail-card.js';
import '../components/like-button.js';
import '../components/review-form.js';
import  '../components/loading-indicator.js';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this.content = content;

    this._initializeAppShell();
  }

  _initializeAppShell() {
    DrawerInitiator.init({
      menuButton: this._button,
      drawer: this._drawer,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();
    this._skipToLinkInit();
  }

  _skipToLinkInit() {
    const skipLinkElement = document.querySelector('.skip-to-content');
    skipLinkElement.addEventListener('click', (e) => {
      e.preventDefault();
      const mainContent = document.querySelector('[data-skip-target]');

      if (mainContent) {
        mainContent.focus();
      }
    });
  }
}

export default App;

