import React, { FunctionComponent } from "react";
import { styled } from "../providers/theme";

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.palette.PRIMARY};
  color: ${(props) => props.theme.palette.BG};
  position: sticky;
  display: grid;
  z-index: 999;
  bottom: 0;
`;

const StyledContainer = styled.div`
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  font-size: 2rem;
  padding: 0 1rem;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  width: 100%;
`;

const Footer: FunctionComponent = ({ children }) => {
  return (
    <StyledFooter>
      <StyledContainer>{children}</StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
