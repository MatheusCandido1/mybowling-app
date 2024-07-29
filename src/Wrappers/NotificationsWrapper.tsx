import PushNotifications from "../notifications/PushNotifications";
import { Notifications } from "../Screens/Notifications";

export function NotificationsWrapper() {
  return (
    <>
      <Notifications />
      <PushNotifications />
    </>
  )
}
