<template>
  <div id="app" class="max-w-full h-screen max-h-screen min-h-screen bg-gray-200">
    <nav-bar/>
    <div class="flex flex-row h-5/6 bg-gray-100">
      <side-bar class="w-16 flex-none"/>
      <main class="block flex-grow">
        <router-view/>
      </main>
    </div>
    <footer 
      class="p-3 border-t flex flex-row justify-between border-gray-500 w-full">
      <span>Copyright © Cloudenly Limited. All Rights Reserved.</span>
      <span>Powered by Scelloo Limited.</span>
    </footer>
    <toast/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
import Toast from '@/components/toast.vue'

@Component({
  components: {
    NavBar,
    SideBar,
    Toast
  },
})
export default class App extends Vue {}
</script>
<style scoped>
  .main-body{
    height: 80%;
  }
</style>
