import { fallbackPortfolio } from "../../../data/fallbackData";

export function usePortfolio() {
  return { data: fallbackPortfolio, usingFallback: false };
}
