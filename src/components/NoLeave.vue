<template>
    <div class="w-100 h-80 flex bg-white flex-row justify-center items-center">
        <div class="flex flex-col">
            <img src="@/assets/svg/leave.svg" class="h-44">
            <span class="block pt-5 w-8/12 mx-auto text-center">
                You have not made any Leave request. 
                Click on the New Request button to make a leave request
            </span>
        </div>
    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component 
export default class NoLeave extends Vue{

}
</script>