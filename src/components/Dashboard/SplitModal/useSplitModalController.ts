import { useDashboard } from "../../../hooks/useDashboard"
import { useDashboardGetAll } from "../../../hooks/useDashboardGetAll";

export function useSplitModalController() {
  const {
    showSplitModal,
    handleCloseSplitModal
  } = useDashboard();

  const {
    splits
  } = useDashboardGetAll();

  return {
    showSplitModal,
    handleCloseSplitModal,
    splits
  }
}
