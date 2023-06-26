import { createContext, useMemo, useState } from "react";

const UserContext = createContext();

function ContextProvider({ children }) {
  const [user, setUser] = useState();

  const contextValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

const UserExport = { UserContext, ContextProvider };

export default UserExport;
