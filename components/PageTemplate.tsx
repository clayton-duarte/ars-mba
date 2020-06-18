import React, { FunctionComponent } from "react";

import { styled } from "../providers/theme";
import PageTitle from "./PageTitle";
import Header from "./Header";
import Footer from "./Footer";

const StyledMain = styled.main`
  flex-direction: column;
  min-height: 100vh;
  display: flex;
`;

const StyledContent = styled.article`
  padding: 0 1rem;
  flex-grow: 1;
`;

const Template: FunctionComponent<{
  footerContent: JSX.Element;
  title?: string;
}> = ({ footerContent, children, title }) => {
  return (
    <StyledMain>
      <Header />
      <StyledContent>
        {title && <PageTitle>{title}</PageTitle>}
        {children}
      </StyledContent>
      <Footer>{footerContent}</Footer>
    </StyledMain>
  );
};

export default Template;
