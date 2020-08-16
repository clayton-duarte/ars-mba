import React, { FunctionComponent } from "react";

import { styled } from "../providers/theme";

export enum ToasterColors {
  SUCCESS = "#96bb7c",
  NEUTRAL = "#3282b8",
  ERROR = "#e84a5f",
  WARN = "#eebb4d",
}

export interface ToasterProps {
  type?: keyof typeof ToasterColors;
  message: string;
  time: number;
}

interface StyledToasterProps {
  type: keyof typeof ToasterColors;
  isVisible: boolean;
}

const StyledToaster = styled.aside<StyledToasterProps>`
  bottom: ${(props) => (props.isVisible ? "4rem" : "-5rem")};
  border-radius: ${(props) => props.theme.shape.RADIUS};
  background: ${(props) => ToasterColors[props.type]};
  color: ${(props) => props.theme.palette.BG};
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  width: calc(100% - 2rem);
  transition: 0.25s ease;
  max-width: 425px;
  position: fixed;
  padding: 1rem;
  z-index: 999;
  margin: 1rem;
`;

const Toaster: FunctionComponent<ToasterProps> = ({
  type = "NEUTRAL",
  message,
  time,
}) => {
  return (
    <StyledToaster isVisible={Boolean(time)} type={type}>
      {message}
    </StyledToaster>
  );
};

export default Toaster;
