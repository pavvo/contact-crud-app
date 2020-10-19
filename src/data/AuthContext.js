import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("x-auth-token");

    if (token) {
      if (token.length > 0) {
        setIsAuth(!isAuth);
      }
    }
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthContextProvider;
