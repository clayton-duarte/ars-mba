import styled from "styled-components";

const Container = styled.section`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 100vh;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  line-height: 1;
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  line-height: 1;
  margin: 1rem 0;
`;

export default function Home() {
  return (
    <Container>
      <Title>Under construction</Title>
      <Paragraph>Future survival-alpha RPG system web app</Paragraph>
    </Container>
  );
}
