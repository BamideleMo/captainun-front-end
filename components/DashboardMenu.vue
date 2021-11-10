<template>
  <div class="mb-4">
    <section class="flex text-gray-600 text-base">
      <div class="flex-1">
        <p class="my-2">
          Hi <b>{{ $auth.user.data.fullname }}</b>
        </p>
      </div>
      <div class="flex-1">
        <div class="my-2 flex">
          <p class="w-4/5 text-center">
            <b>Status:</b>
            <span class="text-red-400">{{ $auth.user.data.group }}</span>
          </p>
          <p class="w-1/5 text-blue-600 text-right">
            <a @click="logout" href="#"><i class="fas fa-sign-out-alt"></i></a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
