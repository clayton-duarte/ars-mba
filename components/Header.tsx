import React, { FunctionComponent, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/client";
import { FcHome, FcExport } from "react-icons/fc";
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
  const router = useRouter();
  const { user, getUser } = useUser(router);

  useEffect(() => {
    if (!user) getUser();
  }, []);

  if (!user) return <span />;

  return (
    <StyledHeader>
      <FcHome role="button" onClick={() => router.push("/")} />
      <StyledWelcome>Welcome {user.username}</StyledWelcome>
      <FcExport role="button" onClick={doLogout} />
    </StyledHeader>
  );
};

export default Header;
