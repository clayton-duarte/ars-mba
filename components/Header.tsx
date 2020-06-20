import React, { FunctionComponent } from "react";
import { RiHome2Line, RiLogoutBoxRLine } from "react-icons/ri";
import { useRouter } from "next/router";

import { useUser } from "../providers/user";
import { styled } from "../providers/theme";

const StyledWelcome = styled.span`
  text-transform: capitalize;
  font-size: 1rem;
`;

const StyledHeader = styled.header`
  background: ${(props) => props.theme.palette.PRIMARY};
  color: ${(props) => props.theme.palette.BG};
  justify-content: space-between;
  place-items: center;
  position: sticky;
  font-size: 2rem;
  padding: 1rem;
  display: flex;
  z-index: 999;
  top: 0;
`;

const Header: FunctionComponent = () => {
  const router = useRouter();
  const { user, doLogout } = useUser(router);

  if (!user) return null;

  return (
    <StyledHeader>
      <RiHome2Line role="button" onClick={() => router.push("/")} />
      <StyledWelcome>Welcome {user.username}</StyledWelcome>
      <RiLogoutBoxRLine role="button" onClick={doLogout} />
    </StyledHeader>
  );
};

export default Header;
