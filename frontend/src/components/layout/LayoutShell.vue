<template>
  <div class="bg-slate-950 text-slate-100">
    <SiteHeader />
    <main>
      <slot />
    </main>
    <footer class="border-t border-slate-800 bg-slate-900/50 py-6 text-center text-sm text-slate-400">
      © {{ currentYear }} Casey Parker. Crafted with empathy and utility.
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SiteHeader from './SiteHeader.vue';

const currentYear = computed(() => new Date().getFullYear());
</script>
