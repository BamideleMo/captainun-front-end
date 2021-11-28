<template>
  <main>
    <h2 class="text-blue-500 font-bold border-b border-blue-500">#Actions:</h2>
    <div class="scrollmenu overflow-x-auto my-2 text-sm py-2">
      <button
        class="
          bg-blue-800
          text-white
          mr-2
          p-2
          rounded-md
          hover:bg-blue-400
          mb-3
          md:mb-0
        "
        @click="toDefineCAP"
      >
        Define CAP</button
      ><button
        class="
          bg-blue-800
          text-white
          mr-2
          p-2
          rounded-md
          hover:bg-blue-400
          mb-3
          md:mb-0
        "
      >
        Add Update
      </button>
      <button
        class="
          bg-blue-800
          text-white
          mr-2
          p-2
          rounded-md
          hover:bg-blue-400
          mb-3
          md:mb-0
        "
      >
        Approve Climate Goals</button
      ><button
        v-if="$auth.user.data.group === 'Admin'"
        class="
          bg-blue-800
          text-white
          mr-2
          p-2
          rounded-md
          hover:bg-blue-400
          mb-3
          md:mb-0
        "
      >
        Delete Accounts
      </button>
      <button
        v-if="$auth.user.data.group === 'Admin'"
        class="
          bg-blue-800
          text-white
          mr-2
          p-2
          rounded-md
          hover:bg-blue-400
          mb-3
          md:mb-0
        "
      >
        Approve Sign Up Requests
      </button>
    </div>
  </main>
</template>

<script>
export default {
  middleware: "auth",
  methods: {
    toDefineCAP() {
      this.$router.push("/define-cap");
    },
  },
};
</script>

<style lang="css" scoped>
div.scrollmenu {
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu button {
  display: inline-block;
  text-align: center;
}
</style>
