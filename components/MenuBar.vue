<template>
  <div class="bg-green-50">
    <div class="w-11/12 lg:w-4/5 mx-auto py-3">
      <nav class="flex items-center justify-between flex-wrap bg-teal">
        <div class="flex items-center flex-no-shrink text-white">
          <a href="https://www.captainun.org/"
            ><img
              src="~/assets/captainun-logo.png"
              class="w-16 h-16 md:w-20 md:h-20 rounded-full"
              alt="Logo"
          /></a>
        </div>
        <div class="block sm:hidden">
          <button
            @click="toggle()"
            class="
              flex
              items-center
              px-0
              py-2
              rounded
              text-blue-600
              hover:text-gray-600 hover:border-white
            "
          >
            <img v-if="open" src="~/assets/cancel.png" class="w-6" />
            <img v-else src="~/assets/more.png" class="w-8" />
          </button>
        </div>
        <div
          :class="open ? 'block' : 'hidden'"
          class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
        >
          <ul class="text-sm sm:text-base sm:flex-grow text-center">
            <li
              href="#responsive-header"
              class="
                no-underline
                block
                mt-4
                border-b-2 border-blue-600
                py-3
                md:py-0
                sm:inline-block sm:mt-0
                text-teal-lighter
                sm:mr-8
              "
            >
              <NuxtLink to="/about-us">ABOUT US</NuxtLink>
            </li>
            <li
              href="#responsive-header"
              class="
                no-underline
                block
                mt-0
                border-b-2 border-blue-600
                py-3
                md:py-0
                sm:inline-block sm:mt-0
                text-teal-lighter
                sm:mr-8
              "
            >
              <NuxtLink to="/contact-us">CONTACT US</NuxtLink>
            </li>
            <li
              href="#responsive-header"
              class="
                no-underline
                block
                mt-0
                border-b-2 border-blue-600
                py-3
                md:py-0
                sm:inline-block sm:mt-0
                text-teal-lighter
                sm:mr-8
              "
            >
              <NuxtLink to="/donate">DONATE</NuxtLink>
            </li>
          </ul>
          <div class="text-center py-4 border-b-2 border-black sm:border-0">
            <NuxtLink
              to="/login"
              class="
                text-sm
                px-4
                py-2
                rounded-xl
                text-white
                bg-blue-600
                hover:border-transparent hover:text-black hover:bg-blue-200
              "
              >VOLUNTEERS</NuxtLink
            >
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style></style>
