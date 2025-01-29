import { getRestaurants } from '../../data/restaurant-api.js';
import Swal from 'sweetalert2';

const HomePage = {
  async render() {
    return `
      <hero-element></hero-element>

      <section id="restaurant-list" tabindex="0" data-skip-target>
        <h1 tabindex="0" class="section-title">Explore Restaurants</h1>
        <div id="card-container" class="card-container"></div>
      </section>

      <section id="blog-articles">
        <h2 tabindex="0" class="section-title">Latest Articles</h2>
        <div class="articles-container">
          ${this._renderArticles()}
        </div>
      </section>
    `;
  },

  async afterRender() {
    const loadingIndicator = document.querySelector('loading-indicator');
    const container = this._getContainerElement();
    loadingIndicator.show();

    try {
      const restaurants = await this._fetchRestaurants();
      this._renderRestaurants(container, restaurants);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to load restaurants. Please check your connection or try again later.',
      });
      console.error('Error loading restaurants:', error);
    } finally {
      loadingIndicator.hide();
    }
  },

  _getContainerElement() {
    return document.querySelector('#card-container');
  },

  _showLoading(container) {
    container.innerHTML = '<p>Loading...</p>';
  },

  _showErrorMessage(container, message) {
    container.innerHTML = `<p>${message}</p>`;
  },

  async _fetchRestaurants() {
    return await getRestaurants();
  },

  _renderRestaurants(container, restaurants) {
    container.innerHTML = '';

    if (!restaurants.length) {
      this._showErrorMessage(container, 'No restaurants available.');
      return;
    }

    restaurants.forEach((restaurant) => {
      const card = document.createElement('restaurant-card');
      card.restaurant = restaurant;
      container.appendChild(card);
    });
  },

  _renderArticles() {
    const articles = [
      {
        title: "Culinary Adventures: A Food Lover's Guide",
        image: './images/articles/article-image_1.jpg',
        link: 'https://mytravelsjourney.com/culinary-adventures-a-food-lovers-guide/',
      },
      {
        title: 'Food Trends 2024',
        image: './images/articles/article-image_2.png',
        link: 'https://foodinsight.org/food-trends-2024/',
      },
      {
        title: '10 Restaurants in Hoboken that are Perfect for Date Night',
        image: './images/articles/article-image_3.png',
        link: 'https://jcfamilies.com/10-restaurants-hoboken-perfect-date-night/',
      },
    ];

    return articles
      .map(
        (article) => `
          <blog-article
            title="${article.title}"
            image="${article.image}"
            link="${article.link}"
          ></blog-article>
        `
      )
      .join('');
  },
};

export default HomePage;
