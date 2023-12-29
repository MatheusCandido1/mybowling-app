import { useArsenal } from "../../hooks/useArsenal";

export function useArsenalController() {

  const {
    showNewBallModal,
    handleShowNewBallModal,
    balls,
    isFetching,
    showEditBallModal,
    handleShowEditBallModal
  } = useArsenal();

  return {
    showNewBallModal,
    handleShowNewBallModal,
    balls,
    isFetching,
    showEditBallModal,
    handleShowEditBallModal
  }
}
