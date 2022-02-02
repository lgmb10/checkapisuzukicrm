import apiCrm from "../api/apiCrm";

/* export default ({ $axios }, inject) => {
  inject("api", {
    crm: apiCrm({
      $axios,
      baseURL: process.env.APICRM_URL,
    }),
  });
}; */

export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const crm = apiCrm({
    $axios,
    baseUrl: process.env.APICRM_URL,
  });
  // Set baseURL to something different

  // Inject to context as $api
  inject("api", crm);
}
