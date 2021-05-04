<template>
    <div 
      @click="$emit('chosen')" 
      class="flex flex-row px-3 divide-y-2 divide-solid cursor-pointer">
        <div
          class="group h-9 w-9  rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"
        >
          <img
            src="@/assets/imgs/African-american-man.png"
            class="object-cover object-center w-full h-full visible group-hover:hidden"
          />
        </div>
        <div class="text-xs ml-2 text-center my-1">
            <span class="block mx-auto">{{delegatee.name}}</span>
            <span class="block mx-auto">{{delegatee.email}}</span>
        </div>
    </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class Delegatee extends Vue{
    @Prop({type: Object, required: true})
    delegatee!: {name: string, email: string}
}
</script>