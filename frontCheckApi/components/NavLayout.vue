<template>
  <div class="w-full text-white text-center">
    <h1
      class="w-full bg-blue-400 font-semibold p-1 pb-2 sm:p-2 sm:pb-3 sm:text-4xl text-2xl"
    >
      API CRM Suzuki
    </h1>
    <div
      class="w-full bg-gray-100 flex items-center justify-center p-2 shadow-lg z-10 mb-2"
    >
      <ButtonWithIcon title="Rechercher" :isChecked="true" />
      <ButtonWithIcon title="Mettre à jour" :isDisabled="true" />
    </div>
    <SearchData />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
