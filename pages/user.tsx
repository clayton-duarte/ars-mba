import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PageTemplate from "../components/PageTemplate";
import PageLoader from "../components/PageLoader";
import { useUser } from "../providers/user";
import Button from "../components/Button";
import { User } from "../types";

const UserPage: NextPage<{ user: User }> = () => {
  const router = useRouter();
  const { user, getUser, doLogout } = useUser(router);

  useEffect(() => {
    getUser();
  }, []);

  if (!user) return <PageLoader />;

  return (
    <PageTemplate>
      <p>Welcome {user.username}</p>
      <Button onClick={() => router.push("/char/add")}>create character</Button>
      <ul>
        <li>
          <a>char</a>
        </li>
      </ul>
      <Button onClick={doLogout}>logout</Button>
    </PageTemplate>
  );
};

export default UserPage;
