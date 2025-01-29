const {
  likeRestaurant,
  verifyRestaurantInFavorites,
  unlikeRestaurant,
  verifyNoFavoriteRestaurants,
} = require("./helpers/restaurantActions");

Feature("Unliking Restaurant");

Before(({ I }) => {
  I.amOnPage("/");
});

Scenario("Unliking a restaurant", async ({ I }) => {
  const restaurantName = await likeRestaurant(I);
  await verifyRestaurantInFavorites(I, restaurantName);

  await unlikeRestaurant(I);
  await verifyNoFavoriteRestaurants(I);
});
