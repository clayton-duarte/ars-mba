import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PageTemplate from "../components/PageTemplate";
import PageLoader from "../components/PageLoader";
import { useAxios } from "../helpers/axios";
import { useUser } from "../providers/user";
import { User, Character } from "../types";
import Button from "../components/Button";
import Link from "../components/Link";

const UserPage: NextPage<{ user: User }> = () => {
  const router = useRouter();
  const [charList, setCharList] = useState<Character[]>([]);
  const { apiClient, errorHandler } = useAxios(router);
  const { user, getUser, doLogout } = useUser(router);

  const charsByUser = async () => {
    try {
      const { data } = await apiClient.get("/charsByUser");
      setCharList(data);
    } catch (err) {
      errorHandler(err);
    }
  };

  useEffect(() => {
    charsByUser();
    getUser();
  }, []);

  useEffect(() => {}, []);

  if (!user) return <PageLoader />;

  return (
    <PageTemplate>
      <p>Welcome {user.username}</p>
      <Button onClick={() => router.push("/char/new")}>create character</Button>
      <ul>
        {charList.map(({ _id, name }) => (
          <li key={_id}>
            <Link href="/char/[_id]" as={`/char/${_id}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <Button onClick={doLogout}>logout</Button>
    </PageTemplate>
  );
};

export default UserPage;
