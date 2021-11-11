<template>
  <main>
    <section v-if="whichform === 'TabCountry'" class="text-sm">
      <FormCountryCap :tabcountry="whichform" />
    </section>
    <section>
      <form v-if="whichform === 'TabState'">
        <h2 class="font-bold my-2">Define CAP for a State/Province</h2>
        <div class="my-2">
          <div class="my-2">Country where state/province is:</div>
          <div>
            <select class="w-full border rounded-md h-9 px-2">
              <option value="">Select Country</option>
            </select>
          </div>
        </div>
        <div class="my-6">
          <div class="my-2">State/Province:</div>
          <div>
            <input
              type="text"
              class="w-full border rounded-md h-9 px-2"
              placeholder="Type State/Province Correctly"
            />
          </div>
        </div>
        <div class="my-6">
          <div class="my-2">Attach Infographic:</div>
          <div>
            <input class="w-full border rounded-md" type="file" />
          </div>
        </div>
        <div class="my-6">
          <button
            class="
              w-full
              rounded-xl
              bg-blue-900
              text-white
              py-3
              hover:bg-blue-500
            "
          >
            Post State/Province CAP
          </button>
        </div>
      </form>
      <form v-if="whichform === 'TabCity'">
        <h2 class="font-bold my-2">Define CAP for a City/Municipality</h2>
        <div>...</div>
      </form>
      <form v-if="whichform === 'TabCorporation'">
        <h2 class="font-bold my-2">Define CAP for a Corporation</h2>
        <div>...</div>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  props: ["whichform"],
};
</script>

<style></style>
