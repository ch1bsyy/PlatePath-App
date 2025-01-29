const assert = require("assert");

async function likeRestaurant(I) {
  I.seeElement(".card");

  const restaurantName = await I.grabTextFrom(
    locate(".restaurant-name").first()
  );
  const firstRestaurantLink = locate(".cta-link").first();
  I.click(firstRestaurantLink);

  I.seeElement("#like-button");
  I.click("#like-button");

  return restaurantName;
}

async function verifyRestaurantInFavorites(I, expectedName) {
  I.amOnPage("/#/favorite");
  I.seeElement(".card");

  const likedRestaurantName = await I.grabTextFrom(".restaurant-name");
  assert.equal(expectedName, likedRestaurantName);
}

async function unlikeRestaurant(I) {
  const firstFavoriteLink = locate(".cta-link").first();
  I.click(firstFavoriteLink);

  I.seeElement("#like-button");
  I.click("#like-button");
}

async function verifyNoFavoriteRestaurants(I) {
  I.amOnPage("/#/favorite");

  const noRestaurants = await I.grabNumberOfVisibleElements(".restaurant-name");
  assert.equal(noRestaurants, 0);
}

module.exports = {
  likeRestaurant,
  verifyRestaurantInFavorites,
  unlikeRestaurant,
  verifyNoFavoriteRestaurants,
};
