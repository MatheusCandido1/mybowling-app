import { useDashboardGetAll } from "../../hooks/useDashboardGetAll";
import { useDashboard } from "../../hooks/useDashboard";
import { useDashboardVersion } from "../../hooks/useDashboardVersion";

import { appVersion } from "../../utils/getAppInfo";

export function useDashboardController() {
  const { handleShowAverageModal, handleShowSplitModal } = useDashboard();
  const { stats, isFetching } = useDashboardGetAll();
  const { apiVersion, isCheckingVersion } = useDashboardVersion();


  const hasUpdate = apiVersion.version !== appVersion;

  return {
    stats,
    isLoading: isFetching,
    handleShowAverageModal,
    handleShowSplitModal,
    hasUpdate,
    isCheckingVersion,
    apiVersion
  }
}
