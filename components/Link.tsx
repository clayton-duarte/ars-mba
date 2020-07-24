import React, { FunctionComponent, HTMLProps } from "react";
import NextLink from "next/link";

import { styled } from "../providers/theme";

const StyledA = styled.a`
  color: ${(props) => props.theme.palette.PRIMARY};
  text-decoration: underline;
  &:hover {
    color: ${(props) => props.theme.palette.SECONDARY};
  }
`;

const Link: FunctionComponent<HTMLProps<HTMLAnchorElement>> = ({
  as: asProp,
  children,
  href,
}) => {
  return (
    <NextLink passHref href={href} as={asProp || href}>
      <StyledA>{children}</StyledA>
    </NextLink>
  );
};

export default Link;
