<template>
  <div class="w-full text-white text-center">
    <h1 class="w-full bg-blue-400 font-semibold p-2 text-4xl pb-3">
      API CRM Suzuki
    </h1>
    <div class="w-full bg-gray-100 flex items-center justify-center p-2">
      <ButtonWithIcon title="Rechercher" isChecked="true" />
      <ButtonWithIcon title="Mettre à jour" isDisabled="true" />
    </div>
    <SearchData />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
