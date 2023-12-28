import { useContext } from "react";
import { ArsenalContext } from "../contexts/ArsenalContext";

export function useArsenal() {
  return useContext(ArsenalContext);
}
