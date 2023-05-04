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
    const user = userData.user;
    const token = userData.access;
    localStorage.setItem("user", JSON.stringify({ details:user, token }));
    
    setUser(user);

    // localStorage.setItem("user", JSON.stringify(userData));

    // console.log(userData);
    // setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser).details);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
