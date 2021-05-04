<template>
  <div class="p-8 relative">
    <span class="flex flex-row justify-between pb-3">
      <span class="text-xl font-semibold" v-if="hasHistory">Abscence History</span>
      <span class="text-xl font-semibold" v-else>Leave</span>
      <button 
        @click="show = true"
        class="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg">
          New Request
      </button>
    </span>
    <abscence-history v-if="hasHistory"/>
    <no-leave v-else/>

    <new-leave :visible.sync="show"/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import NoLeave from '@/components/NoLeave.vue'
import NewLeave from  '@/components/NewLeave.vue'
import AbscenceHistory from "@/components/AbscenceHistory.vue"
import { namespace } from 'vuex-class'
import ILeaveRequest from '@/types/ILeaveRequest'

const leaveRequests = namespace("leaveRequests")

@Component({
  components:{
    NoLeave,
    NewLeave,
    AbscenceHistory
  }
})
export default class Home extends  Vue{
  show = false

  @leaveRequests.State
  leaveRequests!: ILeaveRequest[]

  @leaveRequests.Action
  fetchRequests!: () => Promise<any>

  get hasHistory(){
    return this.leaveRequests.length > 0  
  }

  created(){
    this.fetchRequests()
  }
}
</script>