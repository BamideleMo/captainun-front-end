<template>
  <main>
    <div class="w-11/12 lg:w-3/5 mx-auto my-4">
      <DashboardMenu />
      <div class="my-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold">Define CAP</h2>
      </div>
      <section>
        <button
          class="
            bg-green-800
            text-white
            mx-2
            p-2
            rounded-md
            hover:bg-green-400
            block
            md:inline-block
            mb-3
            md:mb-0
          "
        >
          For a Country?
        </button>
        <button
          class="
            bg-green-800
            text-white
            mx-2
            p-2
            rounded-md
            hover:bg-green-400
            block
            md:inline-block
            mb-3
            md:mb-0
          "
        >
          For a State/Province?
        </button>
        <button
          class="
            bg-green-800
            text-white
            mx-2
            p-2
            rounded-md
            hover:bg-green-400
            block
            md:inline-block
            mb-3
            md:mb-0
          "
        >
          For a City/Municipality?
        </button>
        <button
          class="
            bg-green-800
            text-white
            mx-2
            p-2
            rounded-md
            hover:bg-green-400
            block
            md:inline-block
            mb-3
            md:mb-0
          "
        >
          For a Corporation?
        </button>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  middleware: "auth",
  methods: {},
};
</script>

<style></style>
