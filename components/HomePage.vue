<template>
  <div class="bg-green-50">
    <Caption />
    <div class="w-4/5 mx-auto py-16 flex">
      <Map />
      <SortForm />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
svg path {
  fill: lightblue !important;
  stroke: #ffffff;
  stroke-width: 2px;
}
svg a path {
  fill: red !important;
}
svg a path:hover {
  fill: blue !important;
}
</style>
