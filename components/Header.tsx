import React, { FunctionComponent } from "react";
import { FcHome, FcExport, FcImport } from "react-icons/fc";
import { useRouter } from "next/router";

import { useUser } from "../providers/session";
import { styled } from "../providers/theme";

const StyledWelcome = styled.span`
  text-transform: capitalize;
  font-size: 1rem;
`;

const StyledHeader = styled.header`
  background: ${(props) => props.theme.palette.PRIMARY};
  color: ${(props) => props.theme.palette.BG};
  position: sticky;
  display: grid;
  z-index: 999;
  top: 0;
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

const Header: FunctionComponent = () => {
  const { user, signIn, signOut } = useUser();
  const router = useRouter();

  const renderWelcome = () => {
    if (user) return `Welcome ${user.name}`;
    return "please signin";
  };

  const renderRightAction = () => {
    if (user) return <FcExport role="button" onClick={signOut} />;
    return <FcImport role="button" onClick={() => signIn("cognito")} />;
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <FcHome role="button" onClick={() => router.push("/")} />
        <StyledWelcome>{renderWelcome()}</StyledWelcome>
        {renderRightAction()}
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
