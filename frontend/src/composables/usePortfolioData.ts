import { onMounted, ref } from 'vue';
import type { Portfolio } from '@shared/models/portfolio';
import { fetchPortfolio } from '../services/portfolioApi';

export function usePortfolioData() {
  const portfolio = ref<Portfolio | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  onMounted(async () => {
    isLoading.value = true;
    try {
      portfolio.value = await fetchPortfolio();
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load portfolio data';
    } finally {
      isLoading.value = false;
    }
  });

  return {
    portfolio,
    isLoading,
    error
  };
}
