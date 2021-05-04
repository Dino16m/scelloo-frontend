<template>
    <div class="w-full flex flex-row">
        <div class="flex flex-col mr-16 pt-16">
            <span 
                v-for="(tab, i) in tabs" :key="i"
                :class="{'text-blue-600 border-blue-500 border-l-4 ': isActive(tab)}"
                class="pl-3  font-semibold my-2 text-gray-400 cursor-pointer"
                @click="switchTab(tab)"
            >
                {{tab}}
            </span>

        </div>
        <div class="flex-grow">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'

@Component 
export default class VTabs extends Vue{
    @Prop({required: true})
    tabs!: Array<any>
    
    @Prop({default: 0})
    value!: any

    switchTab(tab: any){
        this.$emit("input", tab)
    }

    isActive(tab: any){
        return tab == this.value
    }

    mounted(){
        if (this.tabs.length > 0) {
            this.switchTab(this.tabs[0])
        }
    }
}
</script>