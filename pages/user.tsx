import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

import { useUser } from "../providers/user";
import Button from "../components/Button";
import { User } from "../types";

const UserPage: NextPage<{ user: User }> = () => {
  const { user, getUser, doLogout } = useUser(useRouter());

  useEffect(() => {
    getUser();
  }, []);

  if (!user) return <span>loading...</span>;

  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <br />
      <Button onClick={doLogout}>logout</Button>
    </>
  );
};

export default UserPage;
