<template>
  <modal :visible.sync="show" class="bg-white block w-full h-full">
    <div class="flex justify-between items-center p-3 w-full">
      <span class="font-semibold text-lg block"> Request leave </span>
      <span
        class="text-white bg-blue-400 w-20 h-20 flex flex-col rounded-full justify-center items-center"
      >
        <span class="font-bold text-2xl mb-0 leading-3"> 16 </span>
        <span class="mt-1 text-xs block text-center">days left</span>
      </span>
    </div>
    <form class="p-3 w-full flex flex-col">
      <div class="grid grid-cols-2 gap-x-4 gap-y-4">
            <v-select 
                required
                label="Leave type" 
                v-model="leaveType" 
                :items="leaveTypes"
            />
            <v-input required label="Details"/>
            <div class="flex flex-col">
                <span class="flex flex-row items-center justify-between w-full">
                    <v-input 
                            v-model="startDate" required label="Duration" 
                            class="w-2/4" type="date" :error="dateError"
                        /> 
                    <span class="block py-auto mt-4">To</span>
                    <v-input 
                            v-model="endDate" required :error="dateError"
                            class="w-2/4 mt-5" type="date"
                        />
                </span>
                <span v-if="dateError" class="text-xs text-red-700">
                    {{dateError}}
                </span>
            </div>
            <span class="flex flex-col ml-5">
                <span class="text-gray-700 text-sm mb-2">Days Requested</span>
                <span class="font-bold text-lg">28</span>
            </span>
            <v-select required :items="['yes', 'no']" label="Leave Allowance" />
            <span class="">
                <v-input required icon="mdi-magnify" label="Delegatee"/>
                <div  class="hidden flex flex-col max-h-16 overflow-y-auto bg-white rounded-md mt-2 mx-3 px-3 py-2 border-2 border-gray-200">
                    <delegatee/>
                </div>
            </span>
      </div>
        <span class="text-sm px-3 pt-9">
            By Submitting, You confirm that you have read and agreed to the 
            terms and conditions of the Leave requests. 
            Click 
            <a href="#" class="no-underline text-blue-500">
                 here 
            </a> to read.
        </span>
        <button 
            @click="validateDate"
            class="mt-4 w-28 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Save
      </button>     
    </form>
  </modal>
</template>
<script lang="ts">
import { Component, Prop, PropSync, Vue } from "vue-property-decorator";
import Modal from "@/components/modal.vue";
import VSelect from "@/components/vselect.vue"
import VInput from "@/components/vinput.vue"
import Delegatee from "@/components/Delegatee.vue"

@Component({
  components: {
    Modal,
    VSelect,
    VInput,
    Delegatee
  },
})
export default class NewLeave extends Vue {
    @Prop({ required: true, default: false, type: Boolean })
    visible!: boolean;

    @PropSync("visible", { required: true, default: false, type: Boolean })
    show!: boolean;
    
    leaveTypes = [
        "Annual Leave", "Unpaid Leave", "Study Leave", "Compassionate Leave"
    ]

    dateError = ""

    leaveType = ""
    startDate = ""
    endDate = ""

    validateDate(){
        if( !(this.startDate && this.endDate)){
            this.dateError = "Both dates are required"
            return false
        }
        if (new Date() > new Date(this.startDate)){
            this.dateError = "Start date cannot be in the past"
            return false
        }
        if (new Date() > new Date(this.endDate)){
            this.dateError = "End date cannot be in the past"
            return false
        }
        if (new Date(this.startDate) > new Date(this.endDate)){
            this.dateError = "End date must be after start"
            return false
        }
        return true
    }

}
</script>
<style>
input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    color: transparent;
    background: transparent;
}
</style>