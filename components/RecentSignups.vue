<template>
  <main>
    <h2 class="text-blue-500 font-bold">#See recent signup requests:</h2>
    <table class="w-full mt-2 text-xs">
      <thead>
        <tr class="bg-gray-800 text-white p-2">
          <td>Sn</td>
          <td>Date</td>
          <td>Fullname</td>
          <td>Email</td>
          <td>#</td>
        </tr>
      </thead>
      <tbody v-for="(user, index) in unverified_users" v-bind:key="user.id">
        <tr>
          <td class="text-gray-500">{{ index + 1 }}</td>
          <td>{{ user.date }}</td>
          <td>{{ user.fullname }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button
              class="bg-green-400 p-1 text-black rounded-md hover:bg-green-100"
            >
              Details
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
  methods: {
    // unverifiedusersData() {
    //   for (var i = 0; i < this.unverified_users.length; i++) {
    //     this.unverified_users_array.push(this.unverified_users[i].fullname);
    //   }
    //   console.log(this.unverified_users_array);
    //   return this.unverified_users_array;
    // },
  },
};
</script>

<style scoped>
td {
  padding: 4px 2px;
  border-bottom: 1px solid #eeeeee;
}
</style>
