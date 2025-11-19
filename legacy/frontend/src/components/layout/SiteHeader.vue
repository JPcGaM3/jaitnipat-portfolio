<template>
  <header class="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
    <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
      <RouterLink to="/" class="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
        Casey Parker
      </RouterLink>
      <nav class="hidden gap-6 text-sm text-slate-300 md:flex">
        <a href="#projects" class="hover:text-indigo-200">Projects</a>
        <a href="#experience" class="hover:text-indigo-200">Experience</a>
        <a href="#contact" class="hover:text-indigo-200">Contact</a>
      </nav>
      <ThemeToggle />
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ThemeToggle from './ThemeToggle.vue';
</script>
