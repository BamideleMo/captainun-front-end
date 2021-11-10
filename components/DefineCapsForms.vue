<template>
  <section>
    <form v-if="whichform === 'TabCountry'">
      <h2 class="font-bold my-2">Define CAP for a Country</h2>
      <div>...</div>
    </form>
    <form v-if="whichform === 'TabState'">
      <h2 class="font-bold my-2">Define CAP for a State/Province</h2>
      <div>...</div>
    </form>
    <form v-if="whichform === 'TabCity'">
      <h2 class="font-bold my-2">Define CAP for a City/Municipality</h2>
      <div>...</div>
    </form>
    <form v-if="whichform === 'TabCorporation'">
      <h2 class="font-bold my-2">Define CAP for a Corporation</h2>
      <div>...</div>
    </form>
  </section>
</template>

<script>
export default {
  props: ["whichform"],
};
</script>

<style></style>
