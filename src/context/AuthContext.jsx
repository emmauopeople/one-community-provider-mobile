import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [provider, setProvider] = useState(null);
  const [token, setToken] = useState(null);

  const login = async ({ email, password }) => {
    // Temporary login for UI testing.
    // Later this will call the One Community backend.
    setProvider({
      id: 1,
      name: "Test Provider",
      email
    });

    setToken("temporary-provider-token");
  };

  const logout = () => {
    setProvider(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        provider,
        token,
        isAuthenticated: Boolean(token),
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