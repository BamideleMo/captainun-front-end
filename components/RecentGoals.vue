<template>
  <main>
    <h2 class="text-blue-500 font-bold border-b border-blue-500 mt-6">
      #See the recently added Country CAPs:
    </h2>
    <table class="w-full text-xs">
      <thead>
        <tr class="bg-gray-200 text-gray-900 p-2 rounded-tl-md rounded-tr-md">
          <td class="w-1/5">Sn</td>
          <td class="w-1/5">Date</td>
          <td class="w-1/5">Country</td>
          <td class="w-1/5">CAPS</td>
          <td class="w-1/5">#</td>
        </tr>
      </thead>
      <tbody v-for="(cap, index) in lastestcaps" v-bind:key="cap.id">
        <tr class="p-4">
          <td class="text-gray-500 w-1/5">{{ index + 1 }}</td>
          <td class="w-1/5">{{ cap.created_at }}</td>
          <td class="w-1/5">{{ cap.country_name }}</td>
          <td class="w-1/5">{{ cap.climate_goal }}</td>
          <td class="w-1/5">
            <button
              @click="showCaps(cap.country_name)"
              class="
                bg-green-400
                py-1
                px-2
                text-black
                rounded-md
                hover:bg-green-100
              "
            >
              View
            </button>
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
  padding: 8px 2px;
  border-bottom: 1px solid #eeeeee;
}
</style>
