<template>
  <main>
    <div class="w-4/5 mx-auto">
      <div class="w-1/2 mx-auto my-16">
        <div class="my-4 text-center">
          <h2 class="text-3xl font-bold">Welcome!</h2>
          <p>Please enter your username &amp; password to login.</p>
        </div>
        <form class="rounded-lg bg-gray-100 py-8 px-6 mt-8">
          <div class="mb-4">
            <div class="text-md text-gray-800 font-bold">Username:</div>
            <div class="mt-1">
              <input
                class="
                  border
                  shadow
                  w-full
                  rounded-lg
                  h-10
                  p-2
                  text-gray-700
                  focus:outline-none
                "
                type="text"
              />
            </div>
          </div>
          <div class="mb-4">
            <div class="text-md text-gray-800 font-bold">Password:</div>
            <div class="mt-1 flex">
              <div class="w-full">
                <input
                  :type="visibility"
                  class="
                    border
                    shadow
                    w-full
                    rounded-lg
                    h-10
                    p-2
                    text-gray-700
                    focus:outline-none
                  "
                />
              </div>

              <div class="-ml-8 mt-2 text-right text-md text-gray-500">
                <span v-if="visibility == 'password'"
                  ><div @click="showPassword()">
                    <i class="far fa-eye-slash"></i></div
                ></span>
                <span v-if="visibility == 'text'"
                  ><div @click="hidePassword()">
                    <i class="far fa-eye"></i></div
                ></span>
              </div>
            </div>
          </div>
          <div class="mb-4 mt-6">
            <div class="">
              <button
                class="w-full bg-green-500 text-white h-10 p-2 rounded-lg"
              >
                Login
              </button>
            </div>
          </div>
          <div class="flex text-sm text-blue-600">
            <div class="flex-1">
              <NuxtLink to="/" class="hover:text-gray-700"
                >Forgot Password?</NuxtLink
              >
            </div>
            <div class="flex-1 text-right">
              <NuxtLink to="/register" class="hover:text-gray-700"
                >Don't have an account? Register</NuxtLink
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      visibility: "password",
      phone: "",
      password: "",
      isError: false,
      alert: "",
      isLoading: false,
    };
  },
  methods: {
    showPassword() {
      this.visibility = "text";
    },
    hidePassword() {
      this.visibility = "password";
    },
  },
};
</script>

<style></style>
