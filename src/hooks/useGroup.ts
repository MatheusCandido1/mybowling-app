import { useContext } from "react";
import { GroupContext } from "../contexts/GroupContext";

export function useGroup() {
  return useContext(GroupContext);
}
