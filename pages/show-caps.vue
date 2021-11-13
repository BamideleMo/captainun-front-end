<template>
  <main>
    <div class="w-11/12 lg:w-3/5 mx-auto my-16">
      <div class="my-4 text-center">
        <h2 class="text-3xl font-bold">
          {{ $route.query.country }} Climate Goals
        </h2>
      </div>
      <section class="text-base">
        <div
          v-for="cap in acountrycaps"
          v-bind:key="cap.id"
          class="flex text-sm my-10 border"
        >
          <div class="flex-1 flex">
            <div class="w-1/5 text-center p-1 flex items-center">
              <img :src="cap.img" class="" />
            </div>
            <div class="w-4/5 p-1 bg-blue-500 text-white flex items-center">
              {{ cap.climate_goal }}
            </div>
          </div>
          <div class="flex-1 flex">
            <div class="w-1/5 text-center p-1 flex items-center bg-red-500">
              <div class="text-white align-middle text-center mx-auto">
                No Rating Yet
              </div>
            </div>
            <div class="w-4/5 p-1 bg-blue-500 text-white flex items-center">
              No update yet
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  methods: {},
  async asyncData({ $axios, query }) {
    console.log(query.country);
    const URL = $axios.defaults.baseURL;
    let [
      acountrycapsRes,
      // categorystatsRes,
      // userRes,
    ] = await Promise.all([
      $axios.$get(
        URL + "/country/a-country-caps?per_page=100&country=" + query.country
      ),
    ]);
    let acountrycapss = acountrycapsRes.a_country_caps;
    // console.log(lastestcapss);
    return {
      acountrycaps: acountrycapss,
    };
  },
};
</script>

<style></style>
