<template>
  <main>
    <h2 class="text-blue-500 font-bold border-b border-blue-500 mt-6">
      #See recent comments:
    </h2>
    <NuxtLink to="#">Latest comments go here...</NuxtLink>
  </main>
</template>

<script>
export default {
  middleware: "auth",
};
</script>

<style></style>
