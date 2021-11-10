<template>
  <main>
    <div class="w-11/12 lg:w-3/5 mx-auto my-4">
      <DashboardMenu />
      <div class="my-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold">Define CAP</h2>
      </div>
      <!-- <section>
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
      </section> -->
      <section class="text-center border-b-2 border-gray-300">
        <button
          class="
            bg-gray-300
            text-gray-700 text-xs
            px-4
            py-3
            rounded-tl-lg rounded-tr-lg
            mx-1
          "
          v-for="tab in tabs"
          :key="tab"
          @click="currentTab = tab"
        >
          {{ tab }}
        </button>
      </section>
      <DefineCapsForms :whichform="currentTabComponent" />
    </div>
  </main>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      currentTab: "Country",
      tabs: ["Country", "State", "City", "Corporation"],
    };
  },
  computed: {
    currentTabComponent() {
      return "Tab" + this.currentTab;
    },
  },

  methods: {},
};
</script>

<style></style>
