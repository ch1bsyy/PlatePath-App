import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import Swal from 'sweetalert2';

const FavoritePage = {
  async render() {
    return `
      <section id="favorite-list" tabindex="0" data-skip-target>
        <h1 tabindex="0" class="section-title">Your Favorite Restaurants</h1>
        <div id="favorite-container" class="card-container"></div>
      </section>
    `;
  },

  async afterRender() {
    const loadingIndicator = document.querySelector('loading-indicator');
    const container = document.querySelector('#favorite-container');
    loadingIndicator.show();

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      container.innerHTML = '';

      if (!restaurants.length) {
        container.innerHTML = '<p>No favorite restaurants yet.</p>';
        return;
      }

      restaurants.forEach((restaurant) => {
        const card = document.createElement('restaurant-card');
        card.restaurant = restaurant;
        container.appendChild(card);
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to load favorite restaurants. Please try again later.',
      });
      console.error('Error loading detail:', error);
    } finally {
      loadingIndicator.hide();
    }
  },
};

export default FavoritePage;
