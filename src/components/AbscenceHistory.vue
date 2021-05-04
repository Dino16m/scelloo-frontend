<template>
    <div class="w-full">
        <span class=" flex flex-row font-semibold">
            <span class="text-blue-500 ">Leave</span>
            <span class="mdi mdi-chevron-right text-xl text-blue-500"/>
            <span>Absence History</span>
        </span>

        <v-tabs class="mt-16" :tabs="tabs" v-model="tab">
            <history-table key="pending" :items="pending" v-if="tab == 'Pending'"/>
            <history-table key="approved" :items="approved" v-if="tab == 'Approved'"/>
            <history-table key="disapproved" :items="disapproved" v-if="tab == 'Disapproved'"/>
        </v-tabs>
    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import VTabs from '@/components/vtabs.vue'
import HistoryTable from '@/components/HistoryTable.vue'

import { namespace } from 'vuex-class'
import ILeaveRequest from '@/types/ILeaveRequest'
import ERequestStatus from '@/types/ERequestStatus'

const leaveRequests = namespace("leaveRequests")

@Component({
    components:{
        VTabs,
        HistoryTable
    }
})
export default class AbscenceHistory extends Vue{
    tabs = ["Pending", "Approved", "Disapproved"]
    tab = ""

    @leaveRequests.State
    leaveRequests!: ILeaveRequest[]

    get approved(){
        return this.leaveRequests.filter(
            req => req.status == ERequestStatus.APPROVED
        )
    }

    get pending(){
        return this.leaveRequests.filter(
            req => req.status == ERequestStatus.PENDING
        )
    }

    get disapproved(){
        return this.leaveRequests.filter(
            req => req.status == ERequestStatus.DISAPPROVED
        )
    }
}
</script>