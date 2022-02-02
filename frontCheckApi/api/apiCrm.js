export default ({ $axios, baseUrl }) => ({
  getLocation() {
    return $axios.$get(`${baseUrl}/locations`);
  },
  get(path) {
    return $axios.$get(`${baseUrl}${path}`);
  },
});
