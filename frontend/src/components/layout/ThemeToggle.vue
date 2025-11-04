<template>
  <button
    type="button"
    class="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300 hover:text-indigo-200"
    @click="toggleTheme"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from '../../composables/useTheme';

const { theme, toggleTheme } = useTheme();

const label = computed(() => (theme.value === 'dark' ? 'Light mode' : 'Dark mode'));
</script>
