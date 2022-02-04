<template>
  <div>
    <select
      name="dataType"
      id="dataTypeSelect"
      class="transition-colors form-select border-2 px-1 border-solid border-gray-300 text-zinc-900 rounded-lg h-8 focus:outline-none focus:border-blue-500 hover:border-blue-300"
      @change="sendRequiredValue($event)"
    >
      <option default selected disabled>Choisissez un type de donnée</option>
      <option
        v-for="dataSelected in dataPurpose"
        :value="dataSelected.id"
        :key="dataSelected.id"
      >
        {{ dataSelected.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedData: null,
      dataPurpose: [
        { id: 1, name: "Customer Info Request", dataRequired: true },
        { id: 2, name: "Location", dataRequired: false },
        { id: 3, name: "Location Site Request", dataRequired: true },
        { id: 4, name: "Selling site", dataRequired: false },
        { id: 5, name: "Selling site Info Request", dataRequired: true },
        { id: 6, name: "Website Info Request", dataRequired: true },
        { id: 7, name: "User Back Office Request", dataRequired: true },
      ],
    };
  },
  methods: {
    sendRequiredValue(event) {
      const found = this.dataPurpose.filter(
        (x) => x.id === parseInt(event.target.value, 10)
      )[0];
      console.log(found);
      console.log(event.target.value);
      this.$emit("required-value", found);
    },
  },
};
</script>

<style></style>
