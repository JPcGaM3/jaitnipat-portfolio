import { onMounted, ref, watch } from 'vue';

type Theme = 'light' | 'dark';
const STORAGE_KEY = 'portfolio-theme';

const theme = ref<Theme>('dark');

function applyTheme(value: Theme) {
  theme.value = value;
  document.documentElement.classList.toggle('dark', value === 'dark');
}

export function useTheme() {
  onMounted(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored) {
      applyTheme(stored);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      applyTheme('dark');
    } else {
      applyTheme('light');
    }
  });

  watch(theme, (value) => {
    localStorage.setItem(STORAGE_KEY, value);
  });

  return {
    theme,
    toggleTheme: () => applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  };
}
