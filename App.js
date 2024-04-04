import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import LoginScreen from "./apps/Screens/LoginScreen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./apps/Navigations/TabNavigation";

export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_Z29vZC1naWJib24tMTYuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <View className="flex-1 bg-white">
        <StatusBar style="auto" />
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}
