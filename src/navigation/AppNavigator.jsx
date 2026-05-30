import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../context/AuthContext";

import LoginScreen from "../screens/LoginScreen";
import SkillListScreen from "../screens/SkillListScreen";
import CreateSkillScreen from "../screens/CreateSkillScreen";
import EditSkillScreen from "../screens/EditSkillScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0f766e"
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "700"
          }
        }}
      >
        {!isAuthenticated ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Provider Login" }}
          />
        ) : (
          <>
            <Stack.Screen
              name="SkillList"
              component={SkillListScreen}
              options={{ title: "My Skills" }}
            />
            <Stack.Screen
              name="CreateSkill"
              component={CreateSkillScreen}
              options={{ title: "Create Skill" }}
            />
            <Stack.Screen
              name="EditSkill"
              component={EditSkillScreen}
              options={{ title: "Edit Skill" }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ title: "Profile" }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}