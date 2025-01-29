import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";
import {
  setupLikeButtonTest,
  clearFavoriteRestaurants,
} from "./helpers/testFactories";

describe("Like Restaurant", () => {
  const restaurant = { id: 1, name: "Restaurant A" };

  beforeEach(() => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  });

  afterEach(async () => {
    await clearFavoriteRestaurants();
  });

  it("should display the favorite button when the restaurant is not liked", async () => {
    const likeButton = await setupLikeButtonTest(restaurant);

    expect(likeButton.innerHTML).toContain("fa-heart-o");
  });

  it("should be able to like the restaurant", async () => {
    const likeButton = await setupLikeButtonTest(restaurant);

    const favoriteChangePromise = new Promise((resolve) => {
      likeButton.addEventListener("favorite-changed", resolve, { once: true });
    });

    likeButton.querySelector("#like-button").click();
    await favoriteChangePromise;

    const likedRestaurant = await FavoriteRestaurantIdb.getRestaurant(
      restaurant.id
    );
    expect(likedRestaurant).toEqual(restaurant);
  });

  it("should not add a restaurant again if already liked", async () => {
    await FavoriteRestaurantIdb.putRestaurant(restaurant);

    const likeButton = await setupLikeButtonTest(restaurant);
    likeButton.querySelector("#like-button").click();

    const allRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(allRestaurants).toHaveLength(1);
  });

  it("should not add a restaurant when it has no id", async () => {
    const likeButton = await setupLikeButtonTest({});

    likeButton.querySelector("#like-button").click();

    const allRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(allRestaurants).toEqual([]);
  });
});
