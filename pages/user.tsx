import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PageTemplate from "../components/PageTemplate";
import PageLoader from "../components/PageLoader";
import { useUser } from "../providers/user";
import Button from "../components/Button";
import { User } from "../types";

const UserPage: NextPage<{ user: User }> = () => {
  const { user, getUser, doLogout } = useUser(useRouter());

  useEffect(() => {
    getUser();
  }, []);

  if (!user) return <PageLoader />;

  return (
    <PageTemplate>
      <p>Welcome {user.username}</p>
      <Button onClick={doLogout}>logout</Button>
    </PageTemplate>
  );
};

export default UserPage;
