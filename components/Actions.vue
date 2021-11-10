<template>
  <main>
    <h2 class="text-blue-500 font-bold">#Actions:</h2>
    <div class="lg:flex my-2 text-sm">
      <button
        class="
          lg:flex-1
          flex
          block
          my-2
          mr-2
          bg-blue-900
          text-white
          p-2
          rounded-md
        "
      >
        Define Climate Goal</button
      ><button
        v-if="$auth.user.data.group === 'Admin'"
        class="lg:flex-1 block my-4 mr-2 bg-blue-900 text-white p-2 rounded-md"
      >
        Approve Sign Up Requests</button
      ><button
        v-if="$auth.user.data.group === 'Admin'"
        class="lg:flex-1 block my-4 mr-2 bg-blue-900 text-white p-2 rounded-md"
      >
        Approve Climate Goals</button
      ><button
        v-if="$auth.user.data.group === 'Admin'"
        class="lg:flex-1 block my-2 mr-2 bg-blue-900 text-white p-2 rounded-md"
      >
        Delete Accounts
      </button>
    </div>
  </main>
</template>

<script>
export default {
  middleware: "auth",
};
</script>

<style></style>
