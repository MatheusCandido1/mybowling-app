import { Dashboard } from "../Screens/Dashboard";
import { DashboardProvider } from "../contexts/DashboardContext";

export function DashboardWrapper() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  )
}
