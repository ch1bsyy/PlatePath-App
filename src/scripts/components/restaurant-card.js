class RestaurantCard extends HTMLElement {
  set restaurant(data) {
    if (data) {
      this._data = data;
      this.render();
    } else {
      console.error("No data provided for restaurant card");
    }
  }

  render() {
    this.innerHTML = `
      <div class="card">
        <div class="restaurant-image-container">
          <img tabindex="0" data-src="https://restaurant-api.dicoding.dev/images/medium/${this._data.pictureId}" alt="gambar ${this._data.name}" class="lazyload restaurant-image">
          <span tabindex="0" class="restaurant-city">${this._data.city}</span>
        </div>
        <div class="restaurant-info">
          <h3 tabindex="0" class="restaurant-name">${this._data.name}</h3>
          <div class="restaurant-rating">
            <img tabindex="0" src="./icons/icon-star.svg" alt="Rating Star" class="icon-star">
            <span tabindex="0">${this._data.rating}</span>
          </div>
          <p tabindex="0" class="restaurant-description">${this._data.description}</p>
          <a href="#/detail/${this._data.id}" class="cta-link" aria-label="View Details about ${this._data.name}">
            View Details
          </a>
        </div>
      </div>
        `;
  }
}

customElements.define("restaurant-card", RestaurantCard);
