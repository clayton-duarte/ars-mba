import React, { FunctionComponent } from "react";
import { rgba } from "polished";

import SkeletonLoader from "./SkeletonLoader";
import { styled } from "../providers/theme";
import { useOdds } from "../helpers/odds";
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

const Item = styled.div<{ value?: boolean; onClick? }>`
  border: 2px solid
    ${(props) =>
      props.onClick ? props.theme.palette.SECONDARY : "transparent"};
  background: ${(props) => rgba(props.theme.palette.PRIMARY, 0.125)};
  text-align: ${(props) => (props.value ? "right" : "left")};
  cursor: ${(props) => (props.onClick ? "pointer" : "auto")};
  border-radius: ${(props) => props.theme.shape.RADIUS};
  padding: ${(props) => props.theme.shape.PADDING};
  text-transform: capitalize;
  ${(props) =>
    props.onClick &&
    `&:hover {
      background: ${props.theme.palette.SECONDARY};
      color: ${props.theme.palette.BG};
    }`};
`;

const StatsTable: FunctionComponent<{ char: Character }> = ({ char }) => {
  if (!char) return <SkeletonLoader />;
  const { endurance, strength, accuracy, mobility } = char;

  const odds = useOdds(char);
  const { rollEndurance, rollStrength, rollAccuracy, rollMobility } = odds;

  return (
    <Wrapper>
      <SubTitle>stats</SubTitle>
      <Grid>
        <Item>endurance:</Item>
        <Item value onClick={rollEndurance}>
          {endurance}
        </Item>
        <Item>strength:</Item>
        <Item value onClick={rollStrength}>
          {strength}
        </Item>
        <Item>accuracy:</Item>
        <Item value onClick={rollAccuracy}>
          {accuracy}
        </Item>
        <Item>mobility:</Item>
        <Item value onClick={rollMobility}>
          {mobility}
        </Item>
      </Grid>
    </Wrapper>
  );
};

export default StatsTable;
