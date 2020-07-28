import React, { FunctionComponent } from "react";
import { rgba } from "polished";

import { styled } from "../providers/theme";

const Grid = styled.section`
  background: ${(props) => rgba(props.theme.palette.PRIMARY, 0.25)};
  border-radius: ${(props) => props.theme.shape.RADIUS};
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  cursor: pointer;
  display: grid;
  gap: 0.5rem;
  &:hover {
    background: ${(props) => props.theme.palette.SECONDARY};
    color: ${(props) => props.theme.palette.BG};
  }
`;

const Item = styled.div<{ value?: boolean }>`
  text-align: ${(props) => (props.value ? "right" : "left")};
  padding: ${(props) => props.theme.shape.PADDING};
  text-transform: capitalize;
`;

interface TestButtonProps {
  onClick: () => void;
  label: string;
  value: number;
}

const TestButton: FunctionComponent<TestButtonProps> = ({
  onClick,
  label,
  value,
}) => {
  return (
    <Grid onClick={onClick}>
      <Item>{label}</Item>
      <Item value>{value}</Item>
    </Grid>
  );
};

export default TestButton;
