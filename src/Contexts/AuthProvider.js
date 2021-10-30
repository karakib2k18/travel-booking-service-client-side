import React, { createContext } from "react";
import UseFirebase from "../Hooks/UseFirebase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const contextValueUseFirebase = UseFirebase();
  return (
      <AuthContext.Provider value={contextValueUseFirebase}>
        {children}
      </AuthContext.Provider>
  );
};

export default AuthProvider;
