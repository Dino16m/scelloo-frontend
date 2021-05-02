<template>
    <div class="flex flex-row px-3 ">
        <div
          class="group h-9 w-9  rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"
        >
          <img
            src="@/assets/imgs/African-american-man.png"
            class="object-cover object-center w-full h-full visible group-hover:hidden"
          />
        </div>
        <div class="text-xs ml-2 text-center">
            <span class="block mx-auto">Chukwudi Ayobami</span>
            <span class="block mx-auto">chukwudi@dino.com</span>
        </div>
    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class Delegatee extends Vue{

}
</script>