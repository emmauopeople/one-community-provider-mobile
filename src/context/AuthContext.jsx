import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getCurrentProvider,
  loginProvider,
  logoutProvider
} from "../api/authApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [provider, setProvider] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    async function checkExistingSession() {
      try {
        const data = await getCurrentProvider();

        if (data?.user) {
          setProvider(data.user);
        }
      } catch (error) {
        console.log("No active provider session:", error?.message);
      } finally {
        setInitializing(false);
      }
    }

    checkExistingSession();
  }, []);

  const login = async ({ email, password }) => {
    const data = await loginProvider({ email, password });

    if (!data?.ok || !data?.user) {
      throw new Error("Login response did not include user session data.");
    }

    if (data.user.role !== "provider") {
      throw new Error("Only provider accounts can use this mobile app.");
    }

    setProvider(data.user);
  };

  const logout = async () => {
    try {
      await logoutProvider();
    } catch (error) {
      console.log("Logout request failed:", error?.message);
    } finally {
      setProvider(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        provider,
        initializing,
        isAuthenticated: Boolean(provider),
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}