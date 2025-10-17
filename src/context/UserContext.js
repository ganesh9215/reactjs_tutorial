import { createContext, useState } from "react";

// 1️⃣ Create context
export const UserContext = createContext();

// 2️⃣ Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means not logged in

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
