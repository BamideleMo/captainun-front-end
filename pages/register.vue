<template>
  <main>
    <div class="w-4/5 mx-auto">
      <div class="w-1/2 mx-auto my-16">
        <div class="my-4 text-center">
          <h2 class="text-3xl font-bold">Register Now!</h2>
          <p>Please complete this form correctly to register.</p>
        </div>
        <form class="rounded-lg bg-gray-100 py-8 px-6 mt-8">
          <div class="mb-4">
            <div class="text-md text-gray-800 font-bold">Fullname:</div>
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
            <div class="text-md text-gray-800 font-bold">Email:</div>
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
                type="email"
              />
            </div>
          </div>
          <div class="mb-4">
            <div class="text-md text-gray-800 font-bold">Volunteer Group:</div>
            <div class="mt-1">
              <select
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
              >
                <option value="" disabled selected>Select Option</option>
                <option value="UNDP/UNICEF Volunteer">
                  UNDP / UNICEF Volunteer
                </option>
                <option value="Non-UNDP/UNICEF administrator">
                  Non-UNDP / UNICEF administrator
                </option>
              </select>
            </div>
          </div>
          <div class="mb-4">
            <div class="text-md text-gray-800 font-bold">
              Country of Residence:
            </div>
            <div class="mt-1">
              <select
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
              >
                <option value="" disabled selected>Select Option</option>
                <Countries />
              </select>
            </div>
          </div>
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
          <div class="mb-4">
            <div class="text-md text-gray-800 font-bold">Confirm Password:</div>
            <div class="mt-1 flex">
              <input
                :type="visibility2"
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

              <div class="-ml-8 mt-2 text-right text-md text-gray-500">
                <span v-if="visibility2 == 'password'"
                  ><div @click="showPassword2()">
                    <i class="far fa-eye-slash"></i></div
                ></span>
                <span v-if="visibility2 == 'text'"
                  ><div @click="hidePassword2()">
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
                Register As Volunteer
              </button>
            </div>
          </div>
          <div class="flex text-sm text-blue-600">
            <div class="flex-1 text-center">
              <NuxtLink to="/login" class="hover:text-gray-700"
                >Have an account? Login</NuxtLink
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
      visibility2: "password",
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
    showPassword2() {
      this.visibility = "text";
    },
    hidePassword2() {
      this.visibility = "password";
    },
  },
};
</script>

<style></style>
