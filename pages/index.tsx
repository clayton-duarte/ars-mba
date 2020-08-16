import React from "react";
import { NextPage } from "next";
import Link from "next/link";

import PageTemplate from "../components/PageTemplate";
import { styled } from "../providers/theme";

const Text = styled.p`
  text-align: center;
`;

const HomePage: NextPage = () => {
  return (
    <PageTemplate>
      <Text>Landing page - Under construction</Text>
      <Link href="/char">See Character List</Link>
    </PageTemplate>
  );
};

export default HomePage;
