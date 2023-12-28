
import { Stack } from "../Router/Stack";
import { Tabs } from '../Router/Tabs';
import { Welcome } from "../Router/Welcome";
import { useAuth } from "../hooks/useAuth";
import { KeyboardAvoidingView } from "react-native";

export function AppWrapper() {
  const { authenticated, loggedUser } = useAuth();

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      behavior="padding"
    >
      {authenticated ? (
        loggedUser?.profile.first_access ? (
          <Welcome />
          ) : (
          <Tabs />
        )
      ) : (
          <Stack />
      )}
    </KeyboardAvoidingView>
  )
}
