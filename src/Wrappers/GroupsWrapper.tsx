import { Groups } from "../Screens/Groups";
import { GroupsProvider } from "../contexts/GroupsContext";

export function GroupsWrapper() {
  return (
    <GroupsProvider>
      <Groups />
    </GroupsProvider>
  )
}
