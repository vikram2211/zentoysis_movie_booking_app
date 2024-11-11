// src/services/api.js

const BASE_URL = "http://localhost:5000"; // Adjust if needed

export const registerUser = async (name, email, password) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  return response.json();
};

export const loginUser = async (email, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};

export const getSeats = async (token) => {
  const response = await fetch(`${BASE_URL}/api/seats`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const bookSeats = async (seatIds, token) => {
  const response = await fetch(`${BASE_URL}/api/book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ seatIds }),
  });
  return response.json();
};

export const logout = () => {
    // Remove the token from localStorage to log out the user
    localStorage.removeItem("token");
    
    // Optionally, if you're using sessionStorage or other methods, you can clear them as well
    sessionStorage.removeItem("token");
  
    // Optionally, return a message or status
    return { message: "Logout successful" };
  };