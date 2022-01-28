<template>
  <h2>Sites de ventes</h2>
  <p>{{ info }}</p>
</template>

<script>
//import DataService from "../services/Data_Service";
import api from "../../api/apiCrm"

export default {
  name: "GetSellingSites",
  data() {
    return {
      info: null,
    };
  },
  async created({ api }) {
    try {
      const data = await api.apiCrm.getLocation();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
</style> 