<template>
  <section class="text-sm">
    <form v-if="whichform === 'TabCountry'">
      <h2 class="font-bold my-4">Define CAP for a Country</h2>
      <div class="my-2">
        <div class="my-2">Country:</div>
        <div>
          <select class="w-full border rounded-md h-9">
            <option value="">Select Country</option>
          </select>
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
          Post CAP
        </button>
      </div>
    </form>
    <form v-if="whichform === 'TabState'">
      <h2 class="font-bold my-2">Define CAP for a State/Province</h2>
      <div>...</div>
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
</template>

<script>
export default {
  props: ["whichform"],
};
</script>

<style></style>
