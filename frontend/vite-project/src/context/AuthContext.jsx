import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
// Create the AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // You might want to decode the token to get user info or fetch user info from backend
      setUser({ token }); // Minimal example: just store the token
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('token', userData.token); // Store token if needed
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token'); // Clear token on logout
  };

  const isAuthenticated = () => {
    return user !== null; // or check localStorage for token
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};