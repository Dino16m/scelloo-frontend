<template>
  <div 
    :class="visibility"
    class="justify-center fixed right-3 top-3 z-20 "
    >
    <div
        :class="colorClasses"
        class="w-full px-6 py-3 shadow-2xl flex flex-col items-center border-t sm:w-auto sm:m-4 sm:rounded-lg sm:flex-row sm:border text-white"
    >
      <div>{{msg}}</div>
      <div class="flex mt-2 sm:mt-0 sm:ml-4">
        <button
            @click="show = false"
          class="px-3 py-2 hover:bg-blue-700 transition ease-in-out duration-300"
        >
          
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
type IToast = {msg: string, color: string}

@Component
export default class Toast extends Vue {
    show = false
    msg = ""
    color = ""

    get visibility(){
        return this.show ? ["flex"] : ["hidden"]
    }

    get colorClasses(){
        return [`bg-${this.color}`, `border-${this.color}`]
    }

    toast({msg, color}: IToast){
        this.msg = msg
        this.color = color || this.color
        this.show = true
        setTimeout(() => {
            this.reset()
        }, 5000);
        console.log("called")
    }

    reset(){
        this.show = false
        this.msg = ""
        this.color = "blue-600"
    }

    created(){
        this.reset()
        window.toast = this.toast
    }
}
</script>