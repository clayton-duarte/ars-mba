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
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto;
  place-items: center;
  position: sticky;
  font-size: 2rem;
  padding: 1rem;
  display: grid;
  z-index: 999;
  top: 0;
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
      <FcHome role="button" onClick={() => router.push("/")} />
      <StyledWelcome>{renderWelcome()}</StyledWelcome>
      {renderRightAction()}
    </StyledHeader>
  );
};

export default Header;
