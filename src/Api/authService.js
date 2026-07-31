import client from "./client";
import { ENDPOINTS } from "./endpoints";

export const login = (data) => {
  return client.post(ENDPOINTS.auth.login, data);
};

export const register = (data) => {
  return client.post(ENDPOINTS.auth.register, data);
};

export const logout = () => {
  return client.post(ENDPOINTS.auth.logout);
};

export const getMe = () => {
  return client.get(ENDPOINTS.auth.me);
};