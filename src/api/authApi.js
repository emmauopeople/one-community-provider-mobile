import apiClient from "./apiClient";

export async function loginProvider({ email, password }) {
  const response = await apiClient.post("/auth/login", {
    email,
    password
  });

  return response.data;
}

export async function getCurrentProvider() {
  const response = await apiClient.get("/auth/me");
  return response.data;
}

export async function logoutProvider() {
  const response = await apiClient.post("/auth/logout");
  return response.data;
}