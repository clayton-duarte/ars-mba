import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

import Button from "../components/Button";
import { useAxios } from "../helpers/axios";
import { User } from "../types";

const UserPage: NextPage<{ user: User }> = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const { apiClient, errorHandler } = useAxios(router);

  const getUser = async () => {
    try {
      const { data } = await apiClient.get<User>("/user");
      setUser(data);
    } catch (err) {
      errorHandler(err);
    }
  };

  const doLogout = async () => {
    try {
      const { data } = await apiClient.get("/logout");
      if (data.isSuccess) router.push("/login");
    } catch (err) {
      errorHandler(err);
    }
  };

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
