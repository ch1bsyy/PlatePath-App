/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';
import '../../src/scripts/components/like-button';

const setupLikeButtonTest = async (restaurant) => {
  document.body.innerHTML = '<like-button></like-button>';
  const likeButton = document.querySelector('like-button');

  likeButton.restaurant = restaurant;
  await likeButton.render();

  return likeButton;
};

const clearFavoriteRestaurants = async () => {
  const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

  for (const restaurant of restaurants) {
    await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
  }
};

export { setupLikeButtonTest, clearFavoriteRestaurants };
