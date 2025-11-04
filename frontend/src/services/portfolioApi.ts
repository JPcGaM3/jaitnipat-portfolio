import axios from 'axios';
import type { Portfolio } from '@shared/models/portfolio';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api'
});

export async function fetchPortfolio() {
  const response = await client.get<Portfolio>('/portfolio');
  return response.data;
}
