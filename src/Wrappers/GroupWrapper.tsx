import { Group } from "../Screens/Group";
import { GroupProvider } from "../contexts/GroupContext";

export function GroupWrapper({ route }: { route: any }) {

  const group = route.params

  return (
    <GroupProvider
      group={group}
    >
      <Group />
    </GroupProvider>
  )
}
