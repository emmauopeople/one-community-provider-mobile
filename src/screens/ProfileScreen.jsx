import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import { useAuth } from "../context/AuthContext";

export default function ProfileScreen() {
  const { provider, logout } = useAuth();

  return (
    <View style={styles.page}>
      <Text style={styles.heading}>Provider Profile</Text>
      <Text style={styles.text}>Name: {provider?.name}</Text>
      <Text style={styles.text}>Email: {provider?.email}</Text>

      <AppButton title="Logout" variant="secondary" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 16
  },
  heading: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: 18
  },
  text: {
    fontSize: 16,
    color: "#334155",
    marginBottom: 8
  }
});