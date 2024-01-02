import { useProfile } from "../../hooks/useProfile";

export function useProfileController() {

  const {
    handleShowUpdateProfileModal
  } = useProfile();


  return {
    handleShowUpdateProfileModal
  }
}
