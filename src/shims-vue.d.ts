declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "@heroicons/vue/solid";
declare module "icons/*";
declare module 'api.config'

interface IToast{
  msg: string, color: string
}

declare function toast(data: IToast)