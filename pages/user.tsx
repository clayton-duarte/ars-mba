import React from "react";
import { RiUserAddLine, RiRefreshLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PageTemplate from "../components/PageTemplate";
import PageLoader from "../components/PageLoader";
import CharList from "../components/CharList";
import { useUser } from "../providers/user";
import { User } from "../types";

const UserPage: NextPage<{ user: User }> = () => {
  const router = useRouter();
  const { user } = useUser(router);

  if (!user) return <PageLoader />;

  const renderFooterContent = () => {
    return (
      <>
        <RiUserAddLine role="button" onClick={() => router.push("/char/new")} />
        <RiRefreshLine role="button" onClick={() => router.reload()} />
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
