import { useArsenal } from "../../hooks/useArsenal";

export function useArsenalController() {

  const { showNewBallModal } = useArsenal();

  return {
    showNewBallModal
  }
}
