import { Groups } from "../Screens/Groups";
import { GroupsProvider } from "../contexts/GroupsContext";

export function GroupsWrapper({ route }: { route: any}) {

  return (
    <GroupsProvider>
      <Groups showInvites={route.params.showInvites} />
    </GroupsProvider>
  )
}
