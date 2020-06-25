import React from "react";
import { FcFolder } from "react-icons/fc";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PageTemplate from "../components/PageTemplate";
import { styled } from "../providers/theme";

const Grid = styled.section`
  grid-template: auto / auto auto;
  justify-content: center;
  display: grid;
  gap: 1rem;
  @media (min-width: 600px) {
    grid-template: auto / auto auto auto;
  }
  @media (min-width: 768px) {
    grid-template: auto / auto auto auto auto;
  }
  @media (min-width: 1024px) {
    grid-template: auto / auto auto auto auto auto;
  }
  @media (min-width: 1200px) {
    grid-template: auto / auto auto auto auto auto auto;
  }
`;

const Card = styled.button`
  border: ${({ theme }) => theme.shape.BORDER};
  border-color: ${({ theme }) => theme.palette.PRIMARY};
  border-radius: ${({ theme }) => theme.shape.RADIUS};
  background: ${({ theme }) => theme.palette.BG};
  color: ${({ theme }) => theme.palette.PRIMARY};
  text-transform: capitalize;
  place-items: center;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  display: grid;
  height: 10rem;
  padding: 1rem;
  width: 10rem;
  &:disabled {
    filter: grayscale(100%);
    pointer-events: none;
  }
  > svg {
    font-size: 5rem;
  }
`;

const HomePage: NextPage = () => {
  const router = useRouter();

  return (
    <PageTemplate title="dashboard">
      <Grid>
        <Card onClick={() => router.push("/char")}>
          <FcFolder />
          <span>characters</span>
        </Card>

        {[...Array(7)]
          .map((a, index) => index)
          .map((a) => (
            <Card disabled key={a}>
              soon
            </Card>
          ))}
      </Grid>
    </PageTemplate>
  );
};

export default HomePage;
