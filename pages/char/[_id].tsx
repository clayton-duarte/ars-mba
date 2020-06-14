import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

import { useAxios } from "../../helpers/axios";

const CharPage: NextPage = () => {
  const router = useRouter();
  const [char, setChar] = useState();
  const { apiClient, errorHandler } = useAxios(router);
  const charId = router.query._id;

  const getChar = async (charId: string) => {
    try {
      const { data } = await apiClient.get("/char", { params: { charId } });
      setChar(data);
    } catch (err) {
      errorHandler(err);
    }
  };

  useEffect(() => {
    charId && getChar(String(charId));
  }, [charId]);

  return <pre>{JSON.stringify(char, null, 2)}</pre>;
};

export default CharPage;
