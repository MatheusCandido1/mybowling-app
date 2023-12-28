import { GroupsProvider, GroupsContext } from "../contexts/GroupsContext";

export function GroupWrapper() {
  return (
    <GroupsProvider>
      <GroupsContext.Consumer>

      </GroupsContext.Consumer>
    </GroupsProvider>
  )
}
