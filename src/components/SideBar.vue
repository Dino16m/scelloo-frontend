<template>
  <nav
    class="flex flex-col py-4 items-center  bg-blue-600 shadow-md"
  >
    <router-link 
        v-for="(route, i) in routes" 
        active-class="bg-blue-800 " 
        class="my-auto w-full flex justify-center" :key="i" :to="route.to">
      <span :class="[route.icon]" class="mdi font-extralight  text-gray-100 text-3xl" />
    </router-link>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DashboardOutlineIcon from "icons/ViewDashboardOutline";
import AccountMultiplePlusOutlineIcon from "icons/AccountMultiplePlusOutline";

@Component({
  components: {
    DashboardOutlineIcon,
    AccountMultiplePlusOutlineIcon,
  },
})
export default class SideBar extends Vue {
  routes = [
    { icon: "mdi-view-dashboard-outline", to: "/overview" },
    { icon: "mdi-account-multiple-plus", to: "/add" },
    { icon: "mdi-cash-multiple", to: "payment" },
    { icon: "mdi-bank-minus", to: "/" }, // this is not the icon provided in the figma file.  Embedding the svg icon from the figma file will clutter the codebase
    { icon: "mdi-calendar-check-outline", to: "/calendar" },
    { icon: "mdi-handshake", to: "/deal" },
    { icon: "mdi-database", to: "/data" },
    { icon: "mdi-calendar-clock", to: "/clock" },
    { icon: "mdi-cog-outline", to: "/settings" },
  ];
}
</script>
