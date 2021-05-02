<template>
  <div class="p-8 relative">
    <span class="flex flex-row justify-between pb-3">
      <span class="text-xl font-semibold">Leave</span>
      <button 
        @click="show = true"
        class="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg">
          New Request
      </button>
    </span>
    <no-leave/>

    <new-leave :visible.sync="show"/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import NoLeave from '@/components/NoLeave.vue'
import NewLeave from  '@/components/NewLeave.vue'

@Component({
  components:{
    NoLeave,
    NewLeave
  }
})
export default class Home extends  Vue{
  show = false
}
</script>