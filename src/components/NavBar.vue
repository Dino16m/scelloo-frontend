<template>
  <nav class="flex flex-row justify-between border border-gray-200 py-2 px-4 w-full bg-white">
    <MenuIcon />
    <div class="relative w-3/6 block text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <MagnifyIcon />
      </span>
      <input
        type="search"
        name="q"
        class="w-full py-2 text-sm text-white bg-gray-100 rounded-md pl-10 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
        placeholder="Search..."
        autocomplete=""
      />
    </div>
    <span class="flex flex-row">
      <button
        class="mr-6 bg-transparent w-36 h-8 text-gray-300 font-semibol py-auto px-4 border border-gray-300 hover:border-transparent rounded-lg"
      >
        Scelloo
      </button>
      <BellOutlineIcon size="32" class="m-1 text-gray-500" />
      <CogOutlineIcon size="32" class="my-1 mx-3 text-gray-500" />
      <AppsIcon size="32" class="my-1 text-gray-500" />
      <span class="w-10 h-10 relative ml-4">
        <div
          class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"
        >
          <img
            src="@/assets/imgs/African-american-man.png"
            class="object-cover object-center w-full h-full visible group-hover:hidden"
          />
        </div>
      </span>
    </span>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuIcon from "icons/Menu";
import MagnifyIcon from "icons/Magnify";
import BellOutlineIcon from "icons/BellOutline";
import CogOutlineIcon from "icons/CogOutline";
import AppsIcon from "icons/Apps";

@Component({
  components: {
    MenuIcon,
    MagnifyIcon,
    BellOutlineIcon,
    CogOutlineIcon,
    AppsIcon,
  },
})
export default class NavBar extends Vue {}
</script>
