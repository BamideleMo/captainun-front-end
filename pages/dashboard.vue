<template>
  <main>
    <div class="w-11/12 lg:w-3/5 mx-auto my-4">
      <div class="my-4 text-center">
        <h2 class="text-3xl font-bold">My Dashbaord</h2>
      </div>
      <section class="flex text-base">
        <div class="flex-1">
          <p class="my-2">
            Hi <b>{{ $auth.user.data.fullname }}</b>
          </p>
        </div>
        <div class="flex-1 text-right">
          <p class="my-2">
            <b>Status:</b>
            <span class="text-red-400">{{ $auth.user.data.group }}</span>
          </p>
        </div>
      </section>

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
        <div class="my-4"><RecentGoals /></div>
        <div v-if="$auth.user.data.group === 'Admin'">
          <div class="my-4"><RecentComments /></div>
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
      // brandstatsRes,
      // budgetstatsRes,
      // categorystatsRes,
      // userRes,
    ] = await Promise.all([$axios.$get(URL + "/auth/all_unverified_users")]);
    let unverified_userss = unverifiedusersRes.unverified_users;
    // console.log(unverified_userss);
    return {
      unverified_users: unverified_userss,
    };
  },
};
</script>

<style></style>
