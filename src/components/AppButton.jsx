import React from "react";
import { ActivityIndicator, Pressable, Text, StyleSheet } from "react-native";

export default function AppButton({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = "primary"
}) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles.button,
        variant === "secondary" && styles.secondary,
        isDisabled && styles.disabled
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0f766e",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8
  },
  secondary: {
    backgroundColor: "#334155"
  },
  disabled: {
    opacity: 0.6
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700"
  }
});