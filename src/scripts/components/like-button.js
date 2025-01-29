import FavoriteRestaurantIdb from "../data/favorite-restaurant-idb";

class LikeButton extends HTMLElement {
  set restaurant(data) {
    this._restaurant = data;
    this.render();
  }

  async render() {
    const isFavorite = await this._isRestaurantFavorite();

    this.innerHTML = `
          <button id="like-button" aria-label="${
            isFavorite ? "Unfavorite" : "Favorite"
          } this restaurant" class="like-button">
            <i class="fa ${isFavorite ? "fa-heart" : "fa-heart-o"}"></i>
          </button>
        `;

    this._attachEventListener();
  }

  async _isRestaurantFavorite() {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(
      this._restaurant.id
    );
    return !!restaurant;
  }

  _attachEventListener() {
    const likeButton = this.querySelector("#like-button");
    likeButton.addEventListener("click", () => this._handleLikeButtonClick());
  }

  async _handleLikeButtonClick() {
    const isFavorite = await this._isRestaurantFavorite();

    if (isFavorite) {
      await this._removeFromFavorites();
    } else {
      await this._addToFavorites();
    }

    // Emit event when the operation is complete
    this.dispatchEvent(
      new CustomEvent("favorite-changed", {
        detail: { isFavorite: !isFavorite },
      })
    );

    this.render();
  }

  async _addToFavorites() {
    if (!this._restaurant.id) {
      console.error("Cannot add restaurant to favorites: Missing 'id'");
      return;
    }
    await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
  }

  async _removeFromFavorites() {
    await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
  }
}

customElements.define("like-button", LikeButton);
