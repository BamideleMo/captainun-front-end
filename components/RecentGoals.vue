<template>
  <main>
    <h2 class="text-blue-300 py-2 font-bold border-b border-blue-500 mt-6">
      #See the recently added Country CAPs:
    </h2>
    <table class="w-full table-fixed text-xs text-left">
      <thead>
        <tr class="bg-gray-600 text-gray-100 rounded-tl-md rounded-tr-md">
          <th class="w-2/12 p-2">Date</th>
          <th class="w-3/12 p-2">Country</th>
          <th class="w-6/12 p-2">CAP</th>
          <th class="w-1/12 p-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-gray-100 hover:bg-green-50 cursor-pointer"
          v-for="cap in lastestcaps"
          v-bind:key="cap.id"
          @click="showCaps(cap.country_name)"
        >
          <td class="overflow-ellipsis overflow-hidden p-2">
            {{ cap.created_at }}
          </td>
          <td class="overflow-ellipsis overflow-hidden p-2">
            {{ cap.country_name }}
          </td>
          <td class="p-2">{{ cap.climate_goal }}</td>
          <td class="p-2 text-blue-700">
            <i class="fas fa-angle-double-right"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
export default {
  middleware: "auth",
  props: {
    lastestcaps: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      lastestcaps_array: [],
    };
  },
  methods: {
    showCaps(country) {
      this.$router.push("/show-caps?country=" + country);
    },
  },
};
</script>

<style scoped>
td {
  border-bottom: 1px solid #eeeeee;
}
</style>
