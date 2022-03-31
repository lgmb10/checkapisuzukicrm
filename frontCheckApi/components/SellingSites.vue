<template>
  <div v-if="info != null" class="flex flex-row text-black">
    <div v-for="(sellingSite, index) in info" :key="index">
      <div v-for="(key, i) in Object.keys(sellingSite)" :key="i">
        <div
          v-if="
            typeof sellingSite[key] === `string` ||
            typeof sellingSite[key] === `number`
          "
        >
          <p>
            {{ key }} : <span>{{ sellingSite[key] }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SellingSites",
  props: {
    info: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss"></style>
