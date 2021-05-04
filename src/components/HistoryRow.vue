<template>
  <div
    class="mt-3 min-w-full h-16 p-4 relative bg-gray-50 border-2 border-gray-400 rounded-xl"
  >
    <div class="grid grid-cols-7">
        <span class="flex justify-center">{{formattedItem.leaveType}}</span>
        <span class="flex justify-center">{{formattedItem.details}}</span>
        <span class="flex justify-center">{{formattedItem.startDate}}</span>
        <span class="flex justify-center">{{formattedItem.endDate}}</span>
        <span class="flex justify-center">{{formattedItem.duration}}</span>
        <span class="flex justify-center">{{formattedItem.allowance}}</span>
        <span class="flex justify-center">{{formattedItem.delegatee}}</span>
    </div>
    <span
        v-if="pending"
      @click="showAction = !showAction"
      class="absolute right-2 top-4 mdi mdi-dots-vertical text-gray-300 text-xl cursor-pointer"
    ></span>
    <div
      v-if="showAction"
      class="z-10 absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl"
    >
      <a
        href="#"
        @click="approve"
        class="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-blue-500 hover:text-white"
      >
        Approve
      </a>
      <div class="py-2">
        <hr />
      </div>
      <a
        @click="disapprove"
        href="#"
        class="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-blue-500 hover:text-white"
      >
        Disapprove
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import ILeaveRequest from "@/types/ILeaveRequest";
import { Component, Prop, Vue } from "vue-property-decorator";
import utils from "@/utils"
import { apiUrl } from "@/config";

import { namespace } from 'vuex-class'
import ERequestStatus from "@/types/ERequestStatus";

const leaveRequests = namespace("leaveRequests")
@Component
export default class HistoryRow extends Vue {
    showAction = false

    @Prop({type: Object, required: true})
    item!: ILeaveRequest

    @leaveRequests.Mutation
    update!: any 

    get pending(){
        return this.item.status == ERequestStatus.PENDING
    }
    get formattedItem(){
        const startDate = new Date(this.item.startDate)
        const endDate = new Date(this.item.endDate)

        const update = {
            startDate: startDate.toDateString(),
            endDate: endDate.toDateString(),
            delegatee: this.item.delegatee.name,
            allowance: this.item.allowance ? "Yes" : "No",
            duration: utils.daysBetweenDates(startDate, endDate)
        }
        return {...this.item, ...update}
    }

    async approve(){
        const response = await fetch(`${apiUrl}/leaves/approve/${this.item.id}`, 
        {
            method: "POST"
        }).then(r => r.json())
        if (response.status){
            window.toast({msg: "Request approved", color: "green-600"})
            this.update({...this.item, status: ERequestStatus.APPROVED})
        }else{
           window.toast({msg: response.errors, color: "red-500"}) 
        }
        this.showAction = false
    }

    async disapprove(){ 
        const response = await fetch(`${apiUrl}/leaves/disapprove/${this.item.id}`, 
        {
            method: "POST"
        }).then(r => r.json())
        if (response.status){
            window.toast({msg: "Request disapproved", color: "green-600"})
            this.update({...this.item, status: ERequestStatus.DISAPPROVED})
        }else{
           window.toast({msg: response.errors, color: "red-500"}) 
        }
        this.showAction = false
    }
}
</script>