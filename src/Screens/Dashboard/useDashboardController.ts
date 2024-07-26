import { useDashboardGetAll } from "../../hooks/useDashboardGetAll";
import { useDashboard } from "../../hooks/useDashboard";
import { useDashboardVersion } from "../../hooks/useDashboardVersion";

import { appVersion } from "../../utils/getAppInfo";
import { useLocations } from "../../hooks/useLocations";
import { useBalls } from "../../hooks/useBalls";
import { useGroups } from "../../hooks/useGroups";
import { useGroupGetAll } from "../../hooks/useGroupGetAll";

export function useDashboardController() {
  const { handleShowAverageModal, handleShowSplitModal, handleShowAdditionalInformationModal } = useDashboard();
  const { stats, isFetching } = useDashboardGetAll();
  const { apiVersion, isCheckingVersion } = useDashboardVersion();

  const { locations } = useLocations();
  const { balls } = useBalls();
  const { groups } = useGroupGetAll();

  const hasUpdate = apiVersion.version !== appVersion;

  return {
    stats,
    isLoading: isFetching,
    handleShowAverageModal,
    handleShowSplitModal,
    hasUpdate,
    isCheckingVersion,
    apiVersion,
    handleShowAdditionalInformationModal
  }
}
