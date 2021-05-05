<template>
  <modal :visible.sync="show" class="bg-white block w-full h-full">
    <div class="flex justify-between items-center p-3 w-full">
      <span class="font-semibold text-lg block"> Request leave </span>
      <span
        class="text-white bg-blue-400 w-20 h-20 flex flex-col rounded-full justify-center items-center"
      >
        <span class="font-bold text-2xl mb-0 leading-3"> {{selectedLeaveBalance}} </span>
        <span class="mt-1 text-xs block text-center">days left</span>
      </span>
    </div>
    <form class="p-3 w-full flex flex-col" @submit.prevent="submit">
      <div class="grid grid-cols-2 gap-x-4 gap-y-4">
            <v-select 
                required
                label="Leave type" 
                v-model="leaveType" 
                :items="leaveTypes"
            />
            <v-input v-model="details" required label="Details"/>
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
                <span class="font-bold text-lg">{{duration}}</span>
            </span>
            <v-select v-model="allowance" required :items="allowanceChoices" label="Leave Allowance" />
            <span class="">
                <v-input 
                    v-model="delegatee" 
                    required icon="mdi-magnify" 
                    label="Delegatee"
                    :error="delegateeError"
                />
                <div 
                    :class="{'hidden': delegatees.length < 1}" 
                    class="flex flex-col max-h-16 overflow-y-auto bg-white rounded-md mt-2 mx-3 px-3 py-2 border-2 border-gray-200"
                >
                    <delegatee 
                        @chosen="delegatee = del.name"
                        v-for="(del, i) in delegatees" :key="i" 
                        :delegatee="del"
                    />
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
            :disabled="submitting"
            type="submit"
            class="mt-4 w-28 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Save
      </button>     
    </form>
  </modal>
</template>
<script lang="ts">
import { Component, Prop, PropSync, Vue, Watch } from "vue-property-decorator";
import Modal from "@/components/modal.vue";
import VSelect from "@/components/vselect.vue"
import VInput from "@/components/vinput.vue"
import Delegatee from "@/components/Delegatee.vue"
import ELeaveType from "@/types/leaves.types"
import IDelegatee from "@/types/IDelegatee"
import {apiUrl} from '@/config'
import ILeaveRequest from "@/types/ILeaveRequest";
import utils from "@/utils";

import { namespace } from 'vuex-class'

const leaveRequests = namespace("leaveRequests")
type IIndexable = {[state: string]: any}
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
    
    submitting = false
    
    allowanceChoices = [
        {value: true, text: "yes"},
        {value: false, text: "no"}
    ]

    leaveBalances = {} as IIndexable

    defaultDelegatees = [] as IDelegatee[]

    dateError = ""
    delegateeError = ""


    leaveType = ""
    startDate = ""
    endDate = ""
    delegatee = ""
    details = ""
    allowance = false

    @leaveRequests.Mutation
    addRequest!: any

    get delagateeId(){
        return this.defaultDelegatees.find(d => d.name == this.delegatee)?.id
    }

    get leaveTypes() {
        return Object.values(ELeaveType).map(leaveType => {
            const text = `${leaveType} leave`
            return {text: text, value: leaveType}
        })
    }

    get selectedLeaveBalance(){
        if(!this.leaveType) return 0
        return this.leaveBalances[this.leaveType]
    }

    get delegatees(){
        if (!this.delegatee) return []
        return this.defaultDelegatees.filter(d => {
            return d.name.toLowerCase().includes(
                this.delegatee.toLowerCase()
            )
        })
    }
    get duration(){
        if(!this.validateDate()) return 0
        return utils.daysBetweenDates(
            new Date(this.startDate), new Date(this.endDate)
        )
    }

    get payload(){
        return {
            leaveType: this.leaveType,
            delegateeId: this.delagateeId,
            details: this.details,
            allowance: this.allowance,
            startDate: new Date(this.startDate).toLocaleDateString("en-ZA"),
            endDate: new Date(this.endDate).toLocaleDateString("en-ZA")
        }
    }
    validateForm(){
        if(!this.delagateeId) this.delegateeError = "invalid"
        setTimeout(() => {
            this.delegateeError = ""
        }, 2000);
        return this.delagateeId && this.validateDate()
    }

    validateDate(){
        let msg = ""
        let response = true
        const startDate = new Date(this.startDate)
        const endDate = new Date(this.endDate)
        
        if( !(this.startDate && this.endDate)){
            msg = "Both dates are required"
            response = false
        }
        if (new Date() > startDate){
            msg  = "Start date cannot be in the past"
            response = false
        }
        if (new Date() > endDate){
            msg = "End date cannot be in the past"
            response = false
        }
        if (startDate > endDate){
            msg = "End date must be after start"
            response = false
        }
        if(utils.daysBetweenDates(startDate, endDate) > 14){
            msg = "You can only have 14 days at a time"
            response = false
        }
        if(utils.daysBetweenDates(startDate, endDate) > this.selectedLeaveBalance){
            msg = `You have only ${this.selectedLeaveBalance} days of ${this.leaveType} leave left.`
        }
        this.dateError = msg
        setTimeout(() => {
            this.dateError = ""
        }, 2000);
        return response
    }

    async submit(){
        if(!this.validateForm()) return
        this.submitting = true
        const response = await fetch(`${apiUrl}/leaves/request?uid=1`,
        {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(this.payload)
        }).then(r => r.json())
        if (response.status) {
            this.success(response.data.request)
        }else{
            this.failed(response.errors)
        }
        this.submitting = false
    }

    success(request: ILeaveRequest){
        const startDate = new Date(request.startDate)
        const endDate = new Date(request.endDate)
        const days = utils.daysBetweenDates(startDate, endDate)

        this.leaveBalances[request.leaveType] -= days
        this.addRequest(request)

        window.toast({msg: "Request added", color: "success"})
        this.reset()
    }

    reset(){
        this.leaveType = ""
        this.startDate = ""
        this.endDate = ""
        this.delegatee = ""
        this.details = ""
        this.allowance = false
    }

    failed(errors: {msg: string}[]){
        const timeout = 2000
        errors.forEach(error => {
            setTimeout(() => {
                window.toast({msg: error.msg, color: "error"}) 
            }, timeout + 1000);
        })
    }
    async getDelegatees(){
        const delegatees =  await fetch(
            `${apiUrl}/leaves/delegatees`
        ).then(r => r.json())

        this.defaultDelegatees = delegatees.data.delegatees
    }

    async getLeaveBalances(){
        const leaveBalances =  await fetch(
            `${apiUrl}/leaves/balances?uid=1`
        ).then(r => r.json())
        this.leaveBalances = leaveBalances.data.leaveBalance
    }

    @Watch('show')
    shown(){
        if(!this.show) this.reset()
    }

    async created(){
        this.getDelegatees()
        this.getLeaveBalances()
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