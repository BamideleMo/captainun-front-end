<template>
  <div>
    <div class="shadow bg-green-50 border-b border-green-100">
      <div class="w-4/5 mx-auto pt-2 pb-3">
        <div class="flex">
          <div class="w-1/4 text-4xl font-black">
            <NuxtLink to="/">
              <span class="text-green-600">CAPTAIN</span>
              <!-- <span class="text-blue-600">UN</span> -->
            </NuxtLink>
          </div>
          <div class="w-3/4 text-right">
            <div class="dropdown">
              <button
                class="
                  dropbtn
                  w-32
                  rounded-md
                  p-2
                  ml-2
                  md:ml-6
                  truncate
                  text-center
                "
              >
                <span>Volunteers</span>
              </button>
              <div class="dropdown-content rounded-md w-32">
                <div class="items-center">
                  <img
                    class="w-6 mx-auto -mt-1.5"
                    src="~/assets/icons8-sort-up-30.png"
                    alt="JosWaya Menu"
                  />
                </div>
                <div
                  class="
                    dropdown-contentin
                    -mt-2
                    border-2 border-blue-500
                    text-sm
                  "
                >
                  <div>
                    <NuxtLink to="/login">Login</NuxtLink>
                    <NuxtLink to="/register" class="b">Register</NuxtLink>
                    <NuxtLink to="/learn-more">Learn More</NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Caption />
  </div>
</template>

<script>
export default {};
</script>

<style>
.dropbtn {
  background-color: #276af0;
  color: white;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: transparent;
  /* min-width: 115px; */
  z-index: 1;
  text-align: left;
  right: 0;
}

.dropdown-contentin {
  background-color: #ffffff;
  text-align: left;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.dropdown-contentin .b {
  border-top: #f1f1f1 solid 1px;
  border-bottom: #f1f1f1 solid 1px;
}

.dropdown-content a {
  color: #276af0;
  padding: 12px 10px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
  color: #276af0;
  border-radius: inherit;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  color: #f1f1f1;
}
</style>
