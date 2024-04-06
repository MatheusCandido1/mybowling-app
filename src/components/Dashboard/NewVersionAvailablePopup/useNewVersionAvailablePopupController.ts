import { Linking } from "react-native";
import { useDashboard } from "../../../hooks/useDashboard"
import { useDashboardVersion } from "../../../hooks/useDashboardVersion";

export function useNewVersionAvailablePopupController() {

  const {
    handleCloseNewVersionPopup
  } = useDashboard();

  const { apiVersion } = useDashboardVersion();

  function handleUpdateApp() {
    Linking.openURL("https://apps.apple.com/us/app/splitmate-bowling-stats/id6476009685");
  }

  return {
    handleCloseNewVersionPopup,
    apiVersion: apiVersion.version,
    handleUpdateApp
  }
}
