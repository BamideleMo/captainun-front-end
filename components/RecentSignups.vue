<template>
  <main>
    <h2 class="text-blue-300 py-2 font-bold border-b border-blue-500 mt-6">
      #See recent signup requests:
    </h2>
    <table class="w-full table-fixed text-xs text-left">
      <thead>
        <tr class="bg-gray-600 text-gray-100 rounded-tl-md rounded-tr-md">
          <th class="w-1/12 p-2">Sn.</th>
          <th class="w-2/12 p-2">Date</th>
          <th class="w-2/12 p-2">Name</th>
          <th class="w-2/12 p-2">Group</th>
          <th class="w-2/12 p-2">Country</th>
          <th class="w-2/12 p-2">Email</th>
          <th class="w-1/12 p-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(user, index) in unverified_users"
          v-bind:key="user.id"
          @click="$router.push(`/users/${user.id}`)"
          class="bg-gray-100 hover:bg-green-50 cursor-pointer"
        >
          <td class="text-gray-600 p-2">{{ index + 1 }}.</td>
          <td class="overflow-ellipsis overflow-hidden p-2">{{ user.date }}</td>
          <td class="overflow-ellipsis overflow-hidden p-2">
            {{ user.fullname }}
          </td>
          <td class="overflow-ellipsis overflow-hidden p-2">
            {{ user.group }}
          </td>
          <td class="overflow-ellipsis overflow-hidden p-2">
            {{ user.country }}
          </td>
          <td class="overflow-ellipsis overflow-hidden p-2">
            {{ user.email }}
          </td>

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
    unverified_users: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      unverified_users_array: [],
    };
  },
  methods: {},
};
</script>

<style scoped>
td {
  border-bottom: 1px solid #eeeeee;
}
th {
  text-align: left !important;
}
</style>
