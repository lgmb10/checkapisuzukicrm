export default ({ $axios, baseUrl }) => ({
  getLocation() {
    return $axios.$get(`${baseUrl}/locations`);
  },
  getSellingSites() {
    return $axios.$get(`${baseUrl}/selling-sites`);
  },
  get(path) {
    return $axios.$get(`${baseUrl}${path}`);
  },
});
