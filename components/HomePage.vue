<template>
  <div class="bg-green-50">
    <Caption />
    <div class="w-full md:w-11/12 lg:w-4/5 mx-auto py-0 lg:py-16 lg:flex">
      <div class="w-full lg:w-4/5 lg:mr-10">
        <Map />
      </div>
      <div class="w-full lg:w-1/5">
        <SortForm />
      </div>
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
