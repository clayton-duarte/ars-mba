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
  background: ${(props) => rgba(props.theme.palette.PRIMARY, 0.25)};
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
      <SubTitle>actions</SubTitle>
      <Grid>
        <Item>hit:</Item>
        <Item value>{mobility + strength}</Item>
        <Item>shot:</Item>
        <Item value>{endurance + accuracy}</Item>
        <Item>parry:</Item>
        <Item value>{endurance + strength}</Item>
        <Item>evade:</Item>
        <Item value>{mobility + accuracy}</Item>
      </Grid>
    </Wrapper>
  );
};

export default StatsTable;
