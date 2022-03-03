<template>
  <div class="flex space-x-2 justify-center">
    <div>
      <button
        type="button"
        class="text-white flex align-center items-center px-4 py-1 bg-blue-400 rounded-2xl mx-2 hover:shadow-lg hover:shadow-blue-500/50 hover:bg-blue-500 transition-all disabled:bg-gray-200 disabled:shadow-blue-500/0 disabled:cursor-not-allowed checked:bg-red-600"
        :disabled="isDisabled"
        :checked="isChecked"
        v-on:click="$emit('onClick')"
      >
        {{ title }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonClassic",
  props: {
    title: { type: String, default: "NaN" },
    isDisabled: { type: Boolean, default: false },
    isChecked: { type: Boolean, default: false },
  },
};
</script>
