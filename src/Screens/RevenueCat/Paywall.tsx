import React from 'react';
import { Alert, View } from 'react-native';

import RevenueCatUI from 'react-native-purchases-ui';

export function Paywall() {

  // Display current offering
  return (
    <View style={{ flex: 1 }}>
      <RevenueCatUI.Paywall
        onDismiss={() => {
          // Dismiss the paywall, i.e. remove the view, navigate to another screen, etc.
          // Will be called when the close button is pressed (if enabled) or when a purchase succeeds.
          Alert.alert('Paywall dismissed');
        }}
      />
    </View>
  );
}
