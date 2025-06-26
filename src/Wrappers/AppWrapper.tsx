
import { AuthStack } from "../Router/AuthStack";
import { RootNavigator } from '../Router/RootNavigator';
import { Welcome } from "../Router/Welcome";
import { useAuth } from "../hooks/useAuth";
import { KeyboardAvoidingView } from "react-native";
import { useEffect } from 'react';
import Purchases, { LOG_LEVEL } from 'react-native-purchases';
import RevenueCatUI, { PAYWALL_RESULT } from "react-native-purchases-ui";


export function AppWrapper() {
  const { authenticated, loggedUser } = useAuth();

  async function checkForUserPlans() {
    const offerings = await Purchases.getOfferings();

    console.log("Offerings: ", offerings);

    const paywallResult: PAYWALL_RESULT = await RevenueCatUI.presentPaywall();

    console.log("Paywall Result: ", paywallResult);
  }

  useEffect(() => {

    Purchases.setLogLevel(LOG_LEVEL.DEBUG);

    Purchases.configure({
      apiKey: "appl_DLBrYOLKPmdWTjjrpcfHrhRjLxv",
    })

    checkForUserPlans();

    // Present paywall for current offering:


  })
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
          <RootNavigator />
        )
      ) : (
        <AuthStack />
      )}
    </KeyboardAvoidingView>
  )
}
