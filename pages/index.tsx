import React from "react";
import { RiFolderUserLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PageTemplate from "../components/PageTemplate";
// import PageLoader from "../components/PageLoader";
import { styled } from "../providers/theme";

const Row = styled.section`
  justify-content: center;
  margin: -0.5rem;
  flex-wrap: wrap;
  display: flex;
`;

const Card = styled.button`
  border: ${({ theme }) => theme.shape.BORDER};
  border-color: ${({ theme }) => theme.palette.PRIMARY};
  border-radius: ${({ theme }) => theme.shape.RADIUS};
  background: ${({ theme }) => theme.palette.BG};
  padding: ${({ theme }) => theme.shape.PADDING};
  color: ${({ theme }) => theme.palette.PRIMARY};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0.5rem;
  display: flex;
  height: 10rem;
  width: 10rem;
  text-transform: uppercase;
  font-weight: 700;
  > svg {
    font-size: 5rem;
    margin-bottom: 1rem;
  }
`;

const HomePage: NextPage = () => {
  const router = useRouter();

  return (
    <PageTemplate title="dashboard">
      <Row>
        <Card onClick={() => router.push("/char")}>
          <RiFolderUserLine />
          <span>characters</span>
        </Card>

        {[...Array(9)]
          .map((a, index) => index)
          .map((a) => (
            <Card key={a}>{a}</Card>
          ))}
      </Row>
    </PageTemplate>
  );
};

export default HomePage;
