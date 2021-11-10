<template>
  <main>
    <h2 class="text-blue-500 font-bold border-b border-blue-500">
      #See recent signup requests:
    </h2>
    <table class="w-full text-xs">
      <thead>
        <tr class="bg-gray-200 text-gray-900 p-2 rounded-tl-md rounded-tr-md">
          <td class="w-1/5">Sn</td>
          <td class="w-1/5">Date</td>
          <td class="w-1/5">Fullname</td>
          <td class="w-1/5">Group</td>
          <td class="w-1/5">More</td>
        </tr>
      </thead>
      <tbody v-for="(user, index) in unverified_users" v-bind:key="user.id">
        <tr>
          <td class="text-gray-500 w-1/5">{{ index + 1 }}</td>
          <td class="w-1/5">{{ user.date }}</td>
          <td class="w-1/5">{{ user.fullname }}</td>
          <td class="w-1/5">{{ user.group }}</td>
          <td class="w-1/5">
            <a
              href="#"
              class="
                bg-green-400
                py-1
                px-2
                text-black
                rounded-md
                hover:bg-green-100
              "
            >
              More
            </a>
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
  padding: 12px 2px;
  border-bottom: 1px solid #eeeeee;
}
</style>
