import { useContext } from "react";
import { GroupsContext } from "../contexts/GroupsContext";

export function useGroups() {
  return useContext(GroupsContext);
}
