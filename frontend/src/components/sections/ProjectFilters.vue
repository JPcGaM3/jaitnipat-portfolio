<template>
  <div class="flex flex-wrap gap-3">
    <button
      v-for="filter in filters"
      :key="filter.value"
      type="button"
      class="rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em]"
      :class="
        value === filter.value
          ? 'border-indigo-400 bg-indigo-500/20 text-indigo-200'
          : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-600'
      "
      @click="$emit('update:modelValue', filter.value)"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface FilterOption {
  value: string;
  label: string;
}

defineProps<{
  filters: FilterOption[];
}>();

const value = defineModel<string>({ required: true });
</script>
