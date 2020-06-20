import React, { FunctionComponent } from "react";

import { styled } from "../providers/theme";

const StyledBar = styled.div<{ delay: number; width: number }>`
  @keyframes slide {
    from {
      left: -100%;
    }
    to {
      left: 100%;
    }
  }
  border-radius: ${(props) => props.theme.shape.RADIUS};
  background: ${(props) => props.theme.palette.PRIMARY};
  margin: ${(props) => props.theme.shape.MARGIN};
  color: ${(props) => props.theme.palette.BG};
  width: ${(props) => props.width}%;
  position: relative;
  overflow: hidden;
  opacity: 0.1;
  height: 1rem;
  &:after {
    animation: slide 2s infinite ${(props) => props.delay}s;
    background-image: linear-gradient(
      90deg,
      transparent 25%,
      ${(props) => props.theme.palette.BG} 50%,
      transparent 75%
    );
    display: inline-block;
    position: absolute;
    height: 1rem;
    width: 100%;
    content: "";
  }
`;

const SkeletonLoader: FunctionComponent = () => {
  return (
    <>
      {[...Array(Math.round(Math.random() * 5 + 5))]
        .map((a, index) => index)
        .map((a) => (
          <StyledBar
            width={Math.random() * 50 + 50}
            delay={Math.random()}
            key={a}
          />
        ))}
    </>
  );
};

export default SkeletonLoader;
