import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "one_community_provider_token";
const PROVIDER_KEY = "one_community_provider_user";

export async function saveAuthSession({ token, provider }) {
  await SecureStore.setItemAsync(TOKEN_KEY, token);
  await SecureStore.setItemAsync(PROVIDER_KEY, JSON.stringify(provider));
}

export async function getStoredAuthSession() {
  const token = await SecureStore.getItemAsync(TOKEN_KEY);
  const providerJson = await SecureStore.getItemAsync(PROVIDER_KEY);

  if (!token || !providerJson) {
    return null;
  }

  return {
    token,
    provider: JSON.parse(providerJson)
  };
}

export async function clearAuthSession() {
  await SecureStore.deleteItemAsync(TOKEN_KEY);
  await SecureStore.deleteItemAsync(PROVIDER_KEY);
}