const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = this.parseActiveUrl();
    return `/${url.resource || ''}${url.id ? '/:id' : ''}`;
  },

  parseActiveUrl() {
    const url = window.location.hash.slice(1).toLowerCase() || '/';
    const splitedUrl = url.split('/');
    return {
      resource: splitedUrl[1] || null,
      id: splitedUrl[2] || null,
    };
  },
};

export default UrlParser;
