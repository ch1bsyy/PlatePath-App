import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";
import {
  setupLikeButtonTest,
  clearFavoriteRestaurants,
} from "./helpers/testFactories";

describe("Unlike Restaurant", () => {
  const restaurant = { id: 1, name: "Restaurant A" };

  beforeEach(() => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  });

  afterEach(async () => {
    await clearFavoriteRestaurants();
  });

  it("should display the unfavorite button when the restaurant is liked", async () => {
    await FavoriteRestaurantIdb.putRestaurant(restaurant);

    const likeButton = await setupLikeButtonTest(restaurant);

    expect(likeButton.innerHTML).toContain("fa-heart");
  });

  it("should not display the favorite button when the restaurant is liked", async () => {
    await FavoriteRestaurantIdb.putRestaurant(restaurant);

    const likeButton = await setupLikeButtonTest(restaurant);

    expect(likeButton.innerHTML).not.toContain("fa-heart-o");
  });

  it("should be able to unlike the restaurant", async () => {
    await FavoriteRestaurantIdb.putRestaurant(restaurant);

    const likeButton = await setupLikeButtonTest(restaurant);

    const favoriteChangePromise = new Promise((resolve) => {
      likeButton.addEventListener("favorite-changed", resolve, { once: true });
    });

    likeButton.querySelector("#like-button").click();
    await favoriteChangePromise;

    const likedRestaurant = await FavoriteRestaurantIdb.getRestaurant(
      restaurant.id
    );
    expect(likedRestaurant).toBeUndefined();
  });

  it("should not remove a restaurant that is not in favorites", async () => {
    const likeButton = await setupLikeButtonTest(restaurant);

    likeButton.querySelector("#like-button").click();

    const allRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(allRestaurants).toHaveLength(0);
  });
});
