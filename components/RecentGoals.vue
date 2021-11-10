<template>
  <main>
    <h2 class="text-blue-500 font-bold">#See the recently added goals:</h2>
    <NuxtLink to="#">Latest Goal goes here...</NuxtLink>
  </main>
</template>

<script>
export default {
  middleware: "auth",
};
</script>

<style></style>
