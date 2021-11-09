<template>
  <main>
    <div class="w-4/5 mx-auto">
      <div class="lg:w-1/2 mx-auto my-16">
        <div class="my-4 text-center">
          <h2 class="text-3xl font-bold">Welcome!</h2>
          <p class="text-sm">
            Please enter your username &amp; password to login.
          </p>
        </div>
        <ValidationObserver v-slot="{ invalid }">
          <form
            class="rounded-lg bg-gray-100 py-8 px-3 lg:px-6 mt-8"
            @submit.prevent="submitForm"
          >
            <Alert :isError="isError" :alert="alert" />
            <ValidationProvider
              name="Username"
              rules="required|min:3"
              v-slot="{ errors, touched, required, invalid }"
            >
              <div class="mb-6">
                <div class="text-md text-gray-800 font-bold">
                  Username:<span
                    v-if="touched && required && invalid"
                    class="text-sm block mt-2 text-red-500"
                  >
                    <i class="far fa-times-circle"></i>
                    {{ errors[0] }}
                  </span>
                </div>
                <div class="mt-1">
                  <input
                    class="
                      bg-white
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
                    v-model="username"
                  />
                </div>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Password"
              rules="required|min:3"
              v-slot="{ errors, touched, required, invalid }"
            >
              <div class="mb-6">
                <div class="text-md text-gray-800 font-bold">
                  Password:
                  <span
                    v-if="touched && required && invalid"
                    class="text-sm block mt-2 text-red-500"
                  >
                    <i class="far fa-times-circle"></i>
                    {{ errors[0] }}
                  </span>
                </div>
                <div class="mt-1 flex">
                  <div class="w-full">
                    <input
                      :type="visibility"
                      class="
                        bg-white
                        border
                        shadow
                        w-full
                        rounded-lg
                        h-10
                        p-2
                        text-gray-700
                        focus:outline-none
                      "
                      v-model="password"
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
                <div class="mt-2 text-right text-sm text-blue-600">
                  <NuxtLink to="/" class="hover:text-gray-700"
                    >Forgot Password?</NuxtLink
                  >
                </div>
              </div>
            </ValidationProvider>

            <div class="mb-4 mt-6">
              <div class="">
                <button
                  v-if="invalid"
                  class="
                    w-full
                    bg-gray-500
                    text-gray-400
                    h-10
                    p-2
                    rounded-lg
                    cursor-not-allowed
                  "
                  disabled
                >
                  Login
                </button>
                <div v-else>
                  <button
                    v-if="isLoading"
                    class="
                      w-full
                      bg-green-200
                      text-white
                      h-10
                      p-2
                      rounded-lg
                      cursor-wait
                    "
                    disabled
                  >
                    Processing...
                  </button>
                  <button
                    v-else
                    class="w-full bg-green-500 text-white h-10 p-2 rounded-lg"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </ValidationObserver>
        <div class="mt-4 text-sm text-blue-600">
          <div class="text-center">
            <NuxtLink to="/register" class="hover:text-gray-700"
              >Don't have an account? Register</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  // middleware: "guest",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  head() {
    return {
      title: "Login",
    };
  },
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Please enter your username & password to login.",
    },
  ],
  data() {
    return {
      visibility: "password",
      username: "",
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
    async submitForm() {
      this.isLoading = true;

      const data = {
        username: this.username,
        password: this.password,
      };
      try {
        await this.$auth.loginWith("local", {
          data: data,
        });
        this.$router.push("/dashboard");
      } catch (e) {
        this.isError = true;
        this.isLoading = false;
        this.alert = e.response
          ? e.response.data.error
          : "Sorry an error occured, check your internet";
        console.log(e.message);
      }
    },
  },
};
</script>

<style></style>
