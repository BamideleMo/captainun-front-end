<template>
  <main>
    <div class="w-11/12 lg:w-3/5 mx-auto my-16">
      <div class="my-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold">Approve/Disapprove User</h2>
      </div>
      <section class="mt-6 rounded-md p-3 bg-gray-100 text-xs md:text-sm">
        <table class="w-full" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td>
                <b>Fullname</b>:<span class="block md:hidden"></span>
                {{ theuser.fullname }}
              </td>
              <td>
                <b>Group</b>:<span class="block md:hidden"></span>
                {{ theuser.group }}
              </td>
              <td>
                <b>Country</b>:<span class="block md:hidden"></span>
                {{ theuser.country }}
              </td>
            </tr>
            <tr>
              <td>
                <b>Email</b>:<span class="block md:hidden"></span>
                {{ theuser.email }}
              </td>
              <td>
                <b>Registered on</b>:<span class="block md:hidden"></span>
                {{ theuser.created_at }}
              </td>
              <td>
                <b>Username</b>:<span class="block md:hidden"></span>
                {{ theuser.username }}
              </td>
            </tr>
          </tbody>
        </table>
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="submitForm">
            <ValidationProvider
              name="Action"
              rules="required"
              v-slot="{ errors, touched, required, invalid }"
            >
              <div class="my-6">
                <div class="my-2">
                  Action:<span
                    v-if="touched && required && invalid"
                    class="text-sm block mt-2 text-red-500"
                  >
                    <i class="far fa-times-circle"></i>
                    {{ errors[0] }}
                  </span>
                </div>
                <div>
                  <select
                    v-model="action"
                    class="w-full border rounded-md h-9 px-2 bg-white"
                  >
                    <option>Disapprove</option>
                    <option>Approve</option>
                  </select>
                </div>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Comment"
              rules="required"
              v-slot="{ errors, touched, required, invalid }"
            >
              <div class="my-6">
                <div class="my-2">
                  Comment:<span
                    v-if="touched && required && invalid"
                    class="text-sm block mt-2 text-red-500"
                  >
                    <i class="far fa-times-circle"></i>
                    {{ errors[0] }}
                  </span>
                </div>
                <div>
                  <textarea
                    v-model="comment"
                    class="w-full p-2 h-40 border rounded-md"
                  ></textarea>
                </div>
              </div>
            </ValidationProvider>
            <div class="my-6">
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
                Submit
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
                  type="submit"
                  v-else
                  class="w-full bg-blue-800 text-white h-10 p-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </section>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  middleware: "auth",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      action: "",
      comment: "",
      isError: false,
      alert: "",
      isLoading: false,
    };
  },
  methods: {
    async submitForm() {
      this.isLoading = true;

      const data = {
        action: this.action,
        comment: this.comment,
        action_by: "Admin",
      };
      try {
        const res = await axios.put(
          this.$axios.defaults.baseURL + "/auth/" + this.$route.params.user,
          data
        );
        this.$router.push("/success-posting");
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
  async asyncData({ $axios, route }) {
    const URL = $axios.defaults.baseURL;
    const theuser = await $axios.$get(URL + "/auth/" + route.params.user);
    console.log(theuser.fullname);
    return { theuser };
  },
};
</script>

<style scoped>
td {
  padding: 6px;
}
</style>
