<template>
  <main>
    <div class="w-11/12 lg:w-3/5 mx-auto my-16">
      <div class="my-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold">My Dashboard</h2>
      </div>

      <DashboardMenu />

      <section v-if="$auth.user.data.status === 'unverified'" class="text-sm">
        <p class="my-2">
          Thank you for your interest to join our elite Volunteers who are
          contributing to saving our world.
        </p>
        <p class="my-2">
          Your registration is currently awaiting vetting and approval by an
          admin after which you will be able to rate the different individual
          climate goals and make comments.
        </p>
        <p>An admin will contact you as soon as possible.</p>
      </section>

      <section
        v-else-if="
          $auth.user.data.status === 'verified' &&
          $auth.user.data.group === 'Volunteers'
        "
      >
        <RecentGoals />
      </section>
      <section
        v-else-if="
          $auth.user.data.group === 'Backstops' ||
          $auth.user.data.group === 'Admin'
        "
      >
        <div><Actions /></div>
        <div class="my-6"><RecentGoals :lastestcaps="lastestcaps" /></div>
        <div class="my-6"><RecentComments /></div>
        <div v-if="$auth.user.data.group === 'Admin'">
          <div><RecentSignups :unverified_users="unverified_users" /></div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
// import axios from 'axios';
export default {
  middleware: "auth",
  methods: {},
  async asyncData({ $axios }) {
    const URL = $axios.defaults.baseURL;
    let [
      unverifiedusersRes,
      lastestcapsRes,
      // budgetstatsRes,
      // categorystatsRes,
      // userRes,
    ] = await Promise.all([
      $axios.$get(URL + "/auth/all-unverified-users"),
      $axios.$get(URL + "/country/all-caps?per_page=5"),
    ]);
    let unverified_userss = unverifiedusersRes.unverified_users;
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
