<template>
  <div class="animate-bounce" v-if="$nuxt.isOnline">
    <div
      v-if="isError"
      class="
        bg-yellow-200
        my-3
        text-red-500 text-sm
        border-l-4 border-red-500
        py-4
        px-2
        text-center
      "
    >
      <span class="text-black">Error Message:</span><br />
      {{ alert }}
    </div>
  </div>
  <div
    v-else
    class="
      bg-yellow-200
      my-3
      text-red-500 text-sm
      border-l-4 border-red-500
      py-4
      px-2
      text-center
    "
  >
    <span class="text-black">Error Message:</span><br />
    Please check your Internet Connection
  </div>
</template>

<script>
export default {
  props: ["isError", "alert"],
};
</script>

<style></style>
