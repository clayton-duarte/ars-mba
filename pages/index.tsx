import React from "react";
import { RiFolderUserLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PageTemplate from "../components/PageTemplate";
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
  text-transform: uppercase;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  margin: 0.5rem;
  display: flex;
  height: 10rem;
  width: 10rem;
  &:disabled {
    filter: grayscale(100%);
    pointer-events: none;
  }
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

        {[...Array(7)]
          .map((a, index) => index)
          .map((a) => (
            <Card disabled key={a}>
              soon
            </Card>
          ))}
      </Row>
    </PageTemplate>
  );
};

export default HomePage;
