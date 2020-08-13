import React, { createContext, FunctionComponent, useContext } from "react";
import { useSession, signIn, signOut } from "next-auth/client";

import PageLoader from "../components/PageLoader";
import { User } from "../types";

const UserContext = createContext<User>(null);

export function useUser() {
  const user = useContext<User>(UserContext);

  return { user, signIn, signOut };
}

const Provider: FunctionComponent = ({ children }) => {
  const [session, loading] = useSession();

  if (loading) return <PageLoader />;

  return (
    <UserContext.Provider value={session?.user}>
      {children}
    </UserContext.Provider>
  );
};

export default Provider;
