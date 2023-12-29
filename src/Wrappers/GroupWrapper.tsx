import { Group } from "../Screens/Group";

export function GroupWrapper({ route }: { route: any }) {

  const { id } = route.params

  return (
    <Group id={id} />
  )
}
