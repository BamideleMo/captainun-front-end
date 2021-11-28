<template>
  <main>d</main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: {},
    };
  },
  created() {
    this.getUsersById();
  },
  methods: {
    async getUsersById() {
      const userIdPromise = axios.get(
        this.$axios.defaults.baseURL + `/auth/user/${this.$route.params.user}`
      );
      const userIdJson = userIdPromise.json();
      userIdJson.then((res) => {
        this.users = res.data;
      });
      console.log(this.$route.params.user);
    },
  },
};
</script>

<style></style>
