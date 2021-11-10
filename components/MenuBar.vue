<template>
  <div class="bg-green-50">
    <div class="w-11/12 lg:w-4/5 mx-auto py-6">
      <div class="text-xs md:text-sm text-center md:text-right">
        <a
          href="https://www.captainun.org/"
          class="
            p-2
            rounded-xl
            text-white
            bg-blue-500
            hover:border-transparent hover:text-black hover:bg-blue-200
            mr-2
          "
          ><i class="fas fa-home"></i
        ></a>
        <NuxtLink
          to="/about"
          class="
            p-2
            rounded-xl
            text-white
            bg-blue-500
            hover:border-transparent hover:text-black hover:bg-blue-200
            mr-2
          "
          >ABOUT</NuxtLink
        >
        <NuxtLink
          to="/contact-us"
          class="
            p-2
            rounded-xl
            text-white
            bg-blue-500
            hover:border-transparent hover:text-black hover:bg-blue-200
            mr-2
          "
          >CONTACT US</NuxtLink
        >
        <span v-if="$auth.loggedIn">
          <a
            href="#"
            @click="logout"
            class="
              p-2
              rounded-xl
              text-white
              bg-blue-500
              hover:border-transparent hover:text-black hover:bg-blue-200
            "
            >LOGOUT</a
          >
        </span>
        <span v-else>
          <NuxtLink
            to="/login"
            class="
              p-2
              rounded-xl
              text-white
              bg-blue-500
              hover:border-transparent hover:text-black hover:bg-blue-200
            "
            >VOLUNTEERS</NuxtLink
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    async logout() {
      await this.$auth.logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
