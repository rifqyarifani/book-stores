import { PropsWithChildren, createContext, useContext, useState } from "react";

type AuthState = {
  auth: User | null;
  setAuth(auth: User): void;
};

const AuthContext = createContext<AuthState | null>(null);

const useAuth = (): AuthState => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Please use ThemeProvider in parent component");
  }

  return context;
};

export const AuthProvider = (props: PropsWithChildren) => {
  const [auth, setAuth] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default useAuth;
