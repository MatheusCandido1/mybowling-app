import { useDashboard } from "../../../hooks/useDashboard";
import { useDashboardGetAll } from "../../../hooks/useDashboardGetAll";

export function useAverageModalController() {
  const {
    showAverageModal,
    handleCloseAverageModal
  } = useDashboard();

  const { average_per_month } = useDashboardGetAll();

  const labels = average_per_month.map((stat) => stat.month_year);
  const values = average_per_month.map((stat) => Math.ceil(stat.average));


  return {
    labels,
    values,
    showAverageModal,
    handleCloseAverageModal
  }
}
