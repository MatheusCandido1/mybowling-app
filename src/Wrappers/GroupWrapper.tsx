import { Group } from "../Screens/Group";
import { GroupProvider } from "../contexts/GroupContext";

export function GroupWrapper({ route }: { route: any }) {

  const { id } = route.params

  return (
    <GroupProvider>
      <Group id={id} />
    </GroupProvider>
  )
}
