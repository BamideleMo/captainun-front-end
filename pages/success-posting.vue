<template>
  <main>
    <div class="w-11/12 lg:w-3/5 mx-auto my-4">
      <DashboardMenu />

      <div class="w-11/12 bg-blue-100 rounded-md p-4 my-12 mx-auto">
        <div class="my-4 text-center">
          <h2 class="text-2xl md:text-3xl font-bold">Success!</h2>
        </div>

        <section class="text-xl text-center">
          <p class="my-4">
            <img src="~/assets/tick.png" class="w-52 mx-auto" />
          </p>
          <p class="my-4">The action was carried out successfully.</p>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
// import axios from 'axios';
export default {
  middleware: "auth",
};
</script>

<style></style>
