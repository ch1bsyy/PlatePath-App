const getIdFromUrl = (url) => {
  const idMatch = url.match(/#\/detail\/([^/]+)/);
  return idMatch ? idMatch[1] : null;
};

export default getIdFromUrl;