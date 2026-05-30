import React from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";

export default function AppInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  multiline = false
}) {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={[styles.input, multiline && styles.multiline]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        multiline={multiline}
        textAlignVertical={multiline ? "top" : "center"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 6
  },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: "#ffffff"
  },
  multiline: {
    minHeight: 110
  }
});