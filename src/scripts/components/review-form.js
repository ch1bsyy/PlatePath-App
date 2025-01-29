import { submitReview } from '../data/restaurant-api';
import Swal from 'sweetalert2';

class ReviewForm extends HTMLElement {
  set restaurantId(id) {
    this._restaurantId = id;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="review-form-container">
        <h1 tabindex="0" class="section-title">Add a Review</h1>
        <form id="review-form">
          <input type="text" id="review-name" class="review-input" placeholder="Your Name" required>
          <textarea id="review-content" class="review-input" placeholder="Your Review" required></textarea>
          <button type="submit" class="review-submit-button">Submit</button>
        </form>
      </div>
    `;
    this._initializeFormHandler();
  }

  _initializeFormHandler() {
    const form = this.querySelector('#review-form');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      await this._handleSubmit();
    });
  }

  async _handleSubmit() {
    const name = this.querySelector('#review-name').value.trim();
    const review = this.querySelector('#review-content').value.trim();

    if (!name || !review) {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Fields',
        text: 'Please fill in all fields before submitting!',
      });
      return;
    }

    try {
      const reviewData = { id: this._restaurantId, name, review };
      const customerReviews = await submitReview(reviewData);

      if (customerReviews) {
        this._clearFormFields();
        Swal.fire({
          icon: 'success',
          title: 'Review Submitted',
          text: 'Thank you for your review!',
          confirmButtonColor: '#198754',
        });
        this._dispatchReviewSubmittedEvent();
      }
    } catch (error) {
      console.error('Failed to submit review:', error);
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'There was a problem submitting your review. Please try again later.',
      });
    }
  }

  _clearFormFields() {
    this.querySelector('#review-name').value = '';
    this.querySelector('#review-content').value = '';
  }

  _dispatchReviewSubmittedEvent() {
    this.dispatchEvent(new CustomEvent('review-submitted'));
  }
}

customElements.define('review-form', ReviewForm);
