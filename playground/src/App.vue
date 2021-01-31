<template>
  <div class="container max-w-4xl my-10">
    <h1
      class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
    >
      tailwind-scrollbar-hide
    </h1>
    <p class="text-black text-opacity-80">
      tailwindcss plugin for hide scrollbar
    </p>
    <div
      class="p-5 mt-10 bg-white shadow-2xl rounded-xl"
      :key="i"
      v-for="(tab, i) in tabs"
    >
      <h3 class="font-bold">{{ tab.title }}</h3>

      <div class="p-4 mt-5 rounded-lg bg-gray-50">
        <div class="w-full overflow-auto max-h-48" :class="[tab.class]">
          <Lorem />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Lorem from './components/Lorem.vue'

export default defineComponent({
  name: 'App',
  components: {
    Lorem
  },
  setup() {
    const tabs = [
      { title: 'Default', class: null },
      { title: 'scrollbar-hide', class: 'scrollbar-hide' }
    ]
    return { tabs }
  }
})
</script>

<style class="postcss">
body {
  @apply bg-gray-100;
}
</style>
