<template>
    <div class="w-full flex flex-col">
        <span class="w-full grid grid-cols-7 gap-x-0">
            <span 
                class="font-bold text-lg flex justify-center" 
                v-for="(header, i) in headers" 
                :key="i"
            >
                {{header}}
            </span>
        </span>
        <history-row v-for="(item, i) in pageItems" :item="item" :key="i"/>
        <div class="flex flex-row justify-between pa-3 mt-8 text-sm">
            <span class="text-gray-400">
                Showing {{page}} of {{numOfPages}}
            </span>
            <div class="flex flex-row ">
                <span 
                    @click="switchPage(-1)"
                    class="mx-1 cursor-pointer"
                >
                    Previous
                </span>
                <span 
                    v-for="p in numOfPages" :key="p"
                    @click="page = p"
                    :class="{'justify-center flex shadow-md rounded-md bg-blue-700': p == page}"
                    class="mx-1 cursor-pointer w-6 h-6 "
                > {{p}} </span>
                <span 
                    @click="switchPage(1)" 
                    class="mx-1 cursor-pointer w-6 h-6"
                >
                    Next
                </span>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import HistoryRow from '@/components/HistoryRow.vue'
import ILeaveRequest from '@/types/ILeaveRequest'

@Component({
    components: {
        HistoryRow
    }
})
export default class HistoryTable extends Vue{
    headers = [
        "Leave Type",
        "Details",
        "Start Date", "End Date", "Duration (Days)",
        "Allowance", "Delegatee"
    ]


    @Prop({type: Array, required: true, default: []})
    items!: ILeaveRequest[]

    page = 1

    itemsPerPage = 3

    get pageItems(){
        if (this.chunkedItems.length < this.page) return []
        return this.chunkedItems[this.page-1]
    }


    get numOfPages(){
        return this.chunkedItems.length
    }

    get chunkedItems(){
        let chunks = [] as Array<any[]>
        this.items.forEach(item => {
            let cur = chunks.pop() || []
            if (cur.length >= this.itemsPerPage) {
                chunks.push(cur)
                cur = []
            }
            cur.push(item)
            chunks.push(cur)
        })
        return chunks
    }

    switchPage(num: number){
        const newPage = this.page + num
        if(newPage < 1) return
        if(newPage > this.numOfPages) return
        this.page = newPage
    }

    mounted(){
        this.page = 1
        console.log("mounted")
    }
}
</script>