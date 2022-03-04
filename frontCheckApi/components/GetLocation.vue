<template>
  <div class="flex flex-col items-center">
    <div class="overflow-x-auto sm:mx-2 mx-3">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr>
                <th
                  scope="col"
                  class="sm:w-32 text-sm font-medium text-gray-900 px-6 py-4 border bg-gray-100"
                >
                  id_localite
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 border bg-gray-100"
                >
                  libelle
                </th>
              </tr>
            </thead>
            <tbody v-if="info != null">
              <tr
                v-for="localite in info"
                :value="localite.id_localite"
                :key="localite.id_localite"
                class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-50"
              >
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-x border-b"
                >
                  {{ localite.id_localite }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light font-normal px-6 py-4 whitespace-nowrap border-r border-b"
                >
                  {{ localite.libelle }}
                </td>
              </tr>
            </tbody>
            <tbody v-if="info.length == 0">
              <td
                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-x border-b"
              >
                Aucune donnée
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetLocation",
  props: {
    info: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss"></style>
