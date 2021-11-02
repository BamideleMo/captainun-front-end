<template>
  <div class="w-7/12 lg:w-full mx-auto">
    <form class="mt-6 text-xs">
      <div class="">
        <div class="w-full">
          <Countries />
        </div>
        <div class="w-full">
          <select
            class="
              mt-3
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
          >
            <option>State/Province</option>
            <option>-</option>
          </select>
        </div>
      </div>
      <div class="">
        <div class="w-full">
          <select
            class="
              mt-3
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
          >
            <option>City/Municipality</option>
            <option>-</option>
          </select>
        </div>
        <div class="w-full">
          <select
            class="
              mt-3
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
          >
            <option>Corporation</option>
            <option>-</option>
          </select>
        </div>
      </div>

      <div>
        <button
          class="
            mt-3
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
