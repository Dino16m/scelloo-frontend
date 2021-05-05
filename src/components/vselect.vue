<template>
  <div class="w-full px-3">
    <label
      class="block  tracking-wide text-gray-700 text-sm mb-2"
      :for="id"
    >
      {{label}}
    </label>
    <div class="relative">
      <select
        @input="$emit('input', $event.target.value)"
        :value="value"
        class="block appearance-none w-full bg-transparent border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        :id="id"
      >
        <option class="capitalize" v-for="(item, i) in keyedItems" :key="i" :value="item.value">
            {{item.text}}
        </option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class VSelect extends Vue {
    @Prop({type: String, required: false, default: ""})
    label!: string

    @Prop({type: Array, required: false, default: ["No items"]})
    items!: Array<any>
    
    @Prop({required: false})
    value!: any

    slug = ""

    get keyedItems(){
        return  this.items.map(item => {
            if(typeof item == "string"){
                return {value: item, text: item}
            }
            return item
        })
    }

    get id(){
      if(!this.slug) this.slug = String(Math.random())
      return `text-field-${this.slug}`
    }
}
</script>