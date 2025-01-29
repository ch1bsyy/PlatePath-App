class DetailCard extends HTMLElement {
  set restaurant(data) {
    this._restaurant = data;
    this.render();
  }

  render() {
    const {
      name = 'Unknown Restaurant',
      pictureId = '',
      address = 'Unknown Address',
      city = 'Unknown City',
      description = 'No description available.',
      menus: { foods = [], drinks = [] } = {},
      customerReviews = [],
    } = this._restaurant;

    this.innerHTML = `
      <div class="detail-card">
        ${this._renderImage(name, pictureId)}
        <div class="detail-content">
          ${this._renderDetails(name, address, city, description)}
          ${this._renderMenus(foods, drinks)}
          ${this._renderReviews(customerReviews)}
        </div>
      </div>
    `;
  }

  _renderImage(name, pictureId) {
    return `
      <img 
        class="detail-image" 
        src="https://restaurant-api.dicoding.dev/images/large/${pictureId}" 
        alt="Image of ${name}"
        tabindex="0" 
      />
    `;
  }

  _renderDetails(name, address, city, description) {
    return `
      <h3 tabindex="0" class="detail-title">${name}</h3>
      <p tabindex="0" class="detail-address"><strong>📍 Address:</strong> ${address}, ${city}</p>
      <p tabindex="0" class="detail-description">${description}</p>
    `;
  }

  _renderMenus(foods, drinks) {
    return `
      <div class="menu-container">
        ${this._renderMenuSection('🍴 Food Menu', foods)}
        ${this._renderMenuSection('🥤 Drink Menu', drinks)}
      </div>
    `;
  }

  _renderMenuSection(title, items) {
    const menuItems = items.length > 0
      ? items.map((item) => `<li tabindex="0">${item.name}</li>`).join('')
      : '<li>No items available.</li>';

    return `
      <div tabindex="0" class="menu-detail">
        <h4 tabindex="0" class="menu-title">${title}</h4>
        <ul tabindex="0" class="menu-list">${menuItems}</ul>
      </div>
    `;
  }

  _renderReviews(reviews) {
    const reviewContent = reviews.length > 0
      ? reviews.map((review) => this._renderReviewCard(review)).join('')
      : '<p>No reviews available.</p>';

    return `
      <div class="reviews-container">
        <h2 tabindex="0" class="reviews-title">💬 Customer Reviews</h2>
        <div tabindex="0" class="review-group">${reviewContent}</div>
      </div>
    `;
  }

  _renderReviewCard({ name, review }) {
    return `
      <div tabindex="0" class="review-card">
        <p tabindex="0" class="reviewer"><strong>${name}</strong></p>
        <p tabindex="0" class="reviewer-comment">${review}</p>
      </div>
    `;
  }
}

customElements.define('detail-card', DetailCard);
