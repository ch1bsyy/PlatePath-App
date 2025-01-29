class BlogArticle extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute('title');
    const image = this.getAttribute('image');
    const link = this.getAttribute('link');

    this.innerHTML = `
        <div class="article-card">
          <img tabindex="0" src="${image}" alt="gambar ${title}" class="article-image" />
          <div class="article-content">
            <h3 tabindex="0" class="article-title">${title}</h3>
            <p tabindex="0" class="article-description">
              A quick overview about ${title} that provides insight into the topic. Click below to learn more!
            </p>
            <a href="${link}" class="read-more" target="_blank">Read more</a>
          </div>
        </div>
        `;
  }
}

customElements.define('blog-article', BlogArticle);
