<template>
  <main>
    <h2 class="text-blue-500 font-bold">#Actions:</h2>
    <div class="lg:flex my-2 text-sm">
      <button
        class="
          bg-blue-800
          text-white
          mx-2
          p-2
          rounded-md
          hover:bg-blue-400
          block
          md:inline-block
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
          mx-2
          p-2
          rounded-md
          hover:bg-blue-400
          block
          md:inline-block
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
          mx-2
          p-2
          rounded-md
          hover:bg-blue-400
          block
          md:inline-block
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
          mx-2
          p-2
          rounded-md
          hover:bg-blue-400
          block
          md:inline-block
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

<style></style>
