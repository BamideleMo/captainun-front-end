<template>
  <form>
    <h2 class="font-bold my-4">{{ tabcountry }}Define CAP for a Country</h2>
    <div class="my-6">
      <div class="my-2">Upload Picture:</div>
      <div>
        <input
          class="w-full border rounded-md"
          type="file"
          name="pick"
          @change="onFileChanged"
        />
      </div>
    </div>
    <div class="my-2">
      <div class="my-2">Country:</div>
      <div>
        <select class="w-full border rounded-md h-9 px-2">
          <option value="">Select Country</option>
        </select>
      </div>
    </div>
    <div class="my-6">
      <div class="my-2">The Climate Goal:</div>
      <div>
        <textarea class="w-full h-40 border rounded-md"></textarea>
      </div>
    </div>
    <div class="my-6">
      <button
        class="w-full rounded-xl bg-blue-900 text-white py-3 hover:bg-blue-500"
      >
        Post Country CAP
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: ["tabcountry"],
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },
  },
};
</script>

<style></style>
