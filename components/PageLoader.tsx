import React, { FunctionComponent, useEffect, useState } from "react";
import { FcSynchronize } from "react-icons/fc";

import { styled } from "../providers/theme";

const Wrapper = styled.aside`
  @keyframes rotate {
    100% {
      transform: rotate(-360deg);
    }
  }
  color: ${(props) => props.theme.palette.PRIMARY};
  animation: rotate 1s infinite;
  place-items: center;
  font-size: 8rem;
  display: grid;
  height: 100%;
`;

const PageLoader: FunctionComponent = () => {
  return (
    <Wrapper>
      <FcSynchronize />
    </Wrapper>
  );
};

export default PageLoader;
