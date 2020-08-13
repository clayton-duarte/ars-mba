import React from "react";
import { FcGoodDecision, FcMakeDecision } from "react-icons/fc";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PageTemplate from "../../components/PageTemplate";
import CharList from "../../components/CharList";
import { User } from "../../types";

const UserPage: NextPage<{ user: User }> = () => {
  const router = useRouter();

  const renderFooterContent = () => {
    return (
      <>
        <FcMakeDecision role="button" onClick={() => router.reload()} />
        <span />
        <FcGoodDecision
          onClick={() => router.push("/char/new")}
          role="button"
        />
      </>
    );
  };

  return (
    <PageTemplate title="character list" footerContent={renderFooterContent()}>
      <CharList />
    </PageTemplate>
  );
};

export default UserPage;
