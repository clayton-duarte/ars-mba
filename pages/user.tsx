import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Axios from "axios";

import { User } from "../types";

const UserPage: NextPage<{ user: User }> = () => {
  const [user, setUser] = useState<User>();
  const router = useRouter();

  const getUser = async () => {
    try {
      const { data } = await Axios.get<User>("/api/currentUser");
      setUser(data);
    } catch (err) {
      if (err.response?.status === 401) return router.push("/login");
      if (err.response) throw new Error(JSON.stringify(err.response));
      throw new Error(JSON.stringify(err));
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) return <span>loading...</span>;

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};

export default UserPage;
