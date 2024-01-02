import { Profile } from "../Screens/Profile";
import { ProfileProvider } from "../contexts/ProfileContext";

export function ProfileWrapper() {
  return (
    <ProfileProvider>
      <Profile />
    </ProfileProvider>
  )
}
