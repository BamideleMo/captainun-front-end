<template>
  <div class="w-10/12 lg:w-full mx-auto">
    <form class="mt-6 text-xs">
      <div class="">
        <div class="w-1/2 float-left lg:w-full lg:float-none">
          <select
            class="
              bg-white
              w-11/12
              lg:w-full
              rounded-lg
              border-2 border-blue-200
              text-blue-300
              h-10
              px-1
              focus:outline-none
              mb-4
            "
          >
            <option value="" disabled selected>Country</option>
            <Countries />
          </select>
        </div>
        <div class="w-1/2 text-right float-right lg:w-full lg:float-none">
          <select
            class="
              lg:w-full
              bg-white
              w-11/12
              rounded-lg
              border-2 border-blue-200
              text-blue-300
              h-10
              px-1
              focus:outline-none
              mb-4
            "
          >
            <option>State/Province</option>
            <option>-</option>
          </select>
        </div>
      </div>
      <div class="clear-both">
        <div class="w-1/2 float-left lg:w-full lg:float-none">
          <select
            class="
              bg-white
              w-11/12
              lg:w-full
              rounded-lg
              border-2 border-blue-200
              text-blue-300
              h-10
              px-1
              focus:outline-none
              mb-4
            "
          >
            <option>City/Municipality</option>
            <option>-</option>
          </select>
        </div>
        <div class="w-1/2 text-right float-right lg:w-full lg:float-none">
          <select
            class="
              bg-white
              w-11/12
              lg:w-full
              rounded-lg
              border-2 border-blue-200
              text-blue-300
              h-10
              px-1
              focus:outline-none
              mb-4
            "
          >
            <option>Corporation</option>
            <option>-</option>
          </select>
        </div>
      </div>

      <div>
        <button
          class="
            bg-blue-200
            w-full
            h-10
            rounded-lg
            text-blue-400
            hover:bg-black
          "
        >
          View CAP
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
