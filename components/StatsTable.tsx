import React, { FunctionComponent } from "react";
import { rgba } from "polished";

import SkeletonLoader from "./SkeletonLoader";
import { styled } from "../providers/theme";
import { Character } from "../types";
import SubTitle from "./SubTitle";

const Wrapper = styled.section`
  grid-template: auto / 1fr;
  display: grid;
  gap: 1rem;
`;

const Grid = styled.section`
  grid-template: auto / 1fr 1fr;
  justify-content: space-between;
  display: grid;
  gap: 0.5rem;
`;

const Item = styled.div<{ value?: boolean }>`
  background: ${(props) => rgba(props.theme.palette.PRIMARY, 0.125)};
  text-align: ${(props) => (props.value ? "right" : "left")};
  border-radius: ${(props) => props.theme.shape.RADIUS};
  padding: ${(props) => props.theme.shape.PADDING};
  text-transform: capitalize;
`;

const StatsTable: FunctionComponent<{ char: Character }> = ({ char }) => {
  if (!char) return <SkeletonLoader />;

  const { endurance, strength, accuracy, mobility } = char;

  return (
    <Wrapper>
      <SubTitle>stats</SubTitle>
      <Grid>
        <Item>endurance:</Item>
        <Item value>{endurance}</Item>
        <Item>strength:</Item>
        <Item value>{strength}</Item>
        <Item>accuracy:</Item>
        <Item value>{accuracy}</Item>
        <Item>mobility:</Item>
        <Item value>{mobility}</Item>
      </Grid>
    </Wrapper>
  );
};

export default StatsTable;
