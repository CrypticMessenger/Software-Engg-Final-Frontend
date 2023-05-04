import React, { useEffect, createContext, useState } from "react";
export const UserContext = createContext();

/**
 * UserProvider is a component that provides user data to its children components
 * @param {Object} children - children components
 * @returns {JSX.Element} A React component that provides user data to its children components
 */
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));

    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
