<template>
  <div class="px-3">
    <label
      class="block tracking-wide text-gray-700 text-sm mb-2"
      :for="id"
    >
      {{ label }}
    </label>
    <div class="relative">
      <div
        v-if="icon"
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700"
      >
        <span :class="[icon]" class="mdi mr-4 font-extralight text-black"/>
      </div>
      <input
        v-bind="$attrs"
        @input="$emit('input', $event.target.value)"
        :value="value"
        :class="{'pl-8': Boolean(icon), 'border-red-600': error, 'border-gray-200': !error}"
        class="block appearance-none  w-full bg-transparent border  text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        :id="id"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
    inheritAttrs: false
})
export default class VInput extends Vue {
    @Prop({ type: String, required: false, default: "" })
    label!: string

    @Prop({ type: String, required: false, default: "" })
    error!: string
    
    @Prop({ type: String, required: false, default: "" })
    icon!: string

    @Prop({ required: false })
    value!: any
    
    slug = ''

    get id(){
      if(!this.slug) this.slug = String(Math.random())
      return `select-field-${this.slug}`
    }
}
</script>