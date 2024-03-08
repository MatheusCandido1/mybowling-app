import { useDashboardGetAll } from "../../hooks/useDashboardGetAll";
import { useDashboard } from "../../hooks/useDashboard";

export function useDashboardController() {
  const { handleShowAverageModal, handleShowSplitModal } = useDashboard();
  const { stats, isFetching } = useDashboardGetAll();

  return {
    stats,
    isLoading: isFetching,
    handleShowAverageModal,
    handleShowSplitModal
  }
}
