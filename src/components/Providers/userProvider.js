import React, { useEffect, createContext, useState } from 'react';
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));

    setUser(userData);
    
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, handleLogin, handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
