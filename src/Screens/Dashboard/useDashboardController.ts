import { useState } from "react";
import { useDashboard } from "../../hooks/useDashboard";

export function useDashboardController() {
  const { stats, isFetching } = useDashboard();

  return {
    stats,
    isLoading: isFetching,
  }
}
