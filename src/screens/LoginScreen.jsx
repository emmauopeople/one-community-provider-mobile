import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View
} from "react-native";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { useAuth } from "../context/AuthContext";

export default function LoginScreen() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setLoading(true);
      await login({ email: normalizedEmail, password });
    } catch (err) {
      console.log("LOGIN ERROR:", {
        message: err?.message,
        status: err?.response?.status,
        data: err?.response?.data
      });

      setError(
        err?.response?.data?.error ||
          err?.message ||
          "Login failed. Please check your email and password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.page}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.card}>
        <Text style={styles.title}>One Community</Text>
        <Text style={styles.subtitle}>Provider Mobile App</Text>

        <AppInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="provider@example.com"
          keyboardType="email-address"
        />

        <AppInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          secureTextEntry
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <AppButton title="Login" onPress={handleLogin} loading={loading} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ecfdf5",
    justifyContent: "center",
    padding: 20
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 22,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0f766e",
    textAlign: "center"
  },
  subtitle: {
    fontSize: 16,
    color: "#475569",
    textAlign: "center",
    marginBottom: 24
  },
  error: {
    color: "#dc2626",
    marginBottom: 8,
    fontWeight: "600"
  }
});
