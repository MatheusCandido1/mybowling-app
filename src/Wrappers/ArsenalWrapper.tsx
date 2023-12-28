import { Arsenal } from "../Screens/Arsenal";
import { ArsenalProvider } from "../contexts/ArsenalContext";

export function ArsenalWrapper() {
  return (
    <ArsenalProvider>
      <Arsenal />
    </ArsenalProvider>
  )
}
