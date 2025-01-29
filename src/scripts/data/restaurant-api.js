import Swal from 'sweetalert2';
const API_ENDPOINT = 'https://restaurant-api.dicoding.dev';
const loadingIndicator = document.querySelector('loading-indicator');

async function getRestaurants() {
  loadingIndicator.show();

  try {
    const response = await fetch(`${API_ENDPOINT}/list`);
    const result = await response.json();

    if (!result.error) {
      return result.restaurants;
    }
    throw new Error(result.message);
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to fetch restaurant data. Please try again later!',
    });
    console.error('Error fetching restaurants:', error);
    return null;
  } finally {
    loadingIndicator.hide();
  }
}

async function getRestaurantDetail(id) {
  loadingIndicator.show();

  try {
    const response = await fetch(`${API_ENDPOINT}/detail/${id}`);
    const result = await response.json();

    if (!result.error) {
      return result.restaurant;
    }
    throw new Error(result.message);
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to fetch restaurant detail. Please try again later!',
    });
    console.error('Error fetching restaurant detail:', error);
    return null;
  } finally {
    loadingIndicator.hide();
  }
}

async function submitReview(reviewData) {
  loadingIndicator.show();

  try {
    const response = await fetch(`${API_ENDPOINT}/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });

    const result = await response.json();
    if (!result.error) {
      return result.customerReviews;
    }
    throw new Error(result.message);
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to submit your review. Please try again later!',
    });
    console.error('Error submitting review:', error);
    return null;
  } finally {
    loadingIndicator.hide();
  }
}

export { getRestaurants, getRestaurantDetail, submitReview };
