import { getRestaurantDetail } from '../../data/restaurant-api';
import getIdFromUrl from '../../utils/url-utils';
import Swal from 'sweetalert2';

const DetailPage = {
  async render() {
    return `
      <section id="restaurant-detail" tabindex="0" data-skip-target>
        <h1 tabindex="0" class="section-title">Restaurant Detail</h1>
        <div id="detail-container" class="detail-container"></div>
        <review-form></review-form>
        <like-button></like-button>
      </section>
    `;
  },

  async afterRender() {
    const loadingIndicator = document.querySelector('loading-indicator');
    this._id = this._getRestaurantId();

    if (!this._id) {
      this._showErrorMessage('Restaurant ID is missing or invalid.');
      return;
    }

    this._container = this._getContainerElement();
    loadingIndicator.show();

    try {
      await this._renderDetail();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to load restaurant details. Please try again later.',
      });
      console.error('Error loading detail:', error);
    } finally {
      loadingIndicator.hide();
    }
  },

  async _renderDetail() {
    const restaurant = await getRestaurantDetail(this._id);
    if (!restaurant) {
      this._showErrorMessage('Restaurant not found.');
      return;
    }

    this._container.innerHTML = '';
    const detailCard = document.createElement('detail-card');
    detailCard.restaurant = restaurant;
    this._container.appendChild(detailCard);

    this._initializeLikeButton(restaurant);
    this._initializeReviewForm();
  },

  _initializeLikeButton(restaurant) {
    const likeButton = document.querySelector('like-button');
    likeButton.restaurant = restaurant;
  },

  _initializeReviewForm() {
    const reviewForm = document.querySelector('review-form');
    reviewForm.restaurantId = this._id;

    reviewForm.addEventListener('review-submitted', async () => {
      this._showLoading();
      await this._renderDetail();
    });
  },

  _getRestaurantId() {
    return getIdFromUrl(window.location.hash);
  },

  _getContainerElement() {
    return document.querySelector('#detail-container');
  },

  _showLoading() {
    this._container.innerHTML = '<p>Loading...</p>';
  },

  _showErrorMessage(message) {
    this._container.innerHTML = `<p>${message}</p>`;
  },
};

export default DetailPage;
