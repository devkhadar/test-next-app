import jwt from "jsonwebtoken";
export const isAuthenticated = () => {
  const token = getToken();

  if (token) {
    const user = jwt.decode(token);
    return user;
  }
  return null;
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const setToken = (token: string) => {
  return localStorage.setItem("token", token);
};

export const logout = () => {
  localStorage.clear();
};
