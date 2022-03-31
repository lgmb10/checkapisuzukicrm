<template>
  <div>
    <div class="p-3 pb-8 mb-8 bg-gray-100 z-0 relative">
      <div class="sm:flex justify-center items-center">
        <SelectDataType @required-value="setDisable" />
        <transition name="fade">
          <input
            type="text"
            id="inputCode"
            name="inputCode"
            required
            minlength="4"
            maxlength="8"
            size="10"
            class="transition-colors sm:ml-2 px-1 pl-2 border-2 border-solid border-gray-300 rounded-lg w-32 h-8 text-zinc-900 focus:outline-none focus:border-blue-500 hover:border-blue-300 mt-3 sm:mt-0"
            placeholder="Code"
            v-if="isEnable"
          />
        </transition>
      </div>
      <ButtonClassic
        title="Lancer la recherche"
        class="absolute shadow-blue-500/50 search_button w-3/4"
        @onClick="displayData()"
      />
    </div>
    <div v-if="loaded">
      <GetLocation
        v-if="selectedField == 2"
        :info="data.ListLocalite.Localite"
      />
      <SellingSites v-if="selectedField == 4" :info="data" />
    </div>
  </div>
</template>

<script>
import apiPath from "../constant/api";

export default {
  name: "SearchData",
  data() {
    return {
      isEnable: false,
      selectedField: null,
      loaded: false,
      apiPath,
      data: [],
    };
  },
  methods: {
    setDisable(event) {
      this.isEnable = event.dataRequired;
      this.selectedField = event.id;
    },
    displayData() {
      if (this.selectedField != null) {
        const found = this.apiPath.filter(
          (x) => x.id === this.selectedField
        )[0];
        this.$api[found.functionPath]()
          .then((res) => {
            console.log(res);
            this.data = res;
            this.loaded = true;
            /* this.$toast.info("I'm a toast!", {
              position: "top-center",
              timeout: 5000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: true,
              closeButton: "button",
              icon: true,
              rtl: false,
            }); */
          })
          .catch((err) => {
            console.log(err);
          })
          .finally();
      }
    },
  },
};
</script>

<style lang="scss">
.search_button {
  transform: translate(-50%, -50%);
  left: 50%;
  top: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
