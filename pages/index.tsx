import { NextPage } from "next";

import { styled } from "../providers/theme";

const Container = styled.section`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 100vh;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.palette.PRIMARY};
  font-size: 2rem;
  line-height: 1;
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.palette.SECONDARY};
  font-size: 1rem;
  line-height: 1;
  margin: 1rem 0;
`;

const HomePage: NextPage = () => {
  return (
    <Container>
      <Title>Under construction</Title>
      <Paragraph>Future survival-alpha RPG system web app</Paragraph>
    </Container>
  );
};

export default HomePage;
