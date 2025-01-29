const {
  likeRestaurant,
  verifyRestaurantInFavorites,
} = require("./helpers/restaurantActions");

Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/");
});

Scenario("Liking a restaurant", async ({ I }) => {
  const restaurantName = await likeRestaurant(I);
  await verifyRestaurantInFavorites(I, restaurantName);
});
