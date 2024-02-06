import { useState } from "react";
import { useDashboardGetAll } from "../../hooks/useDashboardGetAll";
import { useDashboard } from "../../hooks/useDashboard";

export function useDashboardController() {
  const { handleShowAverageModal } = useDashboard();
  const { stats, isFetching } = useDashboardGetAll();

  return {
    stats,
    isLoading: isFetching,
    handleShowAverageModal
  }
}
