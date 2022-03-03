<template>
  <div></div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "DefaultLayout",
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
