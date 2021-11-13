<template>
  <main>
    <div class="w-11/12 lg:w-3/5 mx-auto my-16">
      <div class="my-4 text-center">
        <h2 class="text-3xl font-bold">
          {{ $route.query.country }} Climate Goals
        </h2>
      </div>
      <section class="text-base">
        <p>{{ $route.query.country }}</p>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  methods: {},
  async asyncData({ $axios }) {
    const URL = $axios.defaults.baseURL;
    let [
      lastestcapsRes,
      // budgetstatsRes,
      // categorystatsRes,
      // userRes,
    ] = await Promise.all([$axios.$get(URL + "/country/cap/")]);
    let lastestcapss = lastestcapsRes.country_caps;
    // console.log(lastestcapss);
    return {
      unverified_users: unverified_userss,
      lastestcaps: lastestcapss,
    };
  },
};
</script>

<style></style>
