import React, { FunctionComponent } from "react";

import { styled } from "../providers/theme";
import PageTitle from "./PageTitle";
import Header from "./Header";
import Footer from "./Footer";

const StyledMain = styled.main`
  grid-template: auto 1fr auto / 1fr;
  min-height: 100%;
  display: grid;
  gap: 1rem;
`;

const StyledContent = styled.article`
  align-content: start;
  padding: 0 1rem;
  display: grid;
  gap: 1rem;
`;

const Template: FunctionComponent<{
  footerContent?: JSX.Element;
  title?: string;
}> = ({ footerContent, children, title }) => {
  return (
    <StyledMain>
      <Header />
      <StyledContent>
        {title && <PageTitle>{title}</PageTitle>}
        {children}
      </StyledContent>
      {footerContent && <Footer>{footerContent}</Footer>}
    </StyledMain>
  );
};

export default Template;
